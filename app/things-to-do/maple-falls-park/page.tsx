import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Maple Falls Community Park — Things to Do Near Red Mountain Retreat",
  description: "A community-built neighborhood park six miles from Red Mountain Retreat. Pump track, outdoor fitness equipment, open fields, and towering Pacific Northwest forest.",
};

export default function MapleFallsParkPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)]">

      {/* Hero */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <Image
          src="/images/maple-falls-park-panorama.jpg"
          alt="Maple Falls Community Park — panoramic view of the park grounds"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)]/80 via-[var(--color-forest)]/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-14 w-full">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3 font-sans">
            6 Miles from Red Mountain Retreat · Maple Falls, WA
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light leading-tight mb-3">
            Maple Falls<br />Community Park
          </h1>
          <p className="text-white/75 font-sans text-base max-w-xl">
            A genuine neighborhood park built by the community, for the community — with a pump track, outdoor fitness
            equipment, and open space under the trees.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">The Short Version</p>
        <h2 className="font-display text-4xl text-[var(--color-forest)] font-light mb-6">
          A good stop on the way through town
        </h2>
        <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed mb-4 max-w-2xl">
          Maple Falls Community Park is a Whatcom County park in the village of Maple Falls — about six miles east of
          Red Mountain Retreat on Highway 542. It is small, unhurried, and genuinely local. Community-funded and
          community-maintained, it has the feel of a place people actually care about.
        </p>
        <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed max-w-2xl">
          Worth a stop if you have kids who need to run, if someone in your group wants to move their body outdoors, or
          if you simply want to stretch your legs in the trees on the way to or from the mountain.
        </p>
      </section>

      {/* What's There — two column */}
      <section className="bg-[var(--color-cream-dark)] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-12 font-sans">What's There</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t-2 border-[var(--color-gold)] pt-6">
              <h3 className="font-display text-2xl text-[var(--color-forest)] mb-3">Pump Track</h3>
              <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed">
                A recently redesigned dirt pump track with berms and rollers for riders of all experience levels. Bring
                bikes — it is the kind of track kids will want to lap again and again.
              </p>
            </div>
            <div className="border-t-2 border-[var(--color-gold)] pt-6">
              <h3 className="font-display text-2xl text-[var(--color-forest)] mb-3">Outdoor Fitness</h3>
              <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed">
                A set of outdoor fitness stations on wood chip ground cover — a climbing structure, parallel bars,
                and pull equipment. Open to all. Good for a morning workout surrounded by forest.
              </p>
            </div>
            <div className="border-t-2 border-[var(--color-gold)] pt-6">
              <h3 className="font-display text-2xl text-[var(--color-forest)] mb-3">Open Field & Benches</h3>
              <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed">
                A wide grass field and concrete benches under big Pacific Northwest firs. On-leash dogs welcome.
                Open dawn to dusk. No admission, no crowds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="relative aspect-square overflow-hidden col-span-2 md:col-span-1 row-span-2 md:row-span-2">
            <Image
              src="/images/maple-falls-park-fitness-wide.jpg"
              alt="Outdoor fitness area at Maple Falls Community Park"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/maple-falls-park-fitness-01.jpg"
              alt="Fitness equipment at Maple Falls Community Park"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/maple-falls-park-climb.jpg"
              alt="Climbing structure at Maple Falls Community Park"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/maple-falls-park-pump-track.jpg"
              alt="Pump track berms at Maple Falls Community Park"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/maple-falls-park-entrance.jpg"
              alt="Maple Falls Community Park entrance and parking"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Park sign / info block */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden">
          <Image
            src="/images/maple-falls-park-sign.jpg"
            alt="Maple Falls Community Park official sign — Whatcom County Parks & Recreation"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="bg-[var(--color-forest)] flex items-center p-12 md:p-16">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Good to Know</p>
            <h2 className="font-display text-3xl text-white font-light mb-6">Park Info</h2>
            <ul className="space-y-3 text-[var(--color-cream)]/70 font-sans text-sm">
              <li><span className="text-[var(--color-cream)]/40 mr-2">Open</span>Sunrise to sunset, daily</li>
              <li><span className="text-[var(--color-cream)]/40 mr-2">Dogs</span>Welcome on-leash</li>
              <li><span className="text-[var(--color-cream)]/40 mr-2">Cost</span>Free</li>
              <li><span className="text-[var(--color-cream)]/40 mr-2">Address</span>7470 2nd St, Maple Falls, WA 98266</li>
              <li><span className="text-[var(--color-cream)]/40 mr-2">Run by</span>Whatcom County Parks & Recreation</li>
            </ul>
            <p className="text-[var(--color-cream)]/40 font-sans text-xs mt-8 leading-relaxed">
              No camping, fires, fireworks, or overnight parking. No motorized vehicles beyond the parking lot.
              No alcohol. Pack out what you pack in.
            </p>
            <a
              href="https://maplefallspark.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-[var(--color-gold)] font-sans text-xs tracking-widest uppercase hover:text-[var(--color-gold-light)] transition-colors"
            >
              maplefallspark.com →
            </a>
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
          href="/things-to-do/silver-lake-park"
          className="text-[var(--color-bark)]/50 font-sans text-xs tracking-widest uppercase hover:text-[var(--color-forest)] transition-colors"
        >
          Silver Lake Park →
        </Link>
      </section>

    </div>
  );
}
