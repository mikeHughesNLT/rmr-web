import type { Metadata } from "next";
import Link from "next/link";
import DarkSkyEmailForm from "./DarkSkyEmailForm";

export const metadata: Metadata = {
  title: "Perseid Dark Sky Weekend · Red Mountain Retreat",
  description:
    "Aug 12–17, 2026. One lodge. One new moon. Sixty acres of dark. The Perseids peak under a 0% moon — five hours of real astronomical darkness near Maple Falls, WA.",
  openGraph: {
    title: "One lodge. One new moon. Sixty acres of dark.",
    description:
      "Perseid meteor shower peak, Aug 12–13, 2026. Five hours of real astronomical darkness. Book direct — no fees.",
    url: "https://stayredmountain.com/dark-sky",
  },
  // ── ARCHIVE: remove next two lines to reactivate for future dark-sky campaign ──
  robots: { index: false, follow: false },
};

// ── Compass / light-pollution diagram ─────────────────────────────────────────
function CompassDiagram() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="w-full max-w-xs mx-auto"
      aria-label="Light pollution map — glow to the north and west, dark forest to the south and east"
    >
      {/* Background */}
      <circle cx="160" cy="160" r="148" fill="#060B0F" stroke="#C8963E" strokeWidth="0.5" strokeOpacity="0.25" />

      {/* Dark zone highlight — S through E sector */}
      <path d="M160 160 L290 230 A148 148 0 0 1 160 308 A148 148 0 0 1 52 240 Z"
        fill="#4A9A6F" fillOpacity="0.07" />

      {/* Compass grid lines */}
      <line x1="160" y1="12" x2="160" y2="308" stroke="#F5EED8" strokeOpacity="0.06" strokeWidth="1" />
      <line x1="12" y1="160" x2="308" y2="160" stroke="#F5EED8" strokeOpacity="0.06" strokeWidth="1" />
      <line x1="55" y1="55" x2="265" y2="265" stroke="#F5EED8" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="265" y1="55" x2="55" y2="265" stroke="#F5EED8" strokeOpacity="0.04" strokeWidth="1" />

      {/* Cardinal labels */}
      <text x="155" y="11" fill="#F5EED8" fontSize="10" fontFamily="sans-serif" opacity="0.4">N</text>
      <text x="155" y="314" fill="#C8963E" fontSize="10" fontFamily="sans-serif" opacity="0.7">S</text>
      <text x="8" y="164" fill="#F5EED8" fontSize="10" fontFamily="sans-serif" opacity="0.4">W</text>
      <text x="306" y="164" fill="#F5EED8" fontSize="10" fontFamily="sans-serif" opacity="0.4">E</text>

      {/* Glow sources */}
      {/* Abbotsford NW */}
      <circle cx="88" cy="88" r="16" fill="#FFC200" fillOpacity="0.18" />
      <circle cx="88" cy="88" r="8" fill="#FFC200" fillOpacity="0.22" />
      <text x="22" y="73" fill="#FFC200" fontSize="9" fontFamily="sans-serif" opacity="0.75" fontWeight="500">Abbotsford BC</text>
      <text x="32" y="84" fill="#FFC200" fontSize="8" fontFamily="sans-serif" opacity="0.45">13.5 mi NW</text>

      {/* Chilliwack NNE */}
      <circle cx="190" cy="72" r="13" fill="#FFC200" fillOpacity="0.14" />
      <circle cx="190" cy="72" r="6" fill="#FFC200" fillOpacity="0.18" />
      <text x="205" y="67" fill="#FFC200" fontSize="9" fontFamily="sans-serif" opacity="0.7">Chilliwack BC</text>
      <text x="209" y="78" fill="#FFC200" fontSize="8" fontFamily="sans-serif" opacity="0.4">17.1 mi NNE</text>

      {/* Bellingham WSW */}
      <circle cx="72" cy="195" r="12" fill="#FFC200" fillOpacity="0.1" />
      <circle cx="72" cy="195" r="5" fill="#FFC200" fillOpacity="0.14" />
      <text x="8" y="190" fill="#FFC200" fontSize="9" fontFamily="sans-serif" opacity="0.55">Bellingham WA</text>
      <text x="13" y="201" fill="#FFC200" fontSize="8" fontFamily="sans-serif" opacity="0.35">21.8 mi WSW</text>

      {/* Property */}
      <circle cx="160" cy="160" r="5" fill="#C8963E" />
      <circle cx="160" cy="160" r="9" fill="none" stroke="#C8963E" strokeWidth="1" strokeOpacity="0.4" />
      <text x="168" y="157" fill="#F5EED8" fontSize="10" fontFamily="sans-serif" opacity="0.85">You</text>

      {/* Mt. Baker SE — dark */}
      <circle cx="238" cy="240" r="10" fill="#4A9A6F" fillOpacity="0.5" />
      <text x="252" y="237" fill="#4A9A6F" fontSize="9" fontFamily="sans-serif" fontWeight="500">Mt. Baker</text>
      <text x="255" y="248" fill="#4A9A6F" fontSize="8" fontFamily="sans-serif" opacity="0.7">15.7 mi SE</text>

      {/* "face south" arrow */}
      <line x1="160" y1="175" x2="160" y2="295" stroke="#C8963E" strokeWidth="1.5" strokeOpacity="0.4" />
      <polygon points="160,300 155,290 165,290" fill="#C8963E" fillOpacity="0.5" />

      {/* Dark zone label */}
      <text x="115" y="298" fill="#4A9A6F" fontSize="8" fontFamily="sans-serif" opacity="0.6">← dark forest →</text>
    </svg>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function DarkSkyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080C10", color: "#F5EED8" }}>

      {/* ── ARCHIVE BANNER — remove this block to reactivate ── */}
      <div className="w-full text-center py-3 px-6 text-sm mt-[76px]" style={{ backgroundColor: "#1a1208", borderBottom: "1px solid #C8963E22", color: "#C8963E" }}>
        This event has passed.{" "}
        <Link href="/book" style={{ color: "#F5EED8", textDecoration: "underline" }}>
          See upcoming availability →
        </Link>
      </div>
      {/* ── END ARCHIVE BANNER ── */}

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/*
          PHOTO PLACEHOLDER — replace the gradient div below with:

          <Image
            src="/images/dark-sky-hero.jpg"
            alt="Milky Way over Red Mountain Retreat lodge"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />

          After Mike shoots the hero image (Jul 13–15 ~1am, face south).
          Upload to /public/images/dark-sky-hero.jpg
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 60%, #0D1B2A 0%, #060B0F 55%, #020407 100%)",
          }}
        />

        {/* Star field — subtle CSS dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 15% 20%, rgba(245,238,216,0.6) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 35% 8%, rgba(245,238,216,0.4) 0%, transparent 100%)," +
              "radial-gradient(1.5px 1.5px at 55% 15%, rgba(245,238,216,0.7) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 72% 5%, rgba(245,238,216,0.5) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 88% 22%, rgba(245,238,216,0.4) 0%, transparent 100%)," +
              "radial-gradient(1.5px 1.5px at 10% 45%, rgba(245,238,216,0.3) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 28% 38%, rgba(245,238,216,0.5) 0%, transparent 100%)," +
              "radial-gradient(2px 2px at 62% 32%, rgba(245,238,216,0.35) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 80% 40%, rgba(245,238,216,0.5) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 92% 12%, rgba(245,238,216,0.6) 0%, transparent 100%)," +
              "radial-gradient(1.5px 1.5px at 45% 28%, rgba(200,150,62,0.4) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 20% 60%, rgba(245,238,216,0.25) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 75% 55%, rgba(245,238,216,0.3) 0%, transparent 100%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[#C8963E] text-xs tracking-[0.4em] uppercase mb-6 font-sans">
            Red Mountain Retreat · Maple Falls, WA
          </p>
          <h1
            className="font-display text-5xl md:text-7xl font-light leading-[1.1] mb-6"
            style={{ color: "#F5EED8" }}
          >
            One lodge.
            <span className="block">One new moon.</span>
            <span className="block text-[#C8963E]">Sixty acres of dark.</span>
          </h1>
          <p className="font-sans text-lg mb-2" style={{ color: "rgba(245,238,216,0.75)" }}>
            August 12–17, 2026
          </p>
          <p className="font-sans text-sm mb-10" style={{ color: "rgba(245,238,216,0.45)" }}>
            Perseid meteor shower peak · 0% moon · five hours of real darkness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#book"
              className="bg-[#C8963E] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#D4A84E] transition-colors font-sans"
            >
              Reserve the weekend
            </Link>
            <a
              href="#guide"
              className="border border-white/25 text-[#F5EED8] font-sans text-sm tracking-widest uppercase px-8 py-4 hover:border-white/60 hover:bg-white/5 transition-colors"
            >
              Send me the viewing guide
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="font-sans text-[10px] tracking-widest uppercase" style={{ color: "#F5EED8" }}>Scroll</span>
          <div className="w-px h-8" style={{ backgroundColor: "#F5EED8" }} />
        </div>
      </section>

      {/* ── THE SETUP ────────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-[#C8963E] text-xs tracking-[0.3em] uppercase mb-8 font-sans text-center">
          The Event
        </p>

        <div
          className="space-y-8 font-sans text-lg leading-relaxed"
          style={{ color: "rgba(245,238,216,0.78)" }}
        >
          <p>
            The Perseids peak the night of{" "}
            <strong style={{ color: "#F5EED8" }}>August 12–13, 2026</strong>, and
            this year the new moon falls on August 12 — 0% illuminated. The moon,
            which normally washes out a third of the sky, is entirely absent. Under
            ideal conditions, you&apos;ll see 50–80 meteors per hour. Some years you
            see 30. Some years, on a peak that dark, you lose count.
          </p>
          <p>
            At our latitude (48.9°N), midsummer nights never fully darken — the sun
            lingers too close to the horizon and the sky stays a deep nautical blue
            through July. By August 12, the geometry finally shifts. The sun drops
            roughly 27° below the horizon, giving you approximately{" "}
            <strong style={{ color: "#F5EED8" }}>
              five hours of genuine astronomical darkness
            </strong>
            , from around 10:45 p.m. to 3:45 a.m.
          </p>
          <p>
            The radiant point rises from the northeast after midnight. The long
            streaks — the ones that cross a quarter of the sky — appear roughly 45°
            away from Perseus, in the south and southeast. Which is exactly where we
            want you looking.
          </p>
        </div>

        <blockquote className="mt-14 border-l-2 border-[#C8963E] pl-6">
          <p
            className="font-display text-2xl md:text-3xl font-light italic leading-relaxed"
            style={{ color: "#F5EED8" }}
          >
            In July the sky never fully closes its eyes.
            <br />
            In August it finally sleeps.
          </p>
        </blockquote>
      </section>

      {/* ── TURN YOUR BACK ON THE VALLEY ─────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#060B0F" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8963E] text-xs tracking-[0.3em] uppercase mb-4 font-sans text-center">
            Honest About the Sky
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-light text-center mb-4"
            style={{ color: "#F5EED8" }}
          >
            Turn your back on the valley
          </h2>
          <p
            className="font-sans text-center mb-16 max-w-xl mx-auto text-sm leading-relaxed"
            style={{ color: "rgba(245,238,216,0.5)" }}
          >
            Most properties just say &ldquo;dark skies.&rdquo; Here&apos;s exactly what ours looks like.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <CompassDiagram />

            <div
              className="space-y-5 font-sans text-base leading-relaxed"
              style={{ color: "rgba(245,238,216,0.72)" }}
            >
              <p>
                We&apos;re not going to claim zero light pollution. Abbotsford, BC is
                13.5 miles to the northwest — 160,000 people. Chilliwack is 17 miles
                north-northeast. Bellingham is 22 miles southwest. These are real
                cities and they cast a real glow on the northern horizon.
              </p>
              <p>
                But our{" "}
                <strong style={{ color: "#F5EED8" }}>
                  southern and eastern horizon
                </strong>{" "}
                is Mt. Baker–Snoqualmie National Forest. Sixteen miles of nothing
                between the property and the summit. The Fraser Valley glow is
                directly behind you. The Milky Way core in August hangs low in the
                south. The meteors come over your shoulder from the northeast.
              </p>
              <p className="text-sm" style={{ color: "rgba(245,238,216,0.45)" }}>
                The posture is simple: face south toward the mountain, put the valley
                at your back, and let the sky fill in front of you. Being honest about
                your own light pollution is the whole differentiator with this audience.
                Check it yourself at{" "}
                <a
                  href="https://www.lightpollutionmap.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-[#C8963E] transition-colors"
                  style={{ color: "rgba(200,150,62,0.65)" }}
                >
                  lightpollutionmap.info
                </a>
                .
              </p>

              {/* Grid of light sources */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { dir: "NW", label: "Abbotsford BC", sub: "13.5 mi · ~160k people", dark: false },
                  { dir: "NNE", label: "Chilliwack BC", sub: "17.1 mi · ~100k people", dark: false },
                  { dir: "WSW", label: "Bellingham WA", sub: "21.8 mi · ~95k people", dark: false },
                  { dir: "SE", label: "Mt. Baker summit", sub: "15.7 mi · national forest", dark: true },
                ].map(({ dir, label, sub, dark }) => (
                  <div
                    key={dir}
                    className="p-3 rounded-sm"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: `1px solid ${dark ? "rgba(74,154,111,0.2)" : "rgba(255,194,0,0.12)"}`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-mono font-medium"
                        style={{ color: dark ? "#4A9A6F" : "#FFC200", opacity: 0.85 }}
                      >
                        {dir}
                      </span>
                      <span
                        className="text-[10px] font-sans"
                        style={{ color: dark ? "rgba(74,154,111,0.7)" : "rgba(255,194,0,0.55)" }}
                      >
                        {dark ? "✓ dark" : "▲ glow"}
                      </span>
                    </div>
                    <p className="text-xs font-sans" style={{ color: "#F5EED8", opacity: 0.85 }}>
                      {label}
                    </p>
                    <p className="text-[10px] font-sans" style={{ color: "rgba(245,238,216,0.38)" }}>
                      {sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK SKY KIT ─────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-[#C8963E] text-xs tracking-[0.3em] uppercase mb-4 font-sans text-center">
          Included
        </p>
        <h2
          className="font-display text-4xl md:text-5xl font-light text-center mb-4"
          style={{ color: "#F5EED8" }}
        >
          The Dark Sky Kit
        </h2>
        <p
          className="font-sans text-center mb-16 max-w-md mx-auto text-sm"
          style={{ color: "rgba(245,238,216,0.45)" }}
        >
          Standard rate. Nothing cut. A few things added.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              label: "Perseid star chart",
              detail:
                "Custom map for our coordinates and the Aug 12–13 peak window — where to look, when, what to expect.",
            },
            {
              label: "Red headlamps",
              detail:
                "Red light preserves your night vision. White light kills dark adaptation in about 20 seconds.",
            },
            {
              label: "Zero-gravity chairs",
              detail:
                "Flat-recline so you can watch overhead for hours without a neck cramp. Set up facing south.",
            },
            {
              label: "Firepits lit at dusk",
              detail:
                "Firewood included. Gather around the fire until it dies and the stars take over around midnight.",
            },
            {
              label: "Coffee at 4 a.m.",
              detail:
                "The peak window runs midnight to predawn. We'll have hot coffee ready when you need it.",
            },
            {
              label: "Late checkout",
              detail:
                "You were up until 4 a.m. watching meteors. Sleep in — we'll work with you on checkout time.",
            },
            {
              label: "Quiet hours & lights-out",
              detail:
                "Outdoor lighting off after 10 p.m. for the duration of the stay. Lodge dark, sky bright.",
            },
            {
              label: "60 acres",
              detail:
                "25 private acres around the lodge plus adjacent private trail land. No neighbor lights, no road.",
            },
          ].map(({ label, detail }) => (
            <div
              key={label}
              className="flex gap-4 p-5 rounded-sm"
              style={{
                backgroundColor: "rgba(200,150,62,0.05)",
                border: "1px solid rgba(200,150,62,0.13)",
              }}
            >
              <span
                className="text-[#C8963E] text-lg flex-shrink-0 mt-0.5 select-none"
                aria-hidden="true"
              >
                ✦
              </span>
              <div>
                <p className="font-sans text-sm font-medium mb-1" style={{ color: "#F5EED8" }}>
                  {label}
                </p>
                <p
                  className="font-sans text-xs leading-relaxed"
                  style={{ color: "rgba(245,238,216,0.48)" }}
                >
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOOK DIRECT ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#060B0F" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#C8963E] text-xs tracking-[0.3em] uppercase mb-4 font-sans">
            Book Direct
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-light mb-6"
            style={{ color: "#F5EED8" }}
          >
            Same lodge. Same night.
            <span className="block text-[#C8963E]">No booking fees.</span>
          </h2>
          <p
            className="font-sans mb-4 leading-relaxed"
            style={{ color: "rgba(245,238,216,0.65)" }}
          >
            Airbnb adds a guest service fee on top of the nightly rate. We don&apos;t.
            You&apos;re not getting a discount — you&apos;re skipping the middleman.
          </p>
          <p className="font-sans text-sm" style={{ color: "rgba(245,238,216,0.35)" }}>
            Aug 12–17 is scarce, not cheap. No promo codes. No price cuts.
            One block, one event, one rate.
          </p>
        </div>
      </section>

      {/* ── BOOKING WIDGET ───────────────────────────────────────────────────── */}
      <section id="book" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8963E] text-xs tracking-[0.3em] uppercase mb-4 font-sans text-center">
            Reserve Your Spot
          </p>
          <h2
            className="font-display text-4xl font-light text-center mb-12"
            style={{ color: "#F5EED8" }}
          >
            Aug 12–17, 2026
          </h2>
          <div
            className="rounded-sm overflow-hidden"
            style={{ border: "1px solid rgba(200,150,62,0.18)" }}
          >
            <iframe
              src="https://booking.hospitable.com/widget/a1d62494-3545-4d00-a069-f863b24abc03/2190928"
              width="100%"
              height="580"
              frameBorder={0}
              title="Reserve Red Mountain Retreat — Aug 12–17 Dark Sky Weekend"
            />
          </div>
          <p
            className="text-center mt-4 font-sans text-xs"
            style={{ color: "rgba(245,238,216,0.3)" }}
          >
            Secured by Hospitable Direct · Questions?{" "}
            <Link
              href="/contact"
              className="underline underline-offset-2 hover:text-[#C8963E] transition-colors"
              style={{ color: "rgba(200,150,62,0.6)" }}
            >
              Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ─────────────────────────────────────────────────────── */}
      <section id="guide" className="py-24 px-6" style={{ backgroundColor: "#040709" }}>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#C8963E] text-xs tracking-[0.3em] uppercase mb-4 font-sans">
            Free Download
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-light mb-4"
            style={{ color: "#F5EED8" }}
          >
            The Red Mountain Perseid Guide
          </h2>
          <p
            className="font-sans mb-8 leading-relaxed text-sm"
            style={{ color: "rgba(245,238,216,0.58)" }}
          >
            Where to sit. When to look. What you&apos;ll actually see. One page, written
            for our specific coordinates, our specific horizon, and the August 12 peak
            window. No fluff.
          </p>
          <DarkSkyEmailForm />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-[#C8963E] text-xs tracking-[0.3em] uppercase mb-4 font-sans text-center">
          Questions
        </p>
        <h2
          className="font-display text-4xl font-light text-center mb-16"
          style={{ color: "#F5EED8" }}
        >
          The honest answers
        </h2>

        <div
          className="divide-y"
          style={{ borderColor: "rgba(245,238,216,0.07)" }}
        >
          {[
            {
              q: "Will I see the solar eclipse?",
              a: "No. The Aug 12, 2026 total solar eclipse crosses Greenland, Iceland, and Spain. It is not visible from Washington state. The same new moon that produces the eclipse is what darkens our sky for the Perseids — that connection is real — but the eclipse itself is not viewable from here.",
            },
            {
              q: "How dark is the sky, really?",
              a: "Abbotsford, BC (160,000 people) is 13.5 miles northwest. There is glow on the northern horizon. Our southern and eastern sky, facing Mt. Baker and the national forest, is substantially darker. We will not give you a Bortle number until we verify it — check lightpollutionmap.info at coordinates 48.92°N, -122.08°W before you come.",
            },
            {
              q: "What if it's cloudy?",
              a: "We can't control the weather. The Cascades produce their own patterns and Maple Falls averages partly cloudy nights in August. The Perseids are active from roughly July 17 – Aug 24, so if the 12th–13th is clouded out, later nights in your stay may be clearer. We do not offer weather cancellations — please purchase travel insurance if cloud cover is a deal-breaker.",
            },
            {
              q: "Is there a telescope on site?",
              a: "Not currently. We provide red headlamps, zero-gravity chairs, and star charts. If you own a telescope, bring it — the property has open sky and stable ground. If you're serious about astrophotography, contact us about a potential barter arrangement.",
            },
            {
              q: "Why book direct instead of Airbnb?",
              a: "Same lodge, same night, no guest service fee. Airbnb adds their fee on top of the nightly rate. When you book here, that fee stays in your pocket. The calendar shows the same availability either way.",
            },
            {
              q: "Can two people book a 7-bedroom lodge?",
              a: "Yes. No minimum-guest requirement. The lodge is beautiful with two people. The rate is per night, not per person. Some of the best sky nights are quiet ones.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="py-7">
              <p
                className="font-display text-xl font-light mb-3"
                style={{ color: "#F5EED8" }}
              >
                {q}
              </p>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "rgba(245,238,216,0.55)" }}
              >
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: "#020407" }}>
        <p className="text-[#C8963E] text-xs tracking-[0.3em] uppercase mb-6 font-sans">
          One Block · One Event
        </p>
        <h2
          className="font-display text-4xl md:text-5xl font-light mb-4"
          style={{ color: "#F5EED8" }}
        >
          Your deadest midweek is somebody&apos;s peak sky.
        </h2>
        <p
          className="font-sans mb-10 text-sm"
          style={{ color: "rgba(245,238,216,0.35)" }}
        >
          Aug 12–17, 2026 · Red Mountain Retreat · Maple Falls, WA
        </p>
        <Link
          href="#book"
          className="inline-block bg-[#C8963E] text-white px-12 py-5 text-sm tracking-widest uppercase hover:bg-[#D4A84E] transition-colors font-sans"
        >
          Reserve the weekend
        </Link>
        <div className="mt-12 pt-12 border-t border-white/5">
          <Link
            href="/"
            className="font-sans text-xs tracking-widest uppercase hover:text-[#C8963E] transition-colors"
            style={{ color: "rgba(245,238,216,0.3)" }}
          >
            ← stayredmountain.com
          </Link>
        </div>
      </section>
    </div>
  );
}
