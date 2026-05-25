import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Things to Do Near Red Mountain Retreat — Mt. Baker, Hikes & Day Trips",
  description: "Mt. Baker skiing, Nooksack Falls, Church Mountain, North Fork Brewery, Bellingham, and Abbotsford B.C. Red Mountain Retreat is the launch point for everything the Mt. Baker region offers.",
};

const quickPicks = [
  {
    icon: "🏔️",
    title: "Mt. Baker",
    desc: "45–55 min east on Hwy 542. Skiing, snowboarding, alpine trails, Heather Meadows, and the most dramatic mountain drive in Washington.",
  },
  {
    icon: "💧",
    title: "Nooksack Falls",
    desc: "A short detour off Mt. Baker Highway. Big payoff, no effort required — a thundering canyon waterfall reached by a five-minute forest walk.",
  },
  {
    icon: "⛰️",
    title: "Church Mountain",
    desc: "8.5 miles, 3,750 ft gain. One of the defining regional hikes — strenuous, beautiful, and personally meaningful to the owners.",
  },
  {
    icon: "🍕",
    title: "North Fork Brewery",
    desc: "Legendary pizza and craft beer in Deming. The classic post-mountain stop on Hwy 542.",
  },
  {
    icon: "🏙️",
    title: "Bellingham",
    desc: "45 min west. Fairhaven waterfront, craft breweries, coffee, and a real Pacific Northwest college-town energy.",
  },
  {
    icon: "🇨🇦",
    title: "Abbotsford & Canada",
    desc: "15 minutes past the border. Cross for dinner, shopping, and a change of pace. Bring your passport.",
  },
];

const hikes = [
  {
    name: "Church Mountain",
    difficulty: "Strenuous",
    stats: "8.5 mi · 3,750 ft gain · 6,100 ft summit",
    desc: "The defining local hike. It climbs hard through forest into open alpine terrain, with views that expand and keep expanding. The summit looks out over the North Cascades in a way that rearranges your sense of scale. For Mike and Angie, this is also the place they renewed their vows — making it more than a trail recommendation.",
    featured: true,
  },
  {
    name: "Skyline Divide",
    difficulty: "Moderate–Strenuous",
    stats: "7.5 mi · 2,550 ft gain",
    desc: "A ridge walk with panoramic views of Mt. Baker and the North Cascades. One of the best wildflower hikes in the region during late summer.",
    featured: false,
  },
  {
    name: "Heliotrope Ridge",
    difficulty: "Moderate–Strenuous",
    stats: "6 mi · 2,060 ft gain",
    desc: "The approach to the Coleman Glacier on Mt. Baker's western flank. Close-up glacier views and real alpine terrain without a full summit attempt.",
    featured: false,
  },
  {
    name: "Excelsior Pass",
    difficulty: "Moderate–Strenuous",
    stats: "8 mi · 2,700 ft gain",
    desc: "Flower-filled meadows, ridge views, and the classic Cascades feeling of earning your way above the treeline.",
    featured: false,
  },
  {
    name: "Bagley Lakes Loop",
    difficulty: "Easy",
    stats: "2 mi · minimal gain",
    desc: "An easy loop through the Heather Meadows area with Mt. Baker reflections in alpine lakes. Accessible and beautiful — the right call after a big day on the mountain.",
    featured: false,
  },
];

