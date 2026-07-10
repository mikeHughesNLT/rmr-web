import type { Metadata } from 'next';
import Image from 'next/image';
import PrintButton from './PrintButton';

export const metadata: Metadata = {
  title: 'Guest Manual — Red Mountain Retreat',
  robots: { index: false, follow: false },
};

const QR_URL =
  'https://api.qrserver.com/v1/create-qr-code/?size=220x220' +
  '&data=' + encodeURIComponent('https://stayredmountain.com/manual') +
  '&color=1B3A2D&bgcolor=F5EED8&margin=2';

// ─── reusable label ──────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)] mb-2">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="w-12 h-px bg-[var(--color-gold)] my-6" />;
}

// ─── quick-ref card ──────────────────────────────────────────────────────────
function RefCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="border border-[var(--color-forest)]/15 p-4 bg-white/50">
      <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-1">{label}</p>
      <p className="font-display text-2xl text-[var(--color-forest)] font-light leading-tight">{value}</p>
      {sub && <p className="font-sans text-[11px] text-[var(--color-bark)]/60 mt-1">{sub}</p>}
    </div>
  );
}

// ─── rule item ───────────────────────────────────────────────────────────────
function Rule({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="flex items-start gap-3 py-2 border-b border-[var(--color-forest)]/8 last:border-0">
      <span className="text-base mt-px shrink-0">{icon}</span>
      <span className="font-sans text-sm text-[var(--color-bark)]/80 leading-snug">{text}</span>
    </li>
  );
}

// ─── space card ──────────────────────────────────────────────────────────────
function Space({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="mb-5">
      <h4 className="font-display text-lg text-[var(--color-forest)] font-medium mb-1">{name}</h4>
      <p className="font-sans text-sm text-[var(--color-bark)]/75 leading-relaxed">{desc}</p>
    </div>
  );
}

// ─── distance row ─────────────────────────────────────────────────────────────
function DistRow({ place, time }: { place: string; time: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-[var(--color-forest)]/10 last:border-0">
      <span className="font-sans text-sm text-[var(--color-bark)]/80">{place}</span>
      <span className="font-sans text-xs text-[var(--color-gold)] font-medium tracking-wide">{time}</span>
    </div>
  );
}

