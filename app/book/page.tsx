// ─────────────────────────────────────────────────────────────────────────────
// TO ACTIVATE THE BOOKING WIDGET:
//
// 1. Go to: my.hospitable.com → Direct Bookings → Website
// 2. Make sure "Direct" channel is enabled (enable Direct Premium for USA)
// 3. In the Properties section, find Red Mountain Retreat → "Copy widget code"
// 4. Replace the WIDGET_EMBED_CODE placeholder below with your <script> tag
//
// The widget syncs automatically with Airbnb/VRBO calendars — no double bookings.
// ─────────────────────────────────────────────────────────────────────────────

// Swap this to "true" once the widget code is pasted in below
const WIDGET_ACTIVE = false;

// Paste the full <script ...></script> tag from hospitable here:
const WIDGET_EMBED_CODE = `
  <!-- paste hospitable widget <script> tag here -->
`;

import Script from "next/script";

export default function BookPage() {
  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Book Direct</p>
        <h1 className="font-display text-5xl text-[var(--color-forest)] font-light mb-4">
          Check Availability
        </h1>
        <p className="text-[var(--color-bark)]/70 font-sans mb-1">
          Book directly — no Airbnb or VRBO service fees.
        </p>
        <p className="text-[var(--color-bark)]/50 font-sans text-sm mb-10">
          From $898/night · Sleeps 14 · 7 bedrooms · 3.5 baths
        </p>

        {/* Booking widget */}
        {WIDGET_ACTIVE ? (
          <>
            <div id="hospitable-widget" className="min-h-96" />
            <Script
              id="hospitable-booking"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: WIDGET_EMBED_CODE }}
            />
          </>
        ) : (
          /* Temporary CTA until widget is activated */
          <div className="bg-white border border-[var(--color-cream-dark)] p-10 text-center">
            <p className="font-display text-3xl text-[var(--color-forest)] mb-4">
              Ready to book?
            </p>
            <p className="text-[var(--color-bark)]/60 font-sans text-sm mb-8 max-w-md mx-auto">
              Direct booking is coming soon — for now, check availability and book on Airbnb,
              or reach out directly to discuss your dates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.airbnb.com/rooms/1626988366545015306"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-gold)] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans">
                View on Airbnb
              </a>
              <a
                href="/contact"
                className="border-2 border-[var(--color-forest)] text-[var(--color-forest)] px-8 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-forest)] hover:text-white transition-colors font-sans">
                Contact Us Directly
              </a>
            </div>
          </div>
        )}

        {/* Details */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-sans">
          <div className="border-t-2 border-[var(--color-gold)] pt-4">
            <p className="font-medium text-[var(--color-forest)] mb-1">Check-in</p>
            <p className="text-[var(--color-bark)]/70">3:00 PM — Midnight<br />Smart lock, no key exchange</p>
          </div>
          <div className="border-t-2 border-[var(--color-gold)] pt-4">
            <p className="font-medium text-[var(--color-forest)] mb-1">Check-out</p>
            <p className="text-[var(--color-bark)]/70">11:00 AM</p>
          </div>
          <div className="border-t-2 border-[var(--color-gold)] pt-4">
            <p className="font-medium text-[var(--color-forest)] mb-1">Direct Booking Savings</p>
            <p className="text-[var(--color-bark)]/70">No 14% guest service fee.<br />Same property, lower total.</p>
          </div>
        </div>

        {/* Pets note */}
        <div className="mt-8 p-5 bg-[var(--color-cream-dark)] text-sm font-sans text-[var(--color-bark)]/70">
          <strong className="text-[var(--color-forest)]">Dogs welcome.</strong>{" "}
          $35/night per dog (max 2), $200 refundable deposit. Dogs must be 1yr+.
          20 acres of trails — a dog&apos;s paradise.
        </div>

      </div>
    </div>
  );
}
