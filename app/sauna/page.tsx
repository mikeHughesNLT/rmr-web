import Link from "next/link";
import SaunaHero from "./SaunaHero";

const details = [
  "Custom cedar construction — built by hand on property",
  "Slate floors throughout",
  "Live-edge bench seating",
  "Dual heating elements — floor radiant heat + traditional sauna heater",
  "Control and preheat the sauna from inside the lodge",
  "Cold shower just outside the door",
  "Starlink wifi — even in the sauna",
  "Elevated treehouse position — forest views from inside",
  "Towels and robes provided",
];

export default function SaunaPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)]">

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">On Property</p>
        <h1 className="font-display text-6xl text-[var(--color-forest)] font-light leading-tight mb-6">
          Treehouse Sauna
        </h1>
        <p className="text-[var(--color-bark)]/70 text-xl leading-relaxed font-sans max-w-2xl mx-auto">
          A hand-built cedar sauna elevated in the trees — private, hot, and unlike anything
          at a rental property in the Pacific Northwest.
        </p>
      </section>

      {/* Video hero with rolling text */}
      <SaunaHero />

      {/* Description */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-[var(--color-bark)]/80 text-lg leading-relaxed font-sans mb-4">
          It&apos;s a short walk from the lodge to the edge of the forest — but it feels like a
          step into the wilderness. The treehouse sauna at Red Mountain Retreat was built
          entirely on property — custom cedar framing, slate floors, and live-edge benches
          that took months to complete.
        </p>
        <p className="text-[var(--color-bark)]/70 text-lg leading-relaxed font-sans mb-10">
          It sits elevated among old-growth trees, with a cold shower just outside. Deer and
          other wildlife frequently pass by — visible right from the elevated deck. Sweat it out,
          step into the cold, and watch the mountain breathe.
        </p>

        {/* Feature list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
          {details.map(f => (
            <div key={f} className="flex items-start gap-3 py-2 border-b border-[var(--color-cream-dark)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] flex-shrink-0 mt-2" />
              <span className="text-sm font-sans text-[var(--color-bark)]/80">{f}</span>
            </div>
          ))}
        </div>

        {/* Build story callout */}
        <div className="bg-[var(--color-forest)] text-[var(--color-cream)] p-10 mb-12">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3 font-sans">The Build Story</p>
          <h2 className="font-display text-3xl font-light mb-4">Built from scratch. Every piece of it.</h2>
          <p className="font-sans text-[var(--color-cream)]/70 leading-relaxed text-sm">
            From clearing the site to the final cedar board — the entire build was documented on video.
            Follow along on our social pages as we release the full sauna build series.
          </p>
        </div>

        {/* Train + Recover */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl text-[var(--color-forest)] mb-4">
            Train hard. Recover harder.
          </h2>
          <p className="text-[var(--color-bark)]/70 font-sans max-w-xl mx-auto leading-relaxed">
            The{" "}
            <Link href="/cedar-hall" className="text-[var(--color-gold)] hover:underline">Cedar Hall</Link>
            {" "}and the treehouse sauna are 200 feet apart.
            Work in one, reset in the other. There&apos;s nothing else like it at a rental property in the Mt. Baker area.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-forest)] text-center py-16 px-6">
        <h2 className="font-display text-4xl text-white font-light mb-4">Ready to experience it?</h2>
        <p className="text-[var(--color-cream)]/70 font-sans text-sm mb-8 max-w-lg mx-auto">
          Check availability and book directly — no service fees.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book"
            className="bg-[var(--color-gold)] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans">
            Check Availability
          </Link>
          <Link href="/the-property"
            className="border border-white/50 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors font-sans">
            See the Full Property
          </Link>
        </div>
      </section>

    </div>
  );
}
