export default function BookPage() {
  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Book Direct</p>
        <h1 className="font-display text-5xl text-[var(--color-forest)] font-light mb-4">
          Check Availability
        </h1>
        <p className="text-[var(--color-bark)]/70 font-sans mb-2">
          Book directly with us — no Airbnb or VRBO service fees.
        </p>
        <p className="text-[var(--color-bark)]/50 font-sans text-sm mb-12">
          $898/night · Sleeps 14 · 7 bedrooms · 3.5 baths
        </p>

        {/* Hospitable booking widget — paste your widget code here */}
        {/* To get the code: hospitable.com → Direct Bookings → Website → Properties → Copy widget code */}
        <div className="bg-white border border-[var(--color-cream-dark)] p-8 min-h-96 flex items-center justify-center">
          <div className="text-center text-[var(--color-bark)]/40 font-sans text-sm">
            <p className="text-lg mb-2">Booking widget loads here</p>
            <p>
              Add your Hospitable widget code at<br />
              <span className="font-mono text-xs">app/book/page.tsx</span>
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-sans">
          <div className="border-t-2 border-[var(--color-gold)] pt-4">
            <p className="font-medium text-[var(--color-forest)] mb-1">Check-in</p>
            <p className="text-[var(--color-bark)]/70">3:00 PM — Midnight</p>
          </div>
          <div className="border-t-2 border-[var(--color-gold)] pt-4">
            <p className="font-medium text-[var(--color-forest)] mb-1">Check-out</p>
            <p className="text-[var(--color-bark)]/70">11:00 AM</p>
          </div>
          <div className="border-t-2 border-[var(--color-gold)] pt-4">
            <p className="font-medium text-[var(--color-forest)] mb-1">Payment</p>
            <p className="text-[var(--color-bark)]/70">Secure credit card · Taxes included</p>
          </div>
        </div>

        <p className="mt-10 text-center text-sm font-sans text-[var(--color-bark)]/50">
          Prefer Airbnb or VRBO?{" "}
          <a href="https://www.airbnb.com/rooms/1626988366545015306"
            target="_blank" rel="noopener noreferrer"
            className="text-[var(--color-gold)] hover:underline">
            View on Airbnb
          </a>
        </p>
      </div>
    </div>
  );
}
