import Link from "next/link";

export default function TheNookPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)]">
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">The Flex Room</p>
        <h1 className="font-display text-6xl text-[var(--color-forest)] font-light leading-tight mb-6">
          The Nook
        </h1>
        <p className="text-[var(--color-bark)]/70 text-xl leading-relaxed font-sans">
          840 sq ft of open space — built for groups that want to do more than sit around.
        </p>
      </section>

      {/* Photo placeholder */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-[var(--color-forest)]/10 aspect-video flex items-center justify-center">
          <p className="text-[var(--color-bark)]/30 font-sans text-sm">The Nook photos coming soon</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <p className="text-[var(--color-bark)]/80 text-lg leading-relaxed font-sans mb-8">
          The Nook is a former 840 sq ft shop — now a fully open flex room with wrestling mats
          and the kind of square footage you just don&apos;t find in a vacation rental.
          It&apos;s the reason groups book Red Mountain Retreat over anything else in the area.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "Fitness Retreats",    desc: "Wrestling, yoga, martial arts, CrossFit-style training. The mats are in. The space is yours." },
            { title: "Corporate Offsites",  desc: "Breakout sessions, workshops, team-building activities. Whiteboard + move + think." },
            { title: "Group Wellness",      desc: "Morning yoga before the sauna. Meditation. Breathwork. The forest outside keeps things grounded." },
            { title: "Kids Zone",           desc: "A separate space where the next generation can be loud while the adults have the great room." },
          ].map(c => (
            <div key={c.title} className="border-t-2 border-[var(--color-gold)] pt-5 bg-white p-6">
              <h3 className="font-display text-2xl text-[var(--color-forest)] mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--color-bark)]/70 font-sans">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--color-forest)] text-[var(--color-cream)] p-8 text-center">
          <p className="font-display text-2xl mb-3">Planning a retreat or group stay?</p>
          <p className="font-sans text-sm text-[var(--color-cream)]/70 mb-6">
            Reach out before you book — we love working with groups to make sure the space is set up right.
          </p>
          <Link href="/contact"
            className="bg-[var(--color-gold)] text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
