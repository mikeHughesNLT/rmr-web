import Link from "next/link";
import Image from "next/image";
import HospitableWidget from "@/components/HospitableWidget";

const stats = [
  { value: "7",   label: "Bedrooms" },
  { value: "14",  label: "Guests" },
  { value: "20",  label: "Acres" },
  { value: "3.5", label: "Baths" },
];

const highlights = [
  { icon: "🌲", title: "Treehouse Sauna",    desc: "Custom-built in the canopy with cold shower and mountain views." },
  { icon: "🎹", title: "Steinway Piano",     desc: "Concert grand anchoring the great room beside a stone fireplace." },
  { icon: "🏔️", title: "52 Min to Baker",   desc: "Deep powder, legendary snowfall, uncrowded runs." },
  { icon: "🍁", title: "15 Min to Canada",  desc: "Abbotsford crossing. Vancouver day trips are very doable." },
  { icon: "🐾", title: "Dog Friendly",      desc: "20 acres of forest trails. A dog's paradise." },
  { icon: "⚡", title: "Starlink Wifi",     desc: "Full-speed internet everywhere — including the sauna." },
];

const useCases = [
  { title: "Families",              desc: "Four kings, two queens, separate living areas. Ground-floor access for grandparents. Trails for the kids. Twenty acres means everyone has room." },
  { title: "Retreats & Offsites",   desc: "Seven bedrooms, Starlink, workspace. Treehouse sauna between sessions. Fireplace after dinner. Where teams solve what they couldn't in a conference room." },
  { title: "Celebrations",          desc: "Intimate weddings, milestone birthdays, reunion weekends. Expansive lawn, stone fireplace great room, Steinway. The forest backdrop can't be replicated." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-aerial.jpg"
        >
          <source src="/videos/inway.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--color-forest)]/55" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image src="/images/logo.png" alt="Red Mountain Retreat" width={180} height={180} priority className="brightness-0 invert" />
          </div>
          <p className="text-[var(--color-gold)] text-sm tracking-[0.3em] uppercase mb-4 font-sans">
            Maple Falls, Washington · Mt. Baker Country
          </p>
          <h1 className="font-display text-white text-6xl md:text-8xl font-light leading-tight mb-6">
            Red Mountain<br />Retreat
          </h1>
          <p className="text-white/80 text-xl md:text-2xl font-display font-light tracking-wide mb-10">
            Restore · Reconnect · Rise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book"
              className="bg-[var(--color-gold)] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans">
              Book Direct — No Fees
            </Link>
            <Link href="/the-property"
              className="border border-white/50 text-white px-8 py-4 text-sm tracking-widest uppercase hover:border-white hover:bg-white/10 transition-colors font-sans">
              Explore the Property
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Search widget */}
      <section className="bg-[var(--color-forest)] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <HospitableWidget resultsUrl="/search" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[var(--color-forest)] text-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="font-display text-4xl text-[var(--color-gold)]">{s.value}</p>
              <p className="text-sm tracking-widest uppercase mt-1 font-sans opacity-70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">The Estate</p>
        <h2 className="font-display text-5xl text-[var(--color-forest)] font-light leading-tight mb-6">
          This isn&apos;t a rental.<br />It&apos;s where your people come back together.
        </h2>
        <p className="text-[var(--color-bark)]/80 text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          A 6,000 sq ft mountain lodge — plus an 840 sq ft Flex Room — on 20 private acres in Maple Falls, WA near the base of Mt. Baker.
          Seven bedrooms sleep fourteen. Three generations under one roof. Grandparents claim the king suite.
          Kids take the lounge. Everyone meets at the fire.
        </p>
      </section>

      {/* Forest canopy video — full bleed */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/in-2sky.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--color-forest)]/20" />
      </section>

      {/* Great room photo — full bleed split */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[480px]">
          <Image src="/images/great-room.jpg" alt="Great room with stone fireplace and full group gathering" fill className="object-cover" />
        </div>
        <div className="bg-[var(--color-forest)] flex items-center p-12 md:p-16">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">The Great Room</p>
            <h2 className="font-display text-4xl text-white font-light leading-tight mb-4">
              Where the conversations go late and the fire keeps everyone close
            </h2>
            <p className="text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed">
              Log walls. Stone fireplace. A Steinway grand piano in the corner.
              This room holds a group — and it knows it.
            </p>
          </div>
        </div>
      </section>

      {/* Sauna photo — reversed split */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[var(--color-bark)] flex items-center p-12 md:p-16 order-2 md:order-1">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Signature Feature</p>
            <h2 className="font-display text-4xl text-white font-light leading-tight mb-4">
              The Treehouse Sauna
            </h2>
            <p className="text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed">
              Cedar walls. Slate floors. Live-edge benches. Perched in the forest canopy
              with a cold shower outside. Step out into mountain air at 40°F.
              It changes your day.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[480px] order-1 md:order-2">
          <Image src="/images/sauna-interior.jpg" alt="Treehouse sauna interior — cedar, slate, live-edge benches" fill className="object-cover" />
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[var(--color-cream-dark)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-12 font-sans text-center">
            What Sets This Place Apart
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map(h => (
              <div key={h.title} className="bg-[var(--color-cream)] p-8">
                <span className="text-3xl">{h.icon}</span>
                <h3 className="font-display text-2xl text-[var(--color-forest)] mt-4 mb-2">{h.title}</h3>
                <p className="text-[var(--color-bark)]/70 text-sm leading-relaxed font-sans">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {useCases.map(c => (
          <div key={c.title} className="border-t-2 border-[var(--color-gold)] pt-6">
            <h3 className="font-display text-3xl text-[var(--color-forest)] mb-4">{c.title}</h3>
            <p className="text-[var(--color-bark)]/70 leading-relaxed font-sans text-sm">{c.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-forest)] text-center py-20 px-6">
        <h2 className="font-display text-5xl text-white font-light mb-4">Ready to plan your stay?</h2>
        <p className="text-[var(--color-cream)]/70 mb-8 font-sans text-sm">
          Book direct — no platform fees, no middleman. Just you and the mountain.
        </p>
        <Link href="/book"
          className="bg-[var(--color-gold)] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans inline-block">
          Check Availability
        </Link>
      </section>
    </>
  );
}
