const places = [
  { distance: "52 min",  name: "Mt. Baker Ski Area",     desc: "Deep powder, legendary snowfall, uncrowded runs. Summer hiking and wildflower trails equally spectacular." },
  { distance: "15 min",  name: "Canadian Border",         desc: "Abbotsford-Sumas crossing. Cactus Club, international restaurants, craft breweries. Vancouver day trips very doable." },
  { distance: "45 min",  name: "Bellingham",              desc: "Full grocery stores, restaurants, breweries, Whatcom Falls Park, waterfront. Your supply run and a great day trip." },
  { distance: "20 min",  name: "Glacier, WA",             desc: "The charming mountain village at the edge of something bigger. Last stop before the mountain." },
  { distance: "Minutes", name: "Silver Lake Park",        desc: "Kayaking, fishing, swimming, picnicking right in the neighborhood." },
  { distance: "On-site", name: "Red Mountain Trails",     desc: "Private hiking trails winding through 20 acres of old-growth forest and up Red Mountain itself." },
];

export default function LocationPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)]">
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Location</p>
        <h1 className="font-display text-6xl text-[var(--color-forest)] font-light leading-tight mb-6">
          Maple Falls, Washington
        </h1>
        <p className="text-[var(--color-bark)]/70 text-lg leading-relaxed font-sans max-w-2xl mx-auto">
          A small mountain community along the Mt. Baker Highway — towering evergreens, mountain air,
          and the kind of quiet that takes a day to fully hear.
        </p>
      </section>

      {/* Map placeholder */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-[var(--color-forest)]/10 h-72 flex items-center justify-center">
          <div className="text-center font-sans text-sm text-[var(--color-bark)]/40">
            <p>9580 Red Mountain Lane, Maple Falls, WA 98266</p>
            <a
              href="https://maps.google.com/?q=9580+Red+Mountain+Lane+Maple+Falls+WA+98266"
              target="_blank" rel="noopener noreferrer"
              className="text-[var(--color-gold)] hover:underline mt-2 inline-block">
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Distances */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-8 font-sans">What&apos;s Nearby</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {places.map(p => (
            <div key={p.name} className="flex gap-5 py-5 border-b border-[var(--color-cream-dark)]">
              <div className="w-20 flex-shrink-0">
                <p className="text-[var(--color-gold)] font-display text-lg">{p.distance}</p>
              </div>
              <div>
                <p className="font-display text-xl text-[var(--color-forest)] mb-1">{p.name}</p>
                <p className="text-sm text-[var(--color-bark)]/70 font-sans">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-forest)] text-[var(--color-cream)] py-12 px-6">
        <div className="max-w-4xl mx-auto text-sm font-sans text-[var(--color-cream)]/70 space-y-2">
          <p className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-4">Getting Here</p>
          <p>This is mountain country — you&apos;ll need a car. No public transit to the lodge.</p>
          <p>6+ paved parking spots, additional lawn parking for events.</p>
          <p>4WD or AWD recommended November–March. Driveway is accessible year-round.</p>
          <p>Cell service is limited in Maple Falls. Starlink wifi is full-speed at the lodge and sauna.</p>
        </div>
      </section>
    </div>
  );
}
