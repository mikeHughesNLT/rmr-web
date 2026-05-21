import Link from "next/link";

const rooms = [
  { name: "Primary King Suite",  desc: "Ground floor. Wood-burning fireplace, seating area, vanity." },
  { name: "3 Additional Kings",  desc: "Premium mattresses, luxury linens, forested views." },
  { name: "2 Queen Bedrooms",    desc: "One ground floor with attached half bath — perfect for grandparents." },
  { name: "Twin XL Room",        desc: "Two twin XL beds upstairs — ideal for kids or additional guests." },
];

const amenities = [
  "Stone fireplace great room", "Steinway grand piano", "Family lounge with sectional + smart TV",
  "Full kitchen — large group ready", "Treehouse sauna + cold shower", "Pool table",
  "Private hiking trails (20 acres)", "Expansive lawn + fire pit", "Multiple decks",
  "Washer + dryer", "Starlink wifi (including sauna)", "Smart lock check-in",
  "Free parking (6+ vehicles)", "Firewood included", "Dog kennels available",
];

export default function ThePropertyPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)]">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">The Property</p>
        <h1 className="font-display text-6xl text-[var(--color-forest)] font-light leading-tight mb-6">
          6,500 sq ft on 20 private acres
        </h1>
        <p className="text-[var(--color-bark)]/70 text-lg leading-relaxed font-sans max-w-2xl mx-auto">
          Rich leathers, warm woods, deep greens, and cozy textures throughout.
          This isn&apos;t a dusty cabin — it&apos;s a curated retreat.
        </p>
      </section>

      {/* Photo placeholder — replace with actual gallery */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-[var(--color-forest)]/10 aspect-video flex items-center justify-center">
          <p className="text-[var(--color-bark)]/30 font-sans text-sm">Photo gallery — add images to public/images/</p>
        </div>
      </section>

      {/* Bedrooms */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-8 font-sans">Where You&apos;ll Sleep</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rooms.map(r => (
            <div key={r.name} className="border border-[var(--color-cream-dark)] bg-white p-6">
              <h3 className="font-display text-2xl text-[var(--color-forest)] mb-2">{r.name}</h3>
              <p className="text-[var(--color-bark)]/70 text-sm font-sans">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Treehouse Sauna feature */}
      <section className="bg-[var(--color-forest)] text-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Signature Feature</p>
          <h2 className="font-display text-5xl font-light mb-6">The Treehouse Sauna</h2>
          <p className="text-[var(--color-cream)]/80 text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            A custom-built sauna perched in the trees above the forest floor, with a cold shower and
            mountain views. Step out of the heat into the cold air among the canopy.
            Whether for recovery, reflection, or a reset after a day on the mountain — it changes your day.
          </p>
        </div>
      </section>

      {/* Amenities */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-8 font-sans">Everything Included</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {amenities.map(a => (
            <div key={a} className="flex items-center gap-3 py-3 border-b border-[var(--color-cream-dark)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] flex-shrink-0" />
              <span className="text-sm font-sans text-[var(--color-bark)]/80">{a}</span>
            </div>
          ))}
        </div>
      </section>

      {/* The Nook CTA */}
      <section className="bg-[var(--color-cream-dark)] py-16 px-6 text-center">
        <h2 className="font-display text-4xl text-[var(--color-forest)] mb-4">Plus: The Nook</h2>
        <p className="text-[var(--color-bark)]/70 font-sans mb-6 max-w-xl mx-auto">
          840 sq ft flex room — perfect for groups, retreats, and active getaways.
        </p>
        <Link href="/the-nook"
          className="border-2 border-[var(--color-forest)] text-[var(--color-forest)] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[var(--color-forest)] hover:text-white transition-colors font-sans inline-block">
          Explore The Nook
        </Link>
      </section>
    </div>
  );
}
