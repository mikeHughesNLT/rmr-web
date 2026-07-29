/**
 * /api/health — RMR site health check
 *
 * Called weekly by Vercel Cron (vercel.json) and optionally by hand.
 * Tests: Gmail SMTP credentials, Hospitable API, key public pages.
 * Posts a Slack alert if anything fails.
 *
 * Secured with CRON_SECRET so only Vercel (or you) can trigger it.
 */

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type CheckResult = { name: string; ok: boolean; detail: string };

// ── individual checks ─────────────────────────────────────────────────────────

async function checkGmail(): Promise<CheckResult> {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
    await transport.verify();
    return { name: "Gmail SMTP", ok: true, detail: `${process.env.GMAIL_USER} verified` };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return { name: "Gmail SMTP", ok: false, detail: msg };
  }
}

async function checkHospitable(): Promise<CheckResult> {
  try {
    const res = await fetch(
      `${process.env.HOSPITABLE_API_BASE ?? "https://public.api.hospitable.com/v2"}/properties`,
      {
        headers: { Authorization: `Bearer ${process.env.HOSPITABLE_PAT}` },
        signal: AbortSignal.timeout(8000),
      }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { name: "Hospitable API", ok: true, detail: `GET /properties → ${res.status}` };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return { name: "Hospitable API", ok: false, detail: msg };
  }
}

async function checkPage(label: string, path: string): Promise<CheckResult> {
  try {
    const base = process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://stayredmountain.com";
    const res = await fetch(`${base}${path}`, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { name: label, ok: true, detail: `${res.status}` };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return { name: label, ok: false, detail: msg };
  }
}

// ── slack alert ───────────────────────────────────────────────────────────────

async function postSlack(results: CheckResult[]) {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return;

  const failures = results.filter(r => !r.ok);
  const allGood  = failures.length === 0;

  const emoji  = allGood ? "✅" : "🚨";
  const header = allGood
    ? "stayredmountain.com — weekly health check PASSED"
    : `stayredmountain.com — ${failures.length} check(s) FAILED`;

  const lines = results.map(r =>
    `${r.ok ? "✅" : "❌"} *${r.name}*: ${r.detail}`
  );

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `${emoji} ${header}`,
      blocks: [
        { type: "header", text: { type: "plain_text", text: `${emoji} ${header}` } },
        { type: "section", text: { type: "mrkdwn", text: lines.join("\n") } },
        ...(failures.length > 0 ? [{
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Action needed:* check Vercel env vars → <https://vercel.com/mikehughesnlts-projects/rmr-web/settings/environment-variables|open Vercel>`,
          },
        }] : []),
      ],
    }),
  }).catch(e => console.error("[health] Slack post failed:", e));
}

// ── handler ───────────────────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  // Require CRON_SECRET header so random traffic can't trigger it
  const secret = process.env.CRON_SECRET;
  const auth   = req.headers.get("authorization");
  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const results = await Promise.all([
    checkGmail(),
    checkHospitable(),
    checkPage("Home page", "/"),
    checkPage("Book page", "/book"),
    checkPage("API availability", "/api/availability"),
  ]);

  const allOk = results.every(r => r.ok);

  // Always post to Slack (so you get a weekly "all good" ping too)
  await postSlack(results);

  console.log("[health]", JSON.stringify(results));

  return NextResponse.json({ ok: allOk, checks: results });
}