export default function ManualPage() {
  return (
    <>
      {/* ─── Print-specific styles ─────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            @page          { size: letter; margin: 0.7in; }
            @page :first   { margin: 0; }

            nav, footer, .no-print { display: none !important; }
            body { background: white !important; }

            .cover-page {
              height: 11in;
              min-height: 11in;
              page-break-after: always;
              break-after: page;
              overflow: hidden;
            }
            .print-page {
              page-break-before: always;
              break-before: page;
            }
            /* ensure images print */
            img { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
        `,
      }} />

      <div className="pt-24 print:pt-0 bg-[var(--color-cream)]">

        {/* ── Web-only header ─────────────────────────────────────────── */}
        <div className="no-print max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[var(--color-forest)]/10 mb-0">
          <div>
            <SectionLabel>Red Mountain Retreat</SectionLabel>
            <h1 className="font-display text-5xl text-[var(--color-forest)] font-light">Guest Manual</h1>
            <p className="font-sans text-sm text-[var(--color-bark)]/60 mt-2">
              Use the button to print — or browse each section below.
            </p>
          </div>
          <PrintButton />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            PAGE 1 — COVER  (full bleed)
        ══════════════════════════════════════════════════════════════ */}
        <section className="cover-page relative flex items-center justify-center overflow-hidden h-screen">
          <Image
            src="/images/exterior-02.jpg"
            alt="Red Mountain Retreat"
            fill
            className="object-cover object-[center_40%]"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-forest)]/75 via-[var(--color-forest)]/55 to-[var(--color-forest)]/80" />

          <div className="relative z-10 text-center text-white px-8">
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="Red Mountain Retreat"
                width={100}
                height={100}
                className="brightness-0 invert mx-auto"
              />
            </div>
            <p className="font-sans text-[10px] tracking-[0.45em] uppercase text-[var(--color-gold)] mb-5">
              Maple Falls, Washington · Mt. Baker Country
            </p>
            <h2 className="font-display text-[5.5rem] print:text-7xl font-light leading-[0.9] mb-6 text-white">
              Red Mountain<br />Retreat
            </h2>
            <div className="flex items-center justify-center gap-5 mb-6">
              <div className="h-px w-14 bg-[var(--color-gold)]/60" />
              <p className="font-display text-xl font-light tracking-[0.22em] text-white/85">
                Restore · Reconnect · Rise
              </p>
              <div className="h-px w-14 bg-[var(--color-gold)]/60" />
            </div>
            <p className="font-sans text-[10px] tracking-[0.45em] uppercase text-white/40 mt-10">
              Guest Manual · stayredmountain.com
            </p>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-forest)]/60 to-transparent" />

          {/* Print-only QR strip — hidden on web, visible when printing */}
          <div className="hidden print:flex absolute bottom-0 left-0 right-0 items-center justify-center gap-6 px-10 pb-8 z-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={QR_URL}
              alt="QR code — stayredmountain.com/manual"
              width={90}
              height={90}
            />
            <div className="text-left">
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-[var(--color-gold)] mb-1">
                View the Digital Manual
              </p>
              <p className="font-sans text-sm text-white font-medium">
                stayredmountain.com/manual
              </p>
              <p className="font-sans text-xs text-white/60 mt-1">
                Password: <span className="text-white/90 font-medium">guest</span>
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PAGE 2 — WELCOME + QUICK REFERENCE
        ══════════════════════════════════════════════════════════════ */}
        <section className="print-page max-w-5xl mx-auto px-6 py-16 print:max-w-none print:py-8 print:px-0">
          <SectionLabel>Welcome</SectionLabel>
          <h3 className="font-display text-4xl text-[var(--color-forest)] font-light mb-6 leading-snug">
            Welcome to Your<br />Mountain Home
          </h3>
          <p className="font-sans text-[var(--color-bark)]/80 leading-relaxed max-w-2xl mb-3">
            We're so glad you're here. This house has been in my family for fifty years — built from cedar milled on the property, with log walls that have held a lot of good people and good stories. We've updated everything you see, but the bones are original, and the land is exactly as it always was.
          </p>
          <p className="font-sans text-[var(--color-bark)]/80 leading-relaxed max-w-2xl mb-3">
            Angie and I live adjacent to the property and are always reachable, but you have full privacy here. The 25 acres and the trails are yours. Enjoy the sauna. Play the Steinway. Sit by the fire. This place is best experienced slowly.
          </p>
          <p className="font-sans text-[var(--color-bark)]/60 text-sm italic max-w-2xl mb-10">
            — Mike & Angie Hughes
          </p>

          <Divider />
          <SectionLabel>Your Stay — At a Glance</SectionLabel>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <RefCard label="Check-In" value="4:00 PM" sub="Smart lock — code in your pre-arrival message" />
            <RefCard label="Check-Out" value="11:00 AM" sub="Please leave by 11 am" />
            <RefCard label="Max Guests" value="14" sub="Registered guests only" />
            <RefCard label="Wifi" value="Starlink" sub="Network: redmountain · Password: rise42day" />
          </div>

          <div className="bg-[var(--color-forest)] text-[var(--color-cream)] px-6 py-4 flex flex-col sm:flex-row gap-2 sm:gap-8 items-start sm:items-center">
            <div>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-0.5">Door Code</p>
              <p className="font-display text-lg font-light">Sent in your pre-arrival message (24–48 hrs before check-in)</p>
            </div>
            <div className="sm:border-l border-white/20 sm:pl-8">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-0.5">Need Help?</p>
              <p className="font-display text-lg font-light">mike@stayredmountain.com</p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PAGE 3 — HOUSE RULES
        ══════════════════════════════════════════════════════════════ */}
        <section className="print-page max-w-5xl mx-auto px-6 py-16 print:max-w-none print:py-8 print:px-0">
          <div className="grid md:grid-cols-2 gap-12 print:gap-8">
            <div>
              <SectionLabel>House Rules</SectionLabel>
              <h3 className="font-display text-4xl text-[var(--color-forest)] font-light mb-6 leading-snug">
                Please Read<br />Before You Settle In
              </h3>
              <ul className="divide-y divide-[var(--color-forest)]/8">
                <Rule icon="👥" text="Maximum 14 guests. No unregistered overnight guests." />
                <Rule icon="🚭" text="No smoking indoors — anywhere in the lodge." />
                <Rule icon="🎉" text="No parties or events beyond your registered guest count." />
                <Rule icon="🔇" text="Quiet hours 10 PM – 8 AM. Neighbors are within earshot on a still night." />
                <Rule icon="🎹" text="The Steinway is a concert grand. Play it — it loves it. Handle it with respect." />
                <Rule icon="🐾" text="Dogs welcome (max 2, $35/night each). No pets on furniture or beds — ever." />
                <Rule icon="🚗" text="Dogs must not be left unattended at the property." />
                <Rule icon="🦌" text="Wildlife shares this land. Secure all food and garbage outdoors — especially at night." />
                <Rule icon="🔥" text="Fire pit: use designated firewood only. Never leave unattended." />
                <Rule icon="🚫" text="No hunting on the property." />
              </ul>
            </div>

            <div>
              <SectionLabel>Good to Know</SectionLabel>
              <h3 className="font-display text-4xl text-[var(--color-forest)] font-light mb-6 leading-snug">
                Practical<br />Notes
              </h3>
              <ul className="divide-y divide-[var(--color-forest)]/8">
                <Rule icon="📶" text="No cell service at the property. Starlink covers all your wifi needs — including inside the sauna." />
                <Rule icon="❄️" text="4WD or AWD strongly recommended November through March. Plan your drive accordingly." />
                <Rule icon="🛒" text="Nearest large grocery: Bellingham, 45 min. Small markets on Mt. Baker Hwy for forgotten items." />
                <Rule icon="⚡" text="Power and internet outages are possible in severe mountain weather. Refunds are not issued for weather events." />
                <Rule icon="🐻" text="Black bears are in the area and occasionally spotted — they are shy and will run when they sense you. Two bear spray canisters are stored outside: treat it like an airline safety demo, not a daily necessity." />
                <Rule icon="🔐" text="Lock the lodge when leaving. The smart lock code closes the door — confirm it latches." />
                <Rule icon="🧹" text="Leave it tidy: dishes done, garbage bagged. A $200 additional cleaning fee applies for excessive mess." />
              </ul>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PAGE 4 — THE LODGE
        ══════════════════════════════════════════════════════════════ */}
        <section className="print-page max-w-5xl mx-auto px-6 py-16 print:max-w-none print:py-8 print:px-0">
          <div className="grid md:grid-cols-2 gap-12 print:gap-8">
            <div>
              <SectionLabel>The Lodge</SectionLabel>
              <h3 className="font-display text-4xl text-[var(--color-forest)] font-light mb-6 leading-snug">
                Key Spaces
              </h3>

              <Space
                name="The Great Room"
                desc="The heart of the lodge. Dramatic stone fireplace, Steinway concert grand, open seating for all 14 guests. Where conversations go late, music happens, and the fire keeps everyone close. Firewood is stocked and replenished — you will never run out."
              />
              <Space
                name="The Family Lounge"
                desc="Oversized sectional, smart TV for streaming, completely separate from the Great Room. Kids can run a movie while adults hold court on the other side of the lodge. Two living areas means everyone has their own space."
              />
              <Space
                name="The Kitchen"
                desc="Fully equipped for large-group cooking — counter space, appliances, and everything you need to put a serious meal on the table. Check the cabinet under the island for mixing bowls and baking gear."
              />
              <Space
                name="Cedar Hall & Cedar Nook"
                desc="840 sq ft former garage, fully opened into a flex space. Three large rollup doors open to the outdoors. In-wall ceiling speakers. Inflatable screen for movie nights. Rustic log perimeter wall. Yoga mats arriving Summer 2026. Use it however your group needs."
              />
            </div>

            <div>
              <SectionLabel>Bedrooms</SectionLabel>
              <h3 className="font-display text-4xl text-[var(--color-forest)] font-light mb-6 leading-snug">
                Sleeping<br />Arrangements
              </h3>
              <div className="space-y-3">
                {[
                  { room: 'Primary King Suite', detail: 'Ground floor · Wood-burning fireplace · Seating area · Vanity' },
                  { room: 'King #2', detail: 'Upper floor · Forest views · Luxury linens' },
                  { room: 'King #3', detail: 'Upper floor · Forest views · Luxury linens' },
                  { room: 'King #4', detail: 'Upper floor · Forest views · Luxury linens' },
                  { room: 'Queen #1', detail: 'Ground floor · Attached half bath · Great for single-level access' },
                  { room: 'Queen #2', detail: 'Upper floor · Comfortable and charming' },
                  { room: 'Twin XL Room', detail: 'Upper floor · 2× Twin XL · Ideal for kids or extra guests' },
                ].map(({ room, detail }) => (
                  <div key={room} className="flex flex-col border-b border-[var(--color-forest)]/8 pb-3 last:border-0">
                    <span className="font-display text-base text-[var(--color-forest)]">{room}</span>
                    <span className="font-sans text-xs text-[var(--color-bark)]/60 mt-0.5">{detail}</span>
                  </div>
                ))}
              </div>
              <p className="font-sans text-xs text-[var(--color-bark)]/50 mt-4 italic">
                All bedrooms have premium mattresses, quality linens, and forested views. Extra blankets in each closet.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PAGE 5 — THE SAUNA
        ══════════════════════════════════════════════════════════════ */}
        <section className="print-page relative overflow-hidden">
          {/* Accent image — top third */}
          <div className="relative h-48 print:h-44 w-full overflow-hidden">
            <Image
              src="/images/sauna-interior.jpg"
              alt="Treehouse Sauna"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[var(--color-forest)]/50" />
            <div className="absolute bottom-6 left-6 print:left-0 print:bottom-4">
              <SectionLabel>The Signature Experience</SectionLabel>
              <h3 className="font-display text-4xl text-white font-light leading-tight">The Treehouse Sauna</h3>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-6 py-10 print:max-w-none print:py-6 print:px-0 grid md:grid-cols-2 gap-10 print:gap-8">
            <div>
              <h4 className="font-display text-xl text-[var(--color-forest)] mb-4">How to Use It</h4>
              <ol className="space-y-3">
                {[
                  'Walk the short path from the lodge — follow the lights through the trees.',
                  'Flip the power switch inside the door. Target temperature: 180–190°F.',
                  'Pre-heat takes 30–45 minutes. You can start heating it from the lodge if you know your timing.',
                  'Pour water over the rocks using the ladle for steam. Experiment with the amount.',
                  'The cold shower is just outside the door — the contrast is the whole point.',
                  'Towels and robes are provided. Hang them back up when done.',
                  'Deer often pass under the deck. Watch for them.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-display text-xl text-[var(--color-gold)] font-light shrink-0 mt-px">{i + 1}</span>
                    <span className="font-sans text-sm text-[var(--color-bark)]/80 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="font-display text-xl text-[var(--color-forest)] mb-4">Good to Know</h4>
              <ul className="space-y-3 mb-8">
                <Rule icon="🌲" text="Custom cedar construction, built entirely on-property. Slate floors and live-edge benches." />
                <Rule icon="📡" text="Starlink wifi reaches the sauna — yes, really. Full-speed internet in the treetops." />
                <Rule icon="🦌" text="Wildlife frequently passes by. Elk, deer, the occasional raccoon. Keep quiet and watch." />
                <Rule icon="❄️" text="The cold shower refills from a well — it is genuinely cold. Go slow your first round." />
                <Rule icon="🔥" text="Dual heating: floor radiant heat + traditional sauna heater. Both run automatically." />
                <Rule icon="🧖" text="Stay hydrated. Bring water bottles up with you — there's a small shelf inside." />
              </ul>

              <div className="bg-[var(--color-forest)]/8 border-l-2 border-[var(--color-gold)] pl-4 py-3">
                <p className="font-sans text-sm text-[var(--color-bark)]/80 leading-relaxed italic">
                  "The Treehouse Sauna and Cedar Hall are 200 feet apart. Train in one — recover in the other."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PAGE 6 — OUTDOORS + TRAIL MAP
        ══════════════════════════════════════════════════════════════ */}
        <section className="print-page max-w-5xl mx-auto px-6 py-16 print:max-w-none print:py-8 print:px-0">
          <div className="grid md:grid-cols-2 gap-10 print:gap-8">

            {/* Left — descriptions */}
            <div>
              <SectionLabel>The Property</SectionLabel>
              <h3 className="font-display text-4xl text-[var(--color-forest)] font-light mb-5 leading-snug">
                Outdoors &<br />On the Land
              </h3>

              <Space
                name="Fire Pit"
                desc="Firewood is provided and stocked — the owners bring down more than enough from the land each winter. You will never run low. Light it at dark, pull up the Adirondack chairs, and take your time. Never leave the fire unattended."
              />
              <Space
                name="The Lawn"
                desc="Expansive lawn for games, outdoor dining, and gatherings. Corn hole, badminton, or just room to spread out. Additional parking opens on the lawn for larger groups in dry season."
              />
              <Space
                name="Wildlife"
                desc="Deer pass beneath the sauna deck regularly — a genuine highlight. Bobcats, raccoons, bats, and eagles are all regulars. No hunting on the property."
              />

              {/* Bear note */}
              <div className="bg-[var(--color-forest)]/8 border-l-2 border-[var(--color-gold)] pl-4 py-3 mb-4">
                <p className="font-sans text-xs font-semibold text-[var(--color-forest)] mb-1">🐻 A note on black bears</p>
                <p className="font-sans text-xs text-[var(--color-bark)]/75 leading-relaxed">
                  Black bears have been spotted on and around the property over the years — Mike has seen them and on occasion shooed them off. Out of an abundance of caution, two bear spray canisters are stored outside the lodge; you&apos;re welcome to take one on the trails.
                </p>
                <p className="font-sans text-xs text-[var(--color-bark)]/75 leading-relaxed mt-2">
                  That said: black bears are categorically different from grizzlies or brown bears. They are naturally shy and will almost always flee the moment they detect a human — by sight or smell. Think of the bear spray the way you think of an airline safety demo: better to have it and not need it. For context, the 20-minute drive up to the property is statistically orders of magnitude more eventful than anything you&apos;re likely to encounter in these woods.
                </p>
              </div>

              {/* Cave photo */}
              <div className="mt-4 relative h-56 overflow-hidden">
                <Image
                  src="/images/cave.jpg"
                  alt="The Gold Mine cave entrance"
                  fill
                  className="object-cover object-center rounded-sm print:rounded-none"
                />
                <div className="absolute inset-0 bg-[var(--color-forest)]/25" />
                <p className="absolute bottom-2 left-3 font-sans text-[10px] tracking-widest uppercase text-white/80">
                  The Gold Mine
                </p>
              </div>
            </div>

            {/* Right — trail map */}
            <div>
              <h4 className="font-display text-xl text-[var(--color-forest)] mb-3">Trail Map</h4>

              {/* Map image */}
              <div className="relative w-full overflow-hidden mb-4 bg-[var(--color-cream-dark)] rounded-sm print:rounded-none" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/trails.jpg"
                  alt="Property trail map"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Trail legend */}
              <div className="space-y-2 mb-5">
                {[
                  { color: 'bg-green-600',  label: 'Green Trail', desc: 'Up the hill to old-growth forest. Starts on the property, continues onto state land. The big trees are up here — worth the climb.' },
                  { color: 'bg-blue-500',   label: 'Blue Trail',  desc: 'A pleasant loop trail that circles the property. Easier grade — good for a quick explore or with kids.' },
                  { color: 'bg-yellow-500', label: 'Yellow Trail', desc: 'Leads to the Gold Mine cave. Historic 1900s entrance, solid rock, natural freshwater spring inside. Follow yellow to find it.' },
                ].map(({ color, label, desc }) => (
                  <div key={label} className="flex items-start gap-2">
                    <div className={`w-3 h-3 rounded-full ${color} shrink-0 mt-1`} />
                    <div>
                      <span className="font-sans text-xs font-semibold text-[var(--color-forest)]">{label} — </span>
                      <span className="font-sans text-xs text-[var(--color-bark)]/70">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--color-forest)]/8 border-l-2 border-[var(--color-gold)] pl-3 py-2">
                <p className="font-sans text-xs text-[var(--color-bark)]/75 leading-relaxed">
                  <strong>Wear good shoes.</strong> Green trail is real hiking — not a manicured path. The property connects to approximately 91 acres total. Bring water and a sense of adventure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PAGE 7 — LOCAL AREA GUIDE
        ══════════════════════════════════════════════════════════════ */}
        <section className="print-page max-w-5xl mx-auto px-6 py-16 print:max-w-none print:py-8 print:px-0">
          <SectionLabel>Explore the Area</SectionLabel>
          <h3 className="font-display text-4xl text-[var(--color-forest)] font-light mb-6 leading-snug">
            Local Guide
          </h3>

          <div className="grid md:grid-cols-3 gap-8 print:gap-6">

            {/* Distances */}
            <div className="md:col-span-1">
              <h4 className="font-display text-lg text-[var(--color-forest)] mb-3">Distances</h4>
              <DistRow place="Joe's Fine Coffee" time="10 min" />
              <DistRow place="Silver Lake Park" time="5 min" />
              <DistRow place="Wake 'n Bakery" time="20 min" />
              <DistRow place="North Fork Brewery" time="20 min" />
              <DistRow place="Glacier, WA" time="20 min" />
              <DistRow place="Canadian border (Sumas)" time="25 min" />
              <DistRow place="Abbotsford, BC" time="~30 min" />
              <DistRow place="Bellingham" time="45 min" />
              <DistRow place="Mt. Baker Ski Area" time="52 min" />
              <DistRow place="Vancouver, BC" time="~90 min" />

              <div className="mt-5 bg-amber-50 border-l-2 border-amber-400 pl-3 py-2">
                <p className="font-sans text-[10px] font-semibold text-amber-800 mb-1">🇨🇦 Canada — Bring Passports</p>
                <p className="font-sans text-xs text-amber-900/80 leading-relaxed">
                  Everyone in your group needs a valid passport. The Sumas/Abbotsford crossing is a short, easy drive — check wait times first at{' '}
                  <span className="font-medium">bwt.cbp.gov</span>.
                </p>
              </div>
            </div>

            {/* Highlights — 2 cols */}
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-4 print:gap-y-3">

              <div>
                <h4 className="font-display text-base text-[var(--color-forest)] mb-0.5">
                  Joe&apos;s Fine Coffee
                </h4>
                <p className="font-sans text-[10px] text-[var(--color-gold)] mb-1">Maple Falls · 10 min · joesfinecoffee.com</p>
                <p className="font-sans text-xs text-[var(--color-bark)]/75 leading-relaxed">
                  Superb espresso, drip coffee, sandwiches, and pastries. Your closest coffee stop — right down the road in Maple Falls. Cozy, welcoming, local.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base text-[var(--color-forest)] mb-0.5">
                  Wake &apos;n Bakery
                </h4>
                <p className="font-sans text-[10px] text-[var(--color-gold)] mb-1">Glacier · 20 min · (360) 599-1658</p>
                <p className="font-sans text-xs text-[var(--color-bark)]/75 leading-relaxed">
                  6903 Bourne St, Glacier. Open daily 7 am – 5 pm (summer). Coffee, baked goods, and serious Mt. Baker energy. Stop here on the way up to Baker. wakenbakeryglacier.com
                </p>
              </div>

              <div>
                <h4 className="font-display text-base text-[var(--color-forest)] mb-0.5">
                  North Fork Brewery
                </h4>
                <p className="font-sans text-[10px] text-[var(--color-gold)] mb-1">Deming · 20 min · (360) 599-2337</p>
                <p className="font-sans text-xs text-[var(--color-bark)]/75 leading-relaxed">
                  6186 Mt. Baker Hwy, Deming. Open daily noon – 9 pm. Legendary pizza, house-brewed craft beer, genuine mountain-village ambience. A must-visit. northforkbrewery.com
                </p>
              </div>

              <div>
                <h4 className="font-display text-base text-[var(--color-forest)] mb-0.5">
                  Silver Lake Park
                </h4>
                <p className="font-sans text-[10px] text-[var(--color-gold)] mb-1">Maple Falls · 5 min</p>
                <p className="font-sans text-xs text-[var(--color-bark)]/75 leading-relaxed">
                  Kayaking, fishing, swimming, and picnicking right in the neighborhood. Calm, clear, beautiful. Great morning outing — bring paddleboards or rent on-site.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base text-[var(--color-forest)] mb-0.5">
                  Cactus Club Café — Abbotsford, BC
                </h4>
                <p className="font-sans text-[10px] text-[var(--color-gold)] mb-1">~30 min · cactusclubcafe.com</p>
                <p className="font-sans text-xs text-[var(--color-bark)]/75 leading-relaxed">
                  34650 Delair Rd, Abbotsford. Upscale Canadian casual — great cocktails, excellent food. Cross at Sumas (25 min), it&apos;s a short drive once over the border. <strong>Everyone needs a passport.</strong>
                </p>
              </div>

              <div>
                <h4 className="font-display text-base text-[var(--color-forest)] mb-0.5">
                  Mt. Baker — 52 Min
                </h4>
                <p className="font-sans text-[10px] text-[var(--color-gold)] mb-1">SR-542 east from Maple Falls</p>
                <p className="font-sans text-xs text-[var(--color-bark)]/75 leading-relaxed">
                  Deep powder and uncrowded runs in winter. Summer wildflower hikes and alpine trails equally spectacular. One of the most scenic drives in Washington — allow time to stop.
                </p>
              </div>

              <div className="sm:col-span-2">
                <h4 className="font-display text-base text-[var(--color-forest)] mb-0.5">
                  Bellingham — 45 Min
                </h4>
                <p className="font-sans text-xs text-[var(--color-bark)]/75 leading-relaxed">
                  Full services — Costco, grocery stores, waterfront, Whatcom Falls Park, breweries, and restaurants. Your main supply run for anything substantial.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PAGE 8 — CONTACTS + GETTING AROUND
        ══════════════════════════════════════════════════════════════ */}
        <section className="print-page max-w-5xl mx-auto px-6 py-16 print:max-w-none print:py-8 print:px-0">
          <div className="grid md:grid-cols-2 gap-12 print:gap-8">
            <div>
              <SectionLabel>Contacts</SectionLabel>
              <h3 className="font-display text-4xl text-[var(--color-forest)] font-light mb-6 leading-snug">
                Emergency &<br />Owner Info
              </h3>

              <div className="space-y-4 mb-8">
                <div className="border border-[var(--color-forest)]/15 p-4 bg-white/50">
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-1">Emergency</p>
                  <p className="font-display text-2xl text-[var(--color-forest)] font-medium">911</p>
                  <p className="font-sans text-xs text-[var(--color-bark)]/60 mt-1">Cell service is limited at the property — use Starlink wifi calling if available</p>
                </div>
                <div className="border border-[var(--color-forest)]/15 p-4 bg-white/50">
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-1">Nearest Hospital</p>
                  <p className="font-display text-lg text-[var(--color-forest)] font-light">PeaceHealth St. Joseph Medical Center</p>
                  <p className="font-sans text-xs text-[var(--color-bark)]/60 mt-1">2901 Squalicum Pkwy, Bellingham · ~45 min</p>
                </div>
                <div className="border border-[var(--color-forest)]/15 p-4 bg-white/50">
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-1">Your Hosts</p>
                  <p className="font-display text-xl text-[var(--color-forest)] font-light">Mike &amp; Angie Hughes</p>
                  <p className="font-sans text-xs text-[var(--color-bark)]/60 mt-1">mike@stayredmountain.com</p>
                  <p className="font-sans text-sm text-[var(--color-forest)] font-medium mt-1">360-410-8576</p>
                  <p className="font-sans text-xs text-[var(--color-bark)]/60 mt-0.5">Live adjacent — genuinely available if you need anything</p>
                </div>
                <div className="border border-[var(--color-forest)]/15 p-4 bg-white/50">
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-1">Poison Control</p>
                  <p className="font-display text-xl text-[var(--color-forest)] font-light">1-800-222-1222</p>
                </div>
              </div>
            </div>

            <div>
              <SectionLabel>Getting Around</SectionLabel>
              <h3 className="font-display text-4xl text-[var(--color-forest)] font-light mb-6 leading-snug">
                On the Road
              </h3>

              <ul className="space-y-4 mb-8">
                <Rule icon="🚗" text="A car is required — there is no public transportation in Maple Falls." />
                <Rule icon="📶" text="Cell service is limited in Maple Falls and along portions of the Mt. Baker Highway. Download offline maps before you leave. Signal returns near the ski area and along some stretches of the highway." />
                <Rule icon="⛽" text="Fill up in Bellingham or Sumas before driving up the highway. Gas options thin out past Glacier." />
                <Rule icon="🛂" text="Crossing to Canada: Sumas, WA / Abbotsford, BC crossing is 25 min away. Every person in your group needs a valid passport. Check border wait times at bwt.cbp.gov." />
                <Rule icon="🏔️" text="Mt. Baker Highway (SR-542) is one of the most beautiful drives in Washington — allow extra time to stop." />
              </ul>

              <div className="bg-[var(--color-forest)] text-[var(--color-cream)] p-4">
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-2">Weather Reminder</p>
                <p className="font-sans text-sm leading-relaxed">
                  Mountain rainforest climate — prepare for all conditions. Summer can be genuinely hot. Spring and fall bring heavy rain. Winter brings snow and ice. Always dress in layers and check conditions before heading up the mountain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PAGE 9 — THANK YOU / BACK COVER
        ══════════════════════════════════════════════════════════════ */}
        <section className="print-page relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/great-room.jpg"
              alt=""
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[var(--color-forest)]/80" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 print:max-w-none print:py-10 print:px-0 flex flex-col items-center justify-center min-h-[70vh] print:min-h-[11in] text-center text-white">

            <Image
              src="/images/logo.png"
              alt="Red Mountain Retreat"
              width={80}
              height={80}
              className="brightness-0 invert mx-auto mb-8"
            />

            <SectionLabel>From Our Family to Yours</SectionLabel>
            <h3 className="font-display text-5xl print:text-4xl font-light mb-6 leading-snug text-white">
              Thank You for Staying<br />at Red Mountain Retreat
            </h3>

            <div className="flex items-center justify-center gap-5 mb-8">
              <div className="h-px w-16 bg-[var(--color-gold)]/60" />
              <p className="font-display text-lg font-light tracking-[0.2em] text-white/80">
                Restore · Reconnect · Rise
              </p>
              <div className="h-px w-16 bg-[var(--color-gold)]/60" />
            </div>

            <p className="font-sans text-white/75 max-w-md mb-10 leading-relaxed">
              We hope this place gave you exactly what you came here for — rest, connection, adventure, or all three. You're always welcome back.
            </p>

            {/* QR Code + links */}
            <div className="flex flex-col sm:flex-row items-center gap-10 mb-10">
              <div className="text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={QR_URL}
                  alt="QR Code — stayredmountain.com/manual"
                  width={160}
                  height={160}
                  className="mx-auto mb-3"
                />
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/50">Digital Manual</p>
                <p className="font-sans text-xs text-[var(--color-gold)]">stayredmountain.com/manual</p>
              </div>

              <div className="text-left space-y-3">
                <div>
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-0.5">Book Your Next Stay</p>
                  <p className="font-sans text-sm text-white/80">stayredmountain.com/book</p>
                  <p className="font-sans text-xs text-white/50">Direct booking — no platform fees</p>
                </div>
                <div>
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-0.5">Contact the Hosts</p>
                  <p className="font-sans text-sm text-white/80">mike@stayredmountain.com</p>
                </div>
                <div>
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-0.5">Instagram</p>
                  <p className="font-sans text-sm text-white/80">@stayredmountain</p>
                </div>
              </div>
            </div>

            <p className="font-sans text-white/30 text-[10px] tracking-widest uppercase">
              Red Mountain Retreat · Maple Falls, Washington · Mt. Baker Country
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
