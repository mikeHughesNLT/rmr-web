import Link from "next/link";

const useCases = [
  {
    icon: "🏢",
    title: "Conferences & Offsites",
    desc: "840 sq ft of open floor space — enough for a full team circle, breakout tables, presentation setup, or a standing workshop. Away from the distractions of a hotel ballroom.",
  },
  {
    icon: "🧒",
    title: "Kids Zone",
    desc: "Give the adults the great room. The Nook keeps kids active, loud, and in their own world — with enough space that it actually works.",
  },
  {
    icon: "🤸",
    title: "Movement & Fitness",
    desc: "Open floor, high ceiling, room to move. Yoga, CrossFit-style circuits, dance, stretching, martial arts. Wrestling mats arriving Summer 2026.",
  },
  {
    icon: "🧘",
    title: "Wellness Retreats",
    desc: "Morning practice before the treehouse sauna. Breathwork, meditation, group movement. The forest outside keeps things grounded.",
  },
  {
    icon: "🎨",
    title: "Creative & Art Space",
    desc: "A blank canvas — literally. 840 sq ft of open space can become whatever your group needs it to be.",
  },
  {
    icon: "🏋️",
    title: "Sports & Training Camps",
    desc: "Wrestling mats coming Summer 2026. Coach a team, run drills, train together — then recover in the treehouse sauna.",
  },
];

export default function TheNookPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)]">

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">The Flex Room</p>
        <h1 className="font-display text-6xl text-[var(--color-forest)] font-light leading-tight mb-6">
          Nook &amp; Flex Room
        </h1>
        <p className="text-[var(--color-bark)]/70 text-xl leading-relaxed font-sans max-w-2xl mx-auto">
          840 sq ft of open space — the reason groups book Red Mountain Retreat
          over anything else in the area.
        </p>
      </section>

      {/* Photo placeholder */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-[var(--color-forest)]/10 aspect-video flex items-center justify-center">
          <div className="text-center font-sans text-sm text-[var(--color-bark)]/40">
            <p className="text-lg mb-1">Photos coming soon</p>
            <p>Drop Nook photos into assets/ and we&apos;ll get them on the site</p>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-[var(--color-forest)] text-[var(--color-cream)] p-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-display text-4xl text-[var(--color-gold)]">840</p>
              <p className="text-xs tracking-widest uppercase font-sans mt-1 opacity-70">Sq Ft</p>
            </div>
            <div>
              <p className="font-display text-4xl text-[var(--color-gold)]">Open</p>
              <p className="text-xs tracking-widest uppercase font-sans mt-1 opacity-70">Floor Plan</p>
            </div>
            <div>
              <p className="font-display text-4xl text-[var(--color-gold)]">Summer</p>
              <p className="text-xs tracking-widest uppercase font-sans mt-1 opacity-70">Wrestling Mats 2026</p>
            </div>
          </div>
        </div>

        <p className="text-[var(--color-bark)]/80 text-lg leading-relaxed font-sans mb-6">
          The Nook is a former 840 sq ft shop — completely cleared and opened up into a flex room
          unlike anything you&apos;ll find in a vacation rental. High ceiling, clean floor, natural light.
          It&apos;s the space that makes Red Mountain Retreat work for groups who need to actually <em>do</em> something,
          not just sit around.
        </p>
        <p className="text-[var(--color-bark)]/70 text-base leading-relaxed font-sans">
          Wrestling mats are arriving <strong>Summer 2026</strong> — making it the only retreat property
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

      {/* Combined with sauna */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="font-display text-4xl text-[var(--color-forest)] mb-4">
          Train in the Nook. Recover in the Sauna.
        </h2>
        <p className="text-[var(--color-bark)]/70 font-sans max-w-xl mx-auto leading-relaxed">
          The Nook &amp; Flex Room and the treehouse sauna are 200 feet apart.
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
