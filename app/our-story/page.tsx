import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Story of Red Mountain Retreat — Mike & Angie Hughes",
  description: "Mike grew up on this property. He and Angie came back to restore it — not just as a rental, but as a place for families, groups, and retreats to come back together.",
};

const qualities = [
  {
    label: "The Water",
    desc: "Guests almost always comment on it. The water comes from a deep well, and it tastes the way good water is supposed to taste — cold, clean, and completely different from what comes out of a city tap. It is a small detail that becomes a daily pleasure.",
  },
  {
    label: "The Air",
    desc: "There is something about the air here. Guests feel it quickly but find it hard to describe — richer, somehow. Maybe it is the trees. Maybe it is the mountain humidity. Maybe it is simply the nervous system exhaling after days of ambient noise it forgot it was carrying. People consistently notice it.",
  },
  {
    label: "The Energy",
    desc: "Red Mountain Retreat seems to attract people who are not just trying to escape, but trying to reconnect. With family. With purpose. With rest. With themselves. The land holds that intention — or maybe it just reflects back what people bring to it when the conditions are right.",
  },
];

export default function OurStoryPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)]">

      {/* Hero */}
      <section className="relative h-[65vh] flex items-end overflow-hidden">
        <Image
          src="/images/exterior-bridge.jpg"
          alt="Red Mountain Retreat — exterior, bridge, stone patio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)]/85 via-[var(--color-forest)]/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 w-full">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3 font-sans">
            Maple Falls, Washington
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-white font-light leading-tight mb-4">
            The Story of<br />Red Mountain
          </h1>
          <p className="text-white/70 font-sans text-lg max-w-2xl">
            A family property. A homecoming. A place built for people to come back together.
          </p>
        </div>
      </section>

      {/* The land */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">The Property</p>
        <h2 className="font-display text-5xl text-[var(--color-forest)] font-light leading-tight mb-6">
          Some places carry weight.<br />Not the heavy kind.
        </h2>
        <p className="text-[var(--color-bark)]/70 font-sans leading-relaxed text-lg">
          Six thousand square feet of mountain lodge on 25 private acres in Maple Falls, Washington, at the foot of
          Mt. Baker. Forest, trails, a treehouse sauna in the canopy, a great room with a Steinway grand piano and a
          stone fireplace, and the particular quiet that only comes when the nearest road is several acres away.
        </p>
        <p className="text-[var(--color-bark)]/70 font-sans leading-relaxed text-lg mt-4">
          But before it was Red Mountain Retreat, it was simply home.
        </p>
      </section>

      {/* Full-bleed exterior photo */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/exterior-02.jpg"
          alt="Red Mountain Retreat sign and deer — forest path"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--color-forest)]/20" />
      </section>

      {/* How it started */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[var(--color-forest)] flex items-center p-12 md:p-16">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">How It Started</p>
            <h2 className="font-display text-4xl text-white font-light leading-tight mb-4">
              The first remote worker
            </h2>
            <p className="text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed mb-4">
              Mike's father moved the family from Bellevue to the Maple Falls property decades ago — not as a vacation
              property, but as a permanent home. He was a patent attorney who figured out how to work remotely before
              anyone used that phrase. Before reliable internet. Before cell phones. Before the infrastructure existed
              to make it easy.
            </p>
            <p className="text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed mb-4">
              In those days, just getting a private phone line required a fight. First the fight for a non-party line.
              Then a second line. Then one of the earliest satellite dishes in the region — because if you were going
              to live in the mountains and work from them, you were going to solve the connectivity problem yourself.
            </p>
            <p className="text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed">
              It was farm-scale patience applied to a career — the slow, methodical work of building something in a
              place most people wouldn't have chosen.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[480px]">
          <Image
            src="/images/house-front.jpg"
            alt="Red Mountain Retreat — the lodge from the front"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Mike's journey */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Mike Hughes</p>
        <h2 className="font-display text-4xl text-[var(--color-forest)] font-light leading-tight mb-6">
          He left. Then he came back.
        </h2>
        <div className="space-y-5 text-[var(--color-bark)]/70 font-sans leading-relaxed">
          <p>
            Mike grew up on the property and, like many people who grow up somewhere wild and formative, he left.
          </p>
          <p>
            He played football at the University of Idaho from 1991 to 1995 — never missed a practice. Earned a
            mechanical engineering degree. Passed the U.S. Patent Bar. Went to law school. Practiced patent law.
          </p>
          <p>
            Then came a different kind of move: out of trading hours for dollars and into building something. Mike
            became an avid competitive pistol shooter, reached the top of USPSA's Production Division rankings, and
            in 2010 founded Next Level Training — the company behind the SIRT training pistol, a dry-fire training
            system now used by law enforcement, military, and civilian shooters around the world.
          </p>
          <p>
            He and Angie lived in the Northwest, California, North Carolina. They traveled. They built. They grew.
            Life has a way of circling home.
          </p>
        </div>
      </section>

      {/* Angie's story */}
      <section className="bg-[var(--color-cream-dark)] py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/group-outside.jpg"
              alt="Red Mountain Retreat — gathering on the property"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Angie Hughes</p>
            <h2 className="font-display text-4xl text-[var(--color-forest)] font-light leading-tight mb-6">
              From law to ministry
            </h2>
            <div className="space-y-4 text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed">
              <p>
                Mike met Angie in law school. They married in 1998 and built a life together across multiple states,
                careers, and chapters — the kind of partnership that gets tested by distance and change and comes out
                stronger for it.
              </p>
              <p>
                Angie practiced law and eventually moved away from it. She is now in the process of earning her
                ministry license, with active plans for women's educational ministry studies and retreats at Red
                Mountain Retreat.
              </p>
              <p>
                That is not a small thing for a property like this. It means these 25 acres have a longer purpose in
                mind — not just a vacation rental, but a place for women's groups, faith communities, and retreat
                gatherings to come and do the deeper work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The homecoming */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">The Homecoming</p>
        <h2 className="font-display text-4xl text-[var(--color-forest)] font-light leading-tight mb-6">
          Not just to own it.<br />To restore it.
        </h2>
        <div className="space-y-5 text-[var(--color-bark)]/70 font-sans leading-relaxed text-left">
          <p>
            Mike and Angie came back to the Red Mountain property with a specific intention: to turn the house Mike
            grew up in into a place of gathering — a retreat property, a short-term rental, and eventually a home base
            for the retreats and training events they have been building toward for years.
          </p>
          <p>
            They now live in another log home on the adjacent property. Close enough to steward the land and the
            guest experience. Far enough to give guests the privacy and space they came for.
          </p>
          <p>
            The renovation has been unhurried and intentional — premium mattresses and luxury linens in every room,
            the treehouse sauna built in the forest canopy, the billiard room with its turquoise pool table and stone
            fireplace. Every choice made with the question: what would make a group of fourteen people feel like they
            really arrived?
          </p>
        </div>
      </section>

      {/* Church Mountain */}
      <section className="bg-[var(--color-forest)] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Church Mountain · 6,100 ft</p>
            <h2 className="font-display text-4xl text-white font-light leading-tight mb-6">
              Where they renewed their vows
            </h2>
            <div className="space-y-4 text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed">
              <p>
                A short drive from the lodge, Church Mountain rises to 6,100 feet. The hike is 8.5 miles round trip
                with 3,750 feet of elevation gain — serious by any measure.
              </p>
              <p>
                Mike and Angie renewed their vows at the top. After the climb. At elevation. With a view earned step
                by step.
              </p>
              <p>
                There is something fitting about that choice. Marriage, like this property, is not something you
                inherit and walk away from. It is something you climb back toward — with effort, with intention,
                and with someone who chose the same summit.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] bg-[var(--color-bark)]/40 flex items-center justify-center">
            {/* TODO: replace with church-mountain-vows.jpg once available */}
            <p className="text-[var(--color-cream)]/20 font-sans text-xs text-center px-8">
              Church Mountain vow renewal photo coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Three felt qualities */}
      <section className="bg-[var(--color-cream-dark)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans text-center">
            What Guests Notice
          </p>
          <h2 className="font-display text-4xl text-[var(--color-forest)] font-light text-center mb-12">
            Three things people can't quite explain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualities.map(q => (
              <div key={q.label} className="bg-[var(--color-cream)] p-8 border-t-2 border-[var(--color-gold)]">
                <h3 className="font-display text-2xl text-[var(--color-forest)] mb-4">{q.label}</h3>
                <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The sign */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="/images/trails.jpg"
          alt="Forest at Red Mountain Retreat"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-forest)]/82" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-8 font-sans">An Invitation</p>
          <p className="text-[var(--color-cream)]/60 font-sans text-sm leading-relaxed mb-8">
            On the door of Mike and Angie's residence, a few hundred feet from the lodge, there is a sign.
          </p>
          <blockquote className="font-display text-3xl md:text-4xl text-white font-light leading-tight mb-8">
            "You are responsible for the energy you bring into this place."
          </blockquote>
          <p className="text-[var(--color-cream)]/60 font-sans text-sm leading-relaxed max-w-xl mx-auto">
            It is not a warning. It is an invitation. Come with openness. Come with gratitude. Come ready to rest,
            breathe, laugh, repair, and grow.
          </p>
          <p className="text-[var(--color-cream)]/40 font-sans text-sm mt-6 italic">
            Red Mountain Retreat is not just a rental. It is a place to come back together.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-forest)] text-center py-20 px-6">
        <h2 className="font-display text-5xl text-white font-light mb-4">Come see what they built.</h2>
        <p className="text-[var(--color-cream)]/70 mb-8 font-sans text-sm">
          Seven bedrooms, 25 acres, and a mountain that waits for everyone who shows up.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book"
            className="bg-[var(--color-gold)] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans inline-block">
            Check Availability
          </Link>
          <Link href="/things-to-do"
            className="border border-white/50 text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors font-sans inline-block">
            Things to Do
          </Link>
        </div>
      </section>
    </div>
  );
}
