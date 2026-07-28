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
  const email = (body.email ?? "").trim().toLowerCase();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const transport = makeTransport();
  const from = `"Red Mountain Retreat" <${process.env.GMAIL_USER}>`;

  await Promise.allSettled([
    // Notify Mike
    transport.sendMail({
      from,
      to: process.env.GMAIL_USER,
      subject: "🌠 Perseid Guide lead captured",
      text: `New email captured from /dark-sky landing page:\n\n${email}\n\nAdd to your list.`,
    }),

    // Acknowledge to subscriber
    transport.sendMail({
      from,
      to: email,
      subject: "Your Red Mountain Perseid Guide",
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2a2a2a;">
          <p style="margin-bottom: 16px;">Hi,</p>
          <p style="margin-bottom: 16px;">
            Thanks for your interest in the Perseid Dark Sky Weekend at Red Mountain Retreat.
          </p>
          <p style="margin-bottom: 16px; padding: 16px; background: #f5f0e8; border-left: 3px solid #C8963E;">
            <strong>Quick preview:</strong> the key on the night of Aug 12–13 is to face south
            after midnight, put the Fraser Valley glow at your back, and look roughly 45° away
            from the northeast (where Perseus rises) for the longest streaks. Five hours of real
            dark, starting around 10:45 p.m.
          </p>
          <p style="margin-bottom: 16px;">
            Questions? Reply to this email or visit
            <a href="https://stayredmountain.com/dark-sky" style="color: #C8963E;">stayredmountain.com/dark-sky</a>.
          </p>
          <p>— Mike at Red Mountain Retreat</p>
          <hr style="margin: 32px 0; border: none; border-top: 1px solid #e0d8c8;" />
          <p style="font-size: 11px; color: #888;">
            Red Mountain Retreat · Maple Falls, WA ·
            <a href="https://stayredmountain.com" style="color: #888;">stayredmountain.com</a>
          </p>
        </div>
      `,
    }),
  ]);

  return NextResponse.json({ success: true });
}
