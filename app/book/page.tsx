import Script from "next/script";
import HospitableWidget from "@/components/HospitableWidget";

export default function BookPage() {
  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      {/* Pass URL search params into the booking iframe once it loads */}
      <Script id="hospitable-params" strategy="afterInteractive">{`
        function getQueryParams(param) {
          const urlSearchParams = new URLSearchParams(window.location.search);
          return urlSearchParams.get(param);
        }
        function updateIframeSrc() {
          const iframe = document.getElementById("booking-iframe");
          if (!iframe) return;
          const checkin  = getQueryParams("checkin");
          const checkout = getQueryParams("checkout");
          const adults   = getQueryParams("adults");
          const children = getQueryParams("children");
          const infants  = getQueryParams("infants");
          const pets     = getQueryParams("pets");
          let newSrc = iframe.src;
          newSrc += newSrc.includes("?") ? "&" : "?";
          newSrc += \`checkin=\${checkin}&checkout=\${checkout}&adults=\${adults}&children=\${children}&infants=\${infants}&pets=\${pets}\`;
          iframe.src = newSrc;
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

        {/* Booking widget */}
        <HospitableWidget className="min-h-96" />

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