export default function ThingsToDoPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)]">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <Image
          src="/images/trails.jpg"
          alt="Forest trails at Red Mountain Retreat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)]/80 via-[var(--color-forest)]/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 w-full">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3 font-sans">
            Mt. Baker Country · Maple Falls, WA
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-white font-light leading-tight mb-4">
            Things to Do
          </h1>
          <p className="text-white/80 font-sans text-lg max-w-2xl">
            From mountain stillness to alpine adventure — from local breweries to Canadian day trips.
            Red Mountain Retreat sits at the edge of more than most guests realize.
          </p>
        </div>
      </section>

      {/* Quick picks */}
      <section className="bg-[var(--color-cream-dark)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-12 font-sans text-center">
            The Highlights
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickPicks.map(item => (
              <div key={item.title} className="bg-[var(--color-cream)] p-8">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-display text-2xl text-[var(--color-forest)] mt-4 mb-2">{item.title}</h3>
                <p className="text-[var(--color-bark)]/70 text-sm leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mt. Baker section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[520px]">
          <Image
            src="/images/hero-aerial.jpg"
            alt="Mt. Baker aerial view from Red Mountain Retreat area"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-[var(--color-forest)] flex items-center p-12 md:p-16">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">45–55 Min East</p>
            <h2 className="font-display text-4xl text-white font-light leading-tight mb-4">
              Mt. Baker & the Highway
            </h2>
            <p className="text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed mb-4">
              Head east on Mt. Baker Highway and watch the world change. The drive itself is part of the experience —
              forest, river, mountain air, snowline, and finally the high alpine world around Heather Meadows and the
              ski area.
            </p>
            <p className="text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed mb-4">
              In winter, it is skiing and snowboarding at one of the snowiest mountains on earth. In summer and fall,
              Mt. Baker becomes a scenic mountain road into trail networks, alpine lakes, wildflowers, and views that
              stop people mid-sentence.
            </p>
            <p className="text-[var(--color-cream)]/50 font-sans text-xs">
              Heather Meadows Base Area · Picture Lake · White Salmon Lodge · Ski Area
            </p>
          </div>
        </div>
      </section>

      {/* Nooksack Falls */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Quick Stop · High Reward</p>
        <h2 className="font-display text-4xl text-[var(--color-forest)] font-light mb-4">Nooksack Falls</h2>
        <p className="text-[var(--color-bark)]/70 font-sans leading-relaxed max-w-2xl mx-auto">
          A short detour off Mt. Baker Highway leads to a forest road, a short walk, and a fenced rocky outcropping
          above one of the most beautiful waterfalls in the Cascades. Guests consistently rate it as one of the easiest
          big-payoff stops in the region. Add it to any drive toward Glacier or Heather Meadows.
        </p>
        <p className="text-[var(--color-bark)]/40 font-sans text-xs mt-4">
          Stay behind the fencing — the canyon edge is the reason it is there.
        </p>
      </section>

      {/* Hikes */}
      <section className="bg-[var(--color-cream-dark)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">On Foot</p>
          <h2 className="font-display text-4xl text-[var(--color-forest)] font-light mb-12">The Hikes</h2>

          {/* Church Mountain — featured */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 bg-[var(--color-forest)] p-8 md:p-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[var(--color-gold)] text-white text-[10px] tracking-widest uppercase px-3 py-1 font-sans">
                  Featured Hike
                </span>
                <span className="text-[var(--color-cream)]/40 text-xs font-sans">Strenuous</span>
              </div>
              <h3 className="font-display text-4xl text-white font-light mb-1">Church Mountain</h3>
              <p className="text-[var(--color-gold)] font-sans text-xs mb-4">8.5 mi · 3,750 ft gain · 6,100 ft summit</p>
              <p className="text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed mb-4">
                The defining local hike. It climbs hard through old-growth forest into open alpine terrain, with views
                that expand the higher you go. The summit looks out over the North Cascades in a way that rearranges
                your sense of scale.
              </p>
              <p className="text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed">
                For Mike and Angie Hughes — the owners of Red Mountain Retreat — Church Mountain is more than a nearby
                trail. They renewed their vows at the summit. After the climb. At elevation. With a view earned step by
                step. It seemed like the right place to recommit: hard-won, beautiful, and worth it.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/church-mountain-01.jpg" alt="Mike and Angie at the Church Mountain summit" fill className="object-cover" />
            </div>
          </div>

          {/* Other hikes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hikes.filter(h => !h.featured).map(hike => (
              <div key={hike.name} className="bg-[var(--color-cream)] p-8 border-t-2 border-[var(--color-gold)]">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-display text-2xl text-[var(--color-forest)]">{hike.name}</h3>
                  <span className={`text-[10px] tracking-widest uppercase font-sans px-2 py-0.5 ml-2 flex-shrink-0 ${
                    hike.difficulty === "Easy"
                      ? "bg-[var(--color-forest)]/10 text-[var(--color-forest)]"
                      : "bg-[var(--color-gold)]/10 text-[var(--color-gold)]"
                  }`}>
                    {hike.difficulty}
                  </span>
                </div>
                <p className="text-[var(--color-bark)]/40 font-sans text-xs mb-3">{hike.stats}</p>
                <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed">{hike.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[var(--color-bark)]/40 font-sans text-xs mt-8 text-center">
            Trail conditions and seasonal access vary. Check Washington Trails Association (wta.org) before heading out.
          </p>
        </div>
      </section>

      {/* Food & Drink */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[var(--color-bark)] flex items-center p-12 md:p-16">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">After the Hike</p>
            <h2 className="font-display text-4xl text-white font-light leading-tight mb-4">
              North Fork Brewery
            </h2>
            <p className="text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed mb-4">
              North Fork Brewery in Deming is the classic Mt. Baker Highway stop: craft beer, legendary pizza, and the
              kind of local character that cannot be manufactured. It is the right place to end a day on the mountain —
              still in the foothills, still among the trees, with a pint and the feeling of a day well spent.
            </p>
            <p className="text-[var(--color-cream)]/40 font-sans text-xs">
              6186 Mt. Baker Hwy, Deming · Open daily from noon
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
          <Image
            src="/images/exterior-bridge.jpg"
            alt="Mountain foothills near Red Mountain Retreat"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Day Trips */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Farther Afield</p>
        <h2 className="font-display text-4xl text-[var(--color-forest)] font-light mb-12">Day Trips</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border-t-2 border-[var(--color-gold)] pt-6">
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-2 font-sans">45 Min West</p>
            <h3 className="font-display text-3xl text-[var(--color-forest)] mb-3">Bellingham</h3>
            <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed">
              The closest city day — a real Pacific Northwest college and port town with good coffee, the Fairhaven
              waterfront neighborhood, craft breweries, independent restaurants, and the energy of a place that takes
              outdoor recreation seriously. A good contrast to the quiet of the lodge.
            </p>
          </div>

          <div className="border-t-2 border-[var(--color-gold)] pt-6">
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-2 font-sans">Cross the Border</p>
            <h3 className="font-display text-3xl text-[var(--color-forest)] mb-3">Abbotsford, B.C.</h3>
            <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed mb-3">
              Guests with passports can turn the stay into a cross-border experience. Abbotsford is 15 minutes past the
              crossing — restaurants, shopping, and a change of pace without a full Vancouver-scale commitment. Cactus
              Club Cafe on Delair Road is a solid dinner option.
            </p>
            <p className="text-[var(--color-bark)]/40 font-sans text-xs">
              Border wait times and documentation requirements vary. Check current requirements before planning a Canada outing.
            </p>
          </div>

          <div className="border-t-2 border-[var(--color-gold)] pt-6">
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-2 font-sans">The Scenic Route</p>
            <h3 className="font-display text-3xl text-[var(--color-forest)] mb-3">Train to Vancouver</h3>
            <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed">
              Bellingham's Fairhaven Station (401 Harris Ave) is an Amtrak Cascades stop connecting to Vancouver, B.C.
              and Seattle. The train is not the fastest option — it is the unhurried, let-the-day-unfold option. Coffee,
              passports, a city day, and the drive back through forest to the lodge. A specific kind of Pacific Northwest
              day trip.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-forest)] text-center py-20 px-6">
        <h2 className="font-display text-5xl text-white font-light mb-4">Ready to make it your base camp?</h2>
        <p className="text-[var(--color-cream)]/70 mb-8 font-sans text-sm">
          Seven bedrooms, 25 acres, and all of this within reach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book"
            className="bg-[var(--color-gold)] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans inline-block">
            Check Availability
          </Link>
          <Link href="/our-story"
            className="border border-white/50 text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors font-sans inline-block">
            Meet the Owners
          </Link>
        </div>
      </section>
    </div>
  );
}
