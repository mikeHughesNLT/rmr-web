import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Silver Lake Park — Things to Do Near Red Mountain Retreat",
  description: "Five minutes from Red Mountain Retreat. 410 acres, lakefront cabins, kayak and paddleboard rentals, fishing, hiking, and a full campground. No cell service. That's the point.",
};

const activities = [
  {
    title: "Kayak & Paddleboard Rentals",
    desc: "Canoes, rowboats, 2-person and 4-person pedal boats, 2-seat kayaks, and stand-up paddleboards available for rent from the park office during camping season. No powerboats — 10 hp motor limit on the lake.",
  },
  {
    title: "Fishing",
    desc: "Silver Lake is a genuine fishing lake. Bring gear. The lake sits between Red Mountain and Black Mountain, calm and unhurried. A Washington fishing license is required.",
  },
  {
    title: "Hiking",
    desc: "5.75 miles of trails across 410 acres of Whatcom County forest. Flat to moderate. Wildlife is present — deer especially. Early morning is the best hour.",
  },
  {
    title: "Swimming & Picnicking",
    desc: "Swimming area and picnic facilities on the lake. The kind of afternoon that doesn't need much planning — towels, sunscreen, something to eat.",
  },
  {
    title: "Camping",
    desc: "Three campgrounds, open mid-April through October. Standard and hookup sites available. Book early — this park fills quickly in summer.",
  },
  {
    title: "Horseback Riding",
    desc: "Horse-friendly camping and trails. One of the few county parks in the region set up for equestrian use.",
  },
];

export default function SilverLakeParkPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)]">

      {/* Hero */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <Image
          src="/images/trails.jpg"
          alt="Forested trails near Silver Lake Park"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)]/85 via-[var(--color-forest)]/25 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-14 w-full">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3 font-sans">
            5 Minutes from Red Mountain Retreat · Maple Falls, WA
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light leading-tight mb-3">
            Silver Lake Park
          </h1>
          <p className="text-white/75 font-sans text-base max-w-xl">
            410 acres of Whatcom County forest around a calm mountain lake. Kayaks on the water, trails in the trees,
            no cell service by design.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Right in the Neighborhood</p>
        <h2 className="font-display text-4xl text-[var(--color-forest)] font-light mb-6">
          Five minutes. A different world.
        </h2>
        <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed mb-4 max-w-2xl">
          Silver Lake Park sits just five minutes from Red Mountain Retreat — close enough for a morning paddle before
          breakfast, or an afternoon on the water when the mountain drive feels like too much. The lake is tucked
          between Red Mountain and Black Mountain, fed by snowmelt and quiet by nature.
        </p>
        <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed max-w-2xl">
          There is no cell service at the park. No Wi-Fi either. Whatcom County runs it that way, and guests
          consistently describe it as a feature rather than a bug. The 410 acres hold it all: 5.75 miles of trails,
          a fishing lake, lakefront cabins, a full campground, and the kind of silence that is increasingly hard
          to find.
        </p>
      </section>

      {/* Activities */}
      <section className="bg-[var(--color-cream-dark)] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-12 font-sans">What's There</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map(a => (
              <div key={a.title} className="border-t-2 border-[var(--color-gold)] pt-6">
                <h3 className="font-display text-2xl text-[var(--color-forest)] mb-3">{a.title}</h3>
                <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabins callout */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[var(--color-forest)] flex items-center p-12 md:p-16">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">If You Want to Stay</p>
            <h2 className="font-display text-3xl text-white font-light mb-4">Lakefront Cabins & Lodge</h2>
            <p className="text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed mb-4">
              Six lakefront cabins and the Lakeside Lodge are available year-round — each with a lake view, propane
              fireplace, kitchen, and beds. Rates run $105–$221 per night depending on the unit. A good option if
              part of your group wants a separate lake experience, or if you're extending the trip.
            </p>
            <p className="text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed mb-8">
              Campground season runs mid-April through October. Reservations open early December for the following year
              and fill fast. Book through Whatcom County Parks.
            </p>
            <a
              href="https://www.whatcomcounty.us/3517/Silver-Lake-Park"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-gold)] font-sans text-xs tracking-widest uppercase hover:text-[var(--color-gold-light)] transition-colors"
            >
              whatcomcounty.us →
            </a>
          </div>
        </div>
        <div className="bg-[var(--color-bark)] flex items-center p-12 md:p-16">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-6 font-sans">Park Info</p>
            <ul className="space-y-4 text-[var(--color-cream)]/70 font-sans text-sm">
              <li><span className="text-[var(--color-cream)]/40 mr-2">Distance</span>5 minutes from Red Mountain Retreat</li>
              <li><span className="text-[var(--color-cream)]/40 mr-2">Address</span>9006 Silver Lake Rd, Maple Falls, WA 98266</li>
              <li><span className="text-[var(--color-cream)]/40 mr-2">Day Use</span>Daily, 8 AM – dusk</li>
              <li><span className="text-[var(--color-cream)]/40 mr-2">Phone</span>(360) 778-5850</li>
              <li><span className="text-[var(--color-cream)]/40 mr-2">Cell</span>None. No Wi-Fi either.</li>
              <li><span className="text-[var(--color-cream)]/40 mr-2">Camping</span>Mid-April through October</li>
              <li><span className="text-[var(--color-cream)]/40 mr-2">Cabins</span>Year-round · $105–221/night</li>
              <li><span className="text-[var(--color-cream)]/40 mr-2">Boats</span>10 hp max on the lake</li>
            </ul>
            <p className="text-[var(--color-cream)]/30 font-sans text-xs mt-8">
              Note: Lagoon Bridge currently closed — check current conditions before visiting.
            </p>
          </div>
        </div>
      </section>

      {/* Back nav */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex items-center justify-between">
        <Link
          href="/things-to-do"
          className="text-[var(--color-bark)]/50 font-sans text-xs tracking-widest uppercase hover:text-[var(--color-forest)] transition-colors"
        >
          ← Things to Do
        </Link>
        <Link
          href="/things-to-do/maple-falls-park"
          className="text-[var(--color-bark)]/50 font-sans text-xs tracking-widest uppercase hover:text-[var(--color-forest)] transition-colors"
        >
          Maple Falls Park →
        </Link>
      </section>

    </div>
  );
}
