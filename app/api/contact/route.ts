import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import nodemailer from "nodemailer";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ── email / SMS helpers ───────────────────────────────────────────────────────

function makeTransport() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

async function notify(subject: string, text: string, smsText?: string) {
  const transport = makeTransport();
  const from = `"Red Mountain Retreat" <${process.env.GMAIL_USER}>`;

  const jobs: Promise<unknown>[] = [
    transport.sendMail({ from, to: process.env.GMAIL_USER, subject, text }),
  ];

  // AT&T SMS gateway
  if (process.env.NOTIFICATION_PHONE) {
    const sms = `${process.env.NOTIFICATION_PHONE}@txt.att.net`;
    jobs.push(
      transport.sendMail({ from, to: sms, subject: "", text: smsText ?? text.slice(0, 140) })
    );
  }

  const results = await Promise.allSettled(jobs);
  results.forEach((r, i) => {
    if (r.status === "rejected") {
      console.error(`[contact] email job ${i} failed:`, r.reason);
    } else {
      console.log(`[contact] email job ${i} sent OK`);
    }
  });
}

async function postSlack(blocks: object[], fallback: string) {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: fallback, blocks }),
  }).catch(() => {});
}

// ── Claude assessment ─────────────────────────────────────────────────────────

async function assess(name: string, email: string, dates: string, group: string, message: string) {
  const msg = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 200,
    messages: [{
      role: "user",
      content: `You screen inquiries for Red Mountain Retreat — a luxury 7BR mountain lodge in Maple Falls, WA (sleeps 14, treehouse sauna, Steinway piano, 25 acres).

Inquiry:
Name: ${name}
Email: ${email}
Dates: ${dates || "not specified"}
Group: ${group || "not specified"}
Message: ${message}

Reply with ONLY valid JSON (no markdown):
{"summary":"One sentence starting with It sounds like you're planning (max 20 words)","spam":false,"call_offer":true}

spam=true if this looks like spam or a bot.
call_offer=true if this is a serious inquiry worth offering an immediate callback.`,
    }],
  });

  const raw = msg.content[0].type === "text" ? msg.content[0].text.trim() : "{}";
  return JSON.parse(raw) as { summary: string; spam: boolean; call_offer: boolean };
}

// ── POST handler ──────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const body = await req.json();

  // ── Call-back request (from success screen) ──────────────────────────────
  if (body._call_request) {
    const { name, email } = body;
    const alertText = `🚨 *CALL REQUESTED* — ${name} (${email}) wants someone to call them NOW`;

    await Promise.allSettled([
      notify(
        "🚨 CALL REQUESTED — Red Mountain Retreat",
        `${name} (${email}) clicked "Call me now" on the contact form.`
      ),
      postSlack([{
        type: "section",
        text: { type: "mrkdwn", text: alertText },
      }], alertText),
    ]);

    return NextResponse.json({ success: true });
  }

  // ── Bot prevention ────────────────────────────────────────────────────────
  if (body._honey) return NextResponse.json({ success: true }); // honeypot triggered
  const elapsed = Date.now() - Number(body._ts ?? 0);
  if (elapsed < 3000) return NextResponse.json({ success: true }); // too fast

  const { name, email, dates, group_size, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // ── Claude assessment ─────────────────────────────────────────────────────
  let summary = "";
  let callOffer = false;

  try {
    const result = await assess(name, email, dates ?? "", group_size ?? "", message);
    if (result.spam) return NextResponse.json({ success: true }); // silent kill
    summary = result.summary ?? "";
    callOffer = result.call_offer ?? false;
  } catch {
    // Claude down — still process
  }

  // ── Notifications ─────────────────────────────────────────────────────────
  const emailBody = [
    `New inquiry from ${name} <${email}>`,
    `Dates: ${dates || "—"}`,
    `Group: ${group_size || "—"}`,
    "",
    message,
    summary ? `\nAI: ${summary}` : "",
  ].join("\n");

  const smsBody = `RMR: ${name}${dates ? ` · ${dates}` : ""} · ${message.slice(0, 80)}`;

  const slackBlocks = [
    {
      type: "header",
      text: { type: "plain_text", text: "🏔 New RMR Inquiry" },
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*From:*\n${name}` },
        { type: "mrkdwn", text: `*Email:*\n${email}` },
        { type: "mrkdwn", text: `*Dates:*\n${dates || "—"}` },
        { type: "mrkdwn", text: `*Group:*\n${group_size || "—"}` },
      ],
    },
    {
      type: "section",
      text: { type: "mrkdwn", text: `*Message:*\n${message}` },
    },
    ...(summary
      ? [{ type: "context", elements: [{ type: "mrkdwn", text: `🤖 _${summary}_` }] }]
      : []),
  ];

  await Promise.allSettled([
    notify(`🏔 NEW INQUIRY — ${name}`, emailBody, smsBody),
    postSlack(slackBlocks, `New RMR inquiry from ${name}`),
  ]);

  return NextResponse.json({ success: true, summary, callOffer });
}
