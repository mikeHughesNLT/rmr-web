import Script from "next/script";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";

export default function BookPage() {
  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      {/* Pre-fill iframe dates from URL params (?checkin=&checkout=&adults=...) */}
      <Script id="hospitable-params" strategy="afterInteractive">{`
        function updateIframeSrc() {
          const iframe = document.getElementById("booking-iframe");
          if (!iframe) return;
          const p = new URLSearchParams(window.location.search);
          const checkin  = p.get("checkin");
          const checkout = p.get("checkout");
          if (!checkin || !checkout) return;
          const params = new URLSearchParams({
            checkin,
            checkout,
            adults:   p.get("adults")   || "",
            children: p.get("children") || "",
            infants:  p.get("infants")  || "",
            pets:     p.get("pets")     || "",
          });
          const base = iframe.src.split("?")[0];
          iframe.src = base + "?" + params.toString();
        }
        window.addEventListener("load", updateIframeSrc);
      `}</Script>

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

        {/* Step 1 */}
        <div className="flex items-center gap-4 mb-3">
          <span className="bg-[var(--color-forest)] text-[var(--color-gold)] text-xs font-sans tracking-widest uppercase px-3 py-1">Step 1</span>
          <p className="text-sm font-sans text-[var(--color-bark)]/60">Check which dates are open — white = available, grey = booked</p>
        </div>
        <AvailabilityCalendar />

        {/* Step 2 */}
        <div className="flex items-center gap-4 mt-12 mb-3">
          <span className="bg-[var(--color-gold)] text-white text-xs font-sans tracking-widest uppercase px-3 py-1">Step 2</span>
          <p className="text-sm font-sans text-[var(--color-bark)]/60">Select your dates below and complete your booking</p>
        </div>

        {/* Hospitable booking checkout iframe */}
        <div>
          <iframe
            id="booking-iframe"
            sandbox="allow-top-navigation allow-scripts allow-same-origin"
            style={{ width: "100%", height: "900px" }}
            frameBorder={0}
            src="https://booking.hospitable.com/widget/a1d62494-3545-4d00-a069-f863b24abc03/2190928"
          />
        </div>

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
