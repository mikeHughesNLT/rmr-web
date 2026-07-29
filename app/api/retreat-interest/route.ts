import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function makeTransport() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const name    = (body.name    ?? "").trim();
  const email   = (body.email   ?? "").trim().toLowerCase();
  const phone   = (body.phone   ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !email.includes("@")) {
    return NextResponse.json({ error: "Name and valid email are required." }, { status: 400 });
  }

  const transport = makeTransport();
  const from = `"Red Mountain Retreat" <${process.env.GMAIL_USER}>`;

  // Send to both addresses to ensure delivery
  const adminRecipients = ["mike@stayredmountain.com", process.env.GMAIL_USER].filter(Boolean).join(", ");

  const bodyText = [
    `New couples retreat inquiry:`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone || "(not provided)"}`,
    `Message: ${message || "(none)"}`,
    ``,
    `Submitted via stayredmountain.com/retreats/couples`,
  ].join("\n");

  try {
    await transport.sendMail({
      from,
      to: adminRecipients,
      subject: `Couples Retreat interest — ${name}`,
      text: bodyText,
    });
    console.log(`[retreat-interest] Admin notification sent to ${adminRecipients}`);
  } catch (err) {
    console.error(`[retreat-interest] Failed to send admin notification:`, err);
  }

  try {
    await transport.sendMail({
      from,
      to: email,
      subject: "We received your Red Mountain Couples Retreat inquiry",
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2a2a2a; line-height: 1.7;">
          <p style="margin-bottom: 16px;">Hi ${name},</p>
          <p style="margin-bottom: 16px;">
            Thank you for your interest in the <strong>Red Mountain Couples Retreat</strong>.
            We've received your message and will be in touch shortly with details on the
            March 2027 weekend.
          </p>
          <p style="margin-bottom: 16px;">
            In the meantime, feel free to reply to this email with any questions.
          </p>
          <p style="margin-bottom: 8px;">— Mike Hughes</p>
          <p style="color: #666; font-size: 13px;">Red Mountain Retreat · Maple Falls, WA</p>
          <hr style="margin: 32px 0; border: none; border-top: 1px solid #e0d8c8;" />
          <p style="font-size: 11px; color: #888;">
            <a href="https://stayredmountain.com" style="color: #888;">stayredmountain.com</a>
          </p>
        </div>
      `,
    });
    console.log(`[retreat-interest] Acknowledgement sent to ${email}`);
  } catch (err) {
    console.error(`[retreat-interest] Failed to send acknowledgement:`, err);
  }

  return NextResponse.json({ success: true });
}
