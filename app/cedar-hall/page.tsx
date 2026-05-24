import Link from "next/link";
import FlexHero from "./FlexHero";

const useCases = [
  {
    icon: "🏢",
    title: "Conferences & Offsites",
    desc: "840 sq ft of open floor — enough for a full team circle, breakout tables, or presentation setup. Three large rollup doors open the whole room to fresh mountain air. Away from hotel conference rooms forever.",
  },
  {
    icon: "🧒",
    title: "Kids Zone",
    desc: "Give the adults the great room. Cedar Hall keeps kids active, loud, and in their own world — with enough space that it actually works. Inflatable furniture, room to run, real kids-paradise energy.",
  },
  {
    icon: "🤸",
    title: "Movement & Fitness",
    desc: "Open floor, high ceiling, room to move. Yoga, stretching, CrossFit-style circuits, combatives, dance, martial arts. Wrestling mats arriving late Summer 2026.",
  },
  {
    icon: "🎬",
    title: "Movie Nights",
    desc: "Drop down the 120\" projection screen. Pull out the inflatable furniture. Crank the in-wall ceiling speakers. With heat running and rollup doors cracked to the forest — there's nothing like it.",
  },
  {
    icon: "🧘",
    title: "Wellness Retreats",
    desc: "Morning practice before the treehouse sauna. Breathwork, meditation, group movement. Rustic log perimeter walls and natural light keep the energy grounded.",
  },
  {
    icon: "🏋️",
    title: "Sports & Training Camps",
    desc: "Wrestling mats arriving late Summer 2026. Coach a team, run drills, train together — then recover in the treehouse sauna. The only facility like this at a retreat property in the Mt. Baker area.",
  },
];

export default function CedarHallPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)]">

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Cedar Hall & Cedar Nook</p>
        <h1 className="font-display text-6xl text-[var(--color-forest)] font-light leading-tight mb-6">
          Cedar Hall
        </h1>
        <p className="text-[var(--color-bark)]/70 text-xl leading-relaxed font-sans max-w-2xl mx-auto">
          840 sq ft of open space — the reason groups book Red Mountain Retreat
          over anything else in the area.
        </p>
      </section>

      {/* Video hero */}
      <FlexHero />

      {/* Stats bar */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-[var(--color-forest)] text-[var(--color-cream)] p-10 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-display text-4xl text-[var(--color-gold)]">840</p>
              <p className="text-xs tracking-widest uppercase font-sans mt-1 opacity-70">Sq Ft</p>
            </div>
            <div>
              <p className="font-display text-4xl text-[var(--color-gold)]">3</p>
              <p className="text-xs tracking-widest uppercase font-sans mt-1 opacity-70">Rollup Doors</p>
            </div>
            <div>
              <p className="font-display text-4xl text-[var(--color-gold)]">120″</p>
              <p className="text-xs tracking-widest uppercase font-sans mt-1 opacity-70">Drop Screen</p>
            </div>
            <div>
              <p className="font-display text-3xl text-[var(--color-gold)]">Summer</p>
              <p className="text-xs tracking-widest uppercase font-sans mt-1 opacity-70">Mats &apos;26</p>
            </div>
          </div>
        </div>

        <p className="text-[var(--color-bark)]/80 text-lg leading-relaxed font-sans mb-6">
          Cedar Hall is a former 840 sq ft garage — completely cleared and opened into an activity
          space unlike anything you&apos;ll find in a vacation rental. High ceiling, clean floor, natural light,
          and a rustic log perimeter wall that keeps the mountain atmosphere alive.
          It&apos;s the space that makes Red Mountain Retreat work for groups who need to actually <em>do</em> something,
          not just sit around.
        </p>

        {/* Feature list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {[
            "Three large panel rollup doors — open to the outdoors",
            "120\" drop-down projection screen",
            "In-wall ceiling speakers throughout",
            "Climate controlled with heat",
            "Inflatable furniture available for movies & lounging",
            "Rustic log perimeter wall",
            "Open floor plan — no fixed obstacles",
            "High ceiling for movement and sports",
          ].map(f => (
            <div key={f} className="flex items-start gap-3 py-2 border-b border-[var(--color-cream-dark)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] flex-shrink-0 mt-2" />
              <span className="text-sm font-sans text-[var(--color-bark)]/80">{f}</span>
            </div>
          ))}
        </div>

        {/* Cedar Nook */}
        <div className="border-l-4 border-[var(--color-gold)] pl-6 py-2 mb-8">
          <h2 className="font-display text-3xl text-[var(--color-forest)] mb-3">The Cedar Nook</h2>
          <p className="text-[var(--color-bark)]/70 font-sans text-base leading-relaxed">
            Adjacent to Cedar Hall sits the Cedar Nook — a ~350 sq ft intimate space with custom built-in
            cedar shelving. Heavy corbel-supported shelves milled from property timber, built directly into
            the walls. A natural breakout space, gear room, or quiet corner when the main hall is in full swing.
          </p>
        </div>

        <p className="text-[var(--color-bark)]/70 text-base leading-relaxed font-sans">
          Wrestling mats are arriving <strong>late Summer 2026</strong> — making Cedar Hall the only retreat property
          in the Mt. Baker area with a dedicated wrestling and grappling space. Coaches, wrestling camps,
          BJJ squads: this is your facility.
        </p>
      </section>

      {/* Use cases grid */}
      <section className="bg-[var(--color-cream-dark)] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-12 font-sans text-center">
            What Groups Use It For
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map(c => (
              <div key={c.title} className="bg-[var(--color-cream)] p-8">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="font-display text-2xl text-[var(--color-forest)] mt-4 mb-2">{c.title}</h3>
                <p className="text-sm text-[var(--color-bark)]/70 font-sans leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Train + Recover */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="font-display text-4xl text-[var(--color-forest)] mb-4">
          Train in Cedar Hall. Recover in the Sauna.
        </h2>
        <p className="text-[var(--color-bark)]/70 font-sans max-w-xl mx-auto leading-relaxed">
          Cedar Hall and the treehouse sauna are 200 feet apart.
          Work hard in one, reset in the other. There&apos;s nothing else like it in the region.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-forest)] text-center py-16 px-6">
        <h2 className="font-display text-4xl text-white font-light mb-4">Planning a group stay or retreat?</h2>
        <p className="text-[var(--color-cream)]/70 font-sans text-sm mb-8 max-w-lg mx-auto">
          Reach out before you book — we love the creative ones and can help set up the space
          for exactly what you have in mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact"
            className="bg-[var(--color-gold)] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans">
            Get in Touch
          </Link>
          <Link href="/book"
            className="border border-white/50 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors font-sans">
            Check Availability
          </Link>
        </div>
      </section>
    </div>
  );
}
