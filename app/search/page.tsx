import HospitableWidget from "@/components/HospitableWidget";

export default function SearchPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Book Direct</p>
        <h1 className="font-display text-4xl text-[var(--color-forest)] font-light mb-2">Check Availability</h1>
        <p className="text-[var(--color-bark)]/60 font-sans text-sm mb-10">
          No Airbnb or VRBO fees — book directly and save.
        </p>
        <HospitableWidget />
      </div>
    </div>
  );
}
