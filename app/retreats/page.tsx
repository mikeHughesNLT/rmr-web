import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Retreats — Red Mountain Retreat",
  description:
    "Red Mountain Retreat hosts intimate, intentional retreats for couples, families, and small groups. 25 private acres, 7 bedrooms, Treehouse Sauna, Cedar Hall — Maple Falls, WA.",
};

export default function RetreatsPage() {
  return (
    <div className="bg-[var(--color-cream)]">

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end">
        <Image
          src="/images/group-outside.jpg"
          alt="Red Mountain Retreat — group gathering on the deck"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)]/80 via-[var(--color-forest)]/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 w-full">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-3">
            Red Mountain Retreat
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light leading-tight">
            A Place Built<br />for More Than Vacation
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-6">
          Why Retreat Here
        </p>
        <p className="font-display text-3xl md:text-4xl text-[var(--color-forest)] font-light leading-snug mb-8">
          Some conversations need a different kind of space.
        </p>
        <div className="space-y-5 font-sans text-[var(--color-bark)] text-[15px] leading-relaxed">
          <p>
            Red Mountain Retreat sits on 25 private acres in the foothills of the North Cascades —
            far enough from the noise of ordinary life to make the important conversations possible.
          </p>
          <p>
            The 6,500 sq ft lodge sleeps 14. The Treehouse Sauna perches above the forest floor.
            Cedar Hall opens onto mountain views. The Steinway sits in the great room.
            There are trails, fire pits, a billiard room, and a kitchen large enough to cook for
            a small army.
          </p>
          <p>
            This is a place where small groups slow down, go deep, and leave changed.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-[var(--color-forest)]/10" />
      </div>

      {/* Retreat types */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-12 text-center">
          Retreat Experiences
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Couples Retreat — featured */}
          <div className="md:col-span-2 border border-[var(--color-forest)]/15 bg-white p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-3">
                Featured · March 2027
              </p>
              <h2 className="font-display text-3xl text-[var(--color-forest)] font-light mb-4">
                Couples Retreat
              </h2>
              <p className="font-sans text-[var(--color-bark)] text-sm leading-relaxed mb-6">
                A faith-based marriage enrichment weekend led by Steve &amp; Trudy Samsill —
                authors and marriage educators with over 35 years of experience. Rooted in Scripture,
                deeply practical, and set against the backdrop of Red Mountain&apos;s mountains and forest.
                Participants prepare with seven online video sessions before arriving for two full days
                together at the lodge.
              </p>
              <Link
                href="/retreats/couples"
                className="inline-block bg-[var(--color-forest)] text-[var(--color-cream)] font-sans text-xs tracking-widest uppercase px-6 py-3 hover:bg-[var(--color-forest)]/80 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="relative w-full md:w-64 h-48 md:h-auto md:self-stretch shrink-0">
              <Image
                src="/images/great-room.jpg"
                alt="Great room at Red Mountain Retreat"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Corporate / Group placeholder */}
          <div className="border border-[var(--color-forest)]/10 bg-white/60 p-8">
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-3">
              Small Group
            </p>
            <h3 className="font-display text-2xl text-[var(--color-forest)] font-light mb-3">
              Leadership &amp; Team Retreats
            </h3>
            <p className="font-sans text-[var(--color-bark)]/70 text-sm leading-relaxed mb-4">
              Off-site strategy sessions, team-building, or leadership development for groups of up to 14.
              The lodge provides meeting space, sleeping quarters, and meals under one roof —
              with wilderness at the door.
            </p>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[var(--color-bark)]/40">
              Inquire via contact
            </p>
          </div>

          {/* Family / wellness placeholder */}
          <div className="border border-[var(--color-forest)]/10 bg-white/60 p-8">
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-3">
              Personal
            </p>
            <h3 className="font-display text-2xl text-[var(--color-forest)] font-light mb-3">
              Family &amp; Wellness Retreats
            </h3>
            <p className="font-sans text-[var(--color-bark)]/70 text-sm leading-relaxed mb-4">
              Extended family gatherings, intentional sabbaticals, or personal renewal —
              the sauna, trails, and mountain air have a way of resetting what needs resetting.
            </p>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[var(--color-bark)]/40">
              Book the lodge directly
            </p>
          </div>
        </div>
      </section>

      {/* Property highlights */}
      <section className="bg-[var(--color-forest)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-8">
            The Setting
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ["25", "Private Acres"],
              ["7", "Bedrooms · Sleeps 14"],
              ["6,500", "Square Feet"],
              ["25+", "Miles of Trails Nearby"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-4xl text-[var(--color-gold)] font-light mb-1">{num}</p>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--color-cream)]/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="font-display text-3xl text-[var(--color-forest)] font-light mb-4">
          Ready to book the lodge for your group?
        </p>
        <p className="font-sans text-sm text-[var(--color-bark)] mb-8">
          Block out the dates and make it yours.
        </p>
        <Link
          href="/book"
          className="inline-block bg-[var(--color-gold)] text-white font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-[var(--color-gold-light)] transition-colors"
        >
          Book Direct
        </Link>
      </section>

    </div>
  );
}
