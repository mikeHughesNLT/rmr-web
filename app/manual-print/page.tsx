import type { Metadata } from 'next';
import Image from 'next/image';
import PrintButton from './PrintButton';

export const metadata: Metadata = {
  title: 'Guest Manual (Print) — Red Mountain Retreat',
  robots: { index: false, follow: false },
};

const QR_URL =
  'https://api.qrserver.com/v1/create-qr-code/?size=200x200' +
  '&data=' + encodeURIComponent('https://stayredmountain.com/manual') +
  '&color=1B3A2D&bgcolor=ffffff&margin=2';

// ─── tiny helpers ─────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[8px] tracking-[0.4em] uppercase text-[#C8963E] mb-1.5">
      {children}
    </p>
  );
}

function SectionHead({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <div className="mb-5">
      <Label>{label}</Label>
      <h3 className="font-display text-[2rem] font-light text-[#1B3A2D] leading-tight">{title}</h3>
      <div className="w-8 h-px bg-[#C8963E] mt-3" />
    </div>
  );
}

function Rule({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="flex items-start gap-2.5 py-1.5 border-b border-[#D8CDB8] last:border-0">
      <span className="shrink-0 text-sm mt-px">{icon}</span>
      <span className="font-sans text-[10.5px] text-[#4A2C17] leading-snug">{text}</span>
    </li>
  );
}

function Space({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="mb-4 avoid-break">
      <p className="font-display text-base text-[#1B3A2D] font-medium mb-0.5">{name}</p>
      <p className="font-sans text-[10.5px] text-[#4A2C17] leading-relaxed">{desc}</p>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F7F2E8] border-l-2 border-[#C8963E] pl-3 py-2.5 mb-4">
      {children}
    </div>
  );
}

export default function ManualPrintPage() {
  return (
    <>
      {/* ─── Styles ──────────────────────────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media screen {
          .print-outer {
            max-width: 816px;
            margin: 0 auto;
            background: white;
            box-shadow: 0 4px 24px rgba(0,0,0,0.12);
          }
          .print-section {
            padding: 48px 62px;
            border-bottom: 2px dashed rgba(200,150,62,0.2);
          }
          .print-section:last-of-type { border-bottom: none; }
        }
        @media print {
          @page        { size: letter portrait; margin: 0.65in; }
          @page :first { margin: 0; }
          header, footer, .no-print { display: none !important; }
          body { background: white !important; }
          .print-outer  { max-width: none !important; margin: 0 !important; padding: 0 !important; box-shadow: none !important; }
          .print-section { padding: 0 !important; border: none !important; }
          .print-break  { page-break-before: always; break-before: page; }
          .avoid-break  { page-break-inside: avoid; break-inside: avoid; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}} />

      {/* ─── Screen-only top bar ─────────────────────────────────────────────── */}
      <div className="no-print sticky top-0 z-50 bg-[#1B3A2D] px-6 py-3 flex items-center justify-between">
        <div>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#C8963E]">Print Preview</p>
          <p className="font-sans text-sm text-white font-medium">Guest Manual — Red Mountain Retreat</p>
        </div>
        <PrintButton />
      </div>

      {/* ─── Page wrapper ────────────────────────────────────────────────────── */}
      <div className="print-outer">

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 1 — COVER  (full bleed, no margins)
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="print-section relative h-screen min-h-[1056px] overflow-hidden flex items-center justify-center">
          <Image
            src="/images/exterior-02.jpg"
            alt="Red Mountain Retreat"
            fill
            className="object-cover object-[center_40%]"
            priority
          />
          <div className="absolute inset-0 bg-[#1B3A2D] opacity-70" />

          {/* Center content */}
          <div className="relative z-10 text-center text-white px-8">
            <Image
              src="/images/logo.png"
              alt="Red Mountain Retreat"
              width={90}
              height={90}
              className="brightness-0 invert mx-auto mb-6"
            />
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#C8963E] mb-4">
              Maple Falls, Washington · Mt. Baker Country
            </p>
            <h1 className="font-display text-[5.5rem] font-light leading-[0.9] mb-5 text-white">
              Red Mountain<br />Retreat
            </h1>
            <div className="flex items-center justify-center gap-5 mb-5">
              <div className="h-px w-12 bg-[#C8963E]" />
              <p className="font-display text-xl font-light tracking-[0.2em] text-white opacity-85">
                Restore · Reconnect · Rise
              </p>
              <div className="h-px w-12 bg-[#C8963E]" />
            </div>
            <h2 className="font-display text-2xl font-light text-white opacity-80 tracking-[0.15em]">
              Guest Manual
            </h2>
          </div>

          {/* Bottom QR strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#1B3A2D] px-10 py-5 flex items-center gap-6 z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={QR_URL} alt="QR code" width={64} height={64} />
            <div>
              <p className="font-sans text-[8px] tracking-[0.35em] uppercase text-[#C8963E] mb-0.5">Digital Manual</p>
              <p className="font-sans text-sm text-white font-medium">stayredmountain.com/manual</p>
              <p className="font-sans text-xs text-white opacity-60 mt-0.5">Password: <span className="opacity-90 font-medium">guest</span></p>
            </div>
            <div className="ml-auto text-right">
              <p className="font-sans text-[8px] tracking-[0.35em] uppercase text-[#C8963E] mb-0.5">Need help?</p>
              <p className="font-sans text-sm text-white">mike@stayredmountain.com</p>
              <p className="font-sans text-xs text-white opacity-70">360-410-8576</p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 2 — WELCOME + QUICK REFERENCE
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="print-section print-break">

          <SectionHead label="Welcome" title={<>Welcome to Your<br />Mountain Home</>} />

          <p className="font-sans text-[11px] text-[#4A2C17] leading-relaxed max-w-2xl mb-3">
            We're so glad you're here. This house has been in my family for fifty years — built from cedar milled on the property, with log walls that have held a lot of good people and good stories. We've updated everything you see, but the bones are original, and the land is exactly as it always was.
          </p>
          <p className="font-sans text-[11px] text-[#4A2C17] leading-relaxed max-w-2xl mb-2">
            Angie and I live adjacent to the property and are always reachable, but you have full privacy here. The 25 acres and the trails are yours. Enjoy the sauna. Play the Steinway. Sit by the fire. This place is best experienced slowly.
          </p>
          <p className="font-sans text-[10px] text-[#4A2C17] opacity-60 italic mb-8">— Mike & Angie Hughes</p>

          {/* Quick-ref grid */}
          <Label>Your Stay — At a Glance</Label>
          <div className="grid grid-cols-4 gap-3 mb-5">
            {[
              { label: 'Check-In',   value: '4:00 PM',  sub: 'Smart lock — code in pre-arrival message' },
              { label: 'Check-Out',  value: '11:00 AM', sub: 'Please leave by 11 am' },
              { label: 'Max Guests', value: '14',       sub: 'Registered guests only' },
              { label: 'WiFi',       value: 'Starlink', sub: 'Network: redmountain · PW: rise42day' },
            ].map(({ label, value, sub }) => (
              <div key={label} className="border border-[#1B3A2D] p-3 avoid-break">
                <p className="font-sans text-[7.5px] tracking-[0.35em] uppercase text-[#C8963E] mb-1">{label}</p>
                <p className="font-display text-2xl font-light text-[#1B3A2D] leading-tight">{value}</p>
                {sub && <p className="font-sans text-[9px] text-[#4A2C17] mt-1 leading-snug">{sub}</p>}
              </div>
            ))}
          </div>

          {/* Door code + contact bar */}
          <div className="bg-[#1B3A2D] text-white px-5 py-4 flex gap-8">
            <div className="flex-1">
              <p className="font-sans text-[7.5px] tracking-[0.35em] uppercase text-[#C8963E] mb-1">Door Code</p>
              <p className="font-display text-base font-light">Sent in your pre-arrival message (24–48 hrs before check-in)</p>
            </div>
            <div className="border-l border-white border-opacity-20 pl-8 flex-1">
              <p className="font-sans text-[7.5px] tracking-[0.35em] uppercase text-[#C8963E] mb-1">Your Hosts</p>
              <p className="font-display text-base font-light">Mike & Angie Hughes</p>
              <p className="font-sans text-[10px] opacity-70 mt-0.5">mike@stayredmountain.com · 360-410-8576 · Live adjacent</p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 3 — HOUSE RULES + PRACTICAL NOTES
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="print-section print-break">
          <div className="grid grid-cols-2 gap-10">

            <div>
              <SectionHead label="House Rules" title={<>Please Read<br />Before You Settle In</>} />
              <ul>
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
                <Rule icon="🧹" text="Leave it tidy: dishes done, garbage bagged. A $200 additional cleaning fee applies for excessive mess." />
              </ul>
            </div>

            <div>
              <SectionHead label="Good to Know" title={<>Practical<br />Notes</>} />
              <ul>
                <Rule icon="📶" text="No cell service at the property. Starlink covers all your wifi needs — including inside the sauna." />
                <Rule icon="❄️" text="4WD or AWD strongly recommended November through March. Plan your drive accordingly." />
                <Rule icon="🛒" text="Nearest large grocery: Bellingham, 45 min. Small markets on Mt. Baker Hwy for forgotten items." />
                <Rule icon="⚡" text="Power and internet outages are possible in severe mountain weather. Refunds are not issued for weather events." />
                <Rule icon="🔐" text="Lock the lodge when leaving. The smart lock code closes the door — confirm it latches." />
              </ul>

              <div className="mt-5 avoid-break">
                <InfoBox>
                  <p className="font-sans text-[10px] font-semibold text-[#1B3A2D] mb-1">🐻 A note on black bears</p>
                  <p className="font-sans text-[10px] text-[#4A2C17] leading-relaxed">
                    Black bears have been spotted on and around the property. Two bear spray canisters are stored outside the lodge — take one on the trails if you like. Black bears are naturally shy and will almost always flee the moment they detect a human. Think of the bear spray the way you think of an airline safety demo: better to have it and not need it.
                  </p>
                </InfoBox>
              </div>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 4 — THE LODGE + BEDROOMS
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="print-section print-break">
          <div className="grid grid-cols-2 gap-10">

            <div>
              <SectionHead label="The Lodge" title="Key Spaces" />
              <Space
                name="The Great Room"
                desc="Dramatic stone fireplace, Steinway concert grand, open seating for all 14 guests. Where conversations go late, music happens, and the fire keeps everyone close. Firewood is stocked and replenished — you will never run out."
              />
              <Space
                name="The Family Lounge"
                desc="Oversized sectional, smart TV for streaming, completely separate from the Great Room. Two living areas means everyone has their own space."
              />
              <Space
                name="The Kitchen"
                desc="Fully equipped for large-group cooking — counter space, appliances, and everything you need to put a serious meal on the table. Check the cabinet under the island for mixing bowls and baking gear."
              />
              <Space
                name="Cedar Hall & Cedar Nook"
                desc="840 sq ft flex space. Three rollup doors open to the outdoors. In-wall ceiling speakers. Inflatable screen for movie nights. Rustic log perimeter wall. Use it however your group needs."
              />
            </div>

            <div>
              <SectionHead label="Bedrooms" title={<>Sleeping<br />Arrangements</>} />
              <div className="space-y-2.5">
                {[
                  { room: 'Primary King Suite', detail: 'Ground floor · Wood-burning fireplace · Seating area · Vanity' },
                  { room: 'King #2',            detail: 'Upper floor · Forest views · Luxury linens' },
                  { room: 'King #3',            detail: 'Upper floor · Forest views · Luxury linens' },
                  { room: 'King #4',            detail: 'Upper floor · Forest views · Luxury linens' },
                  { room: 'Queen #1',           detail: 'Ground floor · Attached half bath · Great for single-level access' },
                  { room: 'Queen #2',           detail: 'Upper floor · Comfortable and charming' },
                  { room: 'Twin XL Room',       detail: 'Upper floor · 2× Twin XL · Ideal for kids or extra guests' },
                ].map(({ room, detail }) => (
                  <div key={room} className="pb-2.5 border-b border-[#D8CDB8] last:border-0 avoid-break">
                    <p className="font-display text-[15px] text-[#1B3A2D] font-medium">{room}</p>
                    <p className="font-sans text-[10px] text-[#4A2C17] opacity-70 mt-0.5">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="font-sans text-[9.5px] text-[#4A2C17] opacity-50 mt-3 italic">
                All bedrooms have premium mattresses, quality linens, and forested views. Extra blankets in each closet.
              </p>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 5 — THE SAUNA
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="print-section print-break">

          <SectionHead label="The Signature Experience" title="The Treehouse Sauna" />

          <div className="grid grid-cols-2 gap-10">

            <div>
              <p className="font-sans text-[10px] font-semibold text-[#1B3A2D] mb-3">How to Use It</p>
              <ol className="space-y-2.5">
                {[
                  'Walk the short path from the lodge — follow the lights through the trees.',
                  'Flip the power switch inside the door. Target temperature: 180–190°F.',
                  'Pre-heat takes 30–45 minutes. You can start heating from the lodge if you know your timing.',
                  'Pour water over the rocks using the ladle for steam. Experiment with the amount.',
                  'The cold shower is just outside the door — the contrast is the whole point.',
                  'Towels and robes are provided. Hang them back up when done.',
                  'Deer often pass under the deck. Watch for them.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 avoid-break">
                    <span className="font-display text-lg text-[#C8963E] font-light shrink-0">{i + 1}</span>
                    <span className="font-sans text-[10.5px] text-[#4A2C17] leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="font-sans text-[10px] font-semibold text-[#1B3A2D] mb-3">Good to Know</p>
              <ul className="mb-6">
                <Rule icon="🌲" text="Custom cedar construction, built entirely on-property. Slate floors and live-edge benches." />
                <Rule icon="📡" text="Starlink wifi reaches the sauna — yes, really. Full-speed internet in the treetops." />
                <Rule icon="🦌" text="Wildlife frequently passes by. Elk, deer, the occasional raccoon. Keep quiet and watch." />
                <Rule icon="❄️" text="The cold shower refills from a well — it is genuinely cold. Go slow your first round." />
                <Rule icon="🔥" text="Dual heating: floor radiant heat + traditional sauna heater. Both run automatically." />
                <Rule icon="🧖" text="Stay hydrated. Bring water bottles up with you — there's a small shelf inside." />
              </ul>

              <InfoBox>
                <p className="font-sans text-[10.5px] text-[#4A2C17] leading-relaxed italic">
                  "The Treehouse Sauna and Cedar Hall are 200 feet apart. Train in one — recover in the other."
                </p>
              </InfoBox>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 6 — OUTDOORS + TRAIL MAP
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="print-section print-break">
          <div className="grid grid-cols-2 gap-10">

            <div>
              <SectionHead label="The Property" title={<>Outdoors &<br />On the Land</>} />

              <div className="mb-4 avoid-break">
                <p className="font-display text-base text-[#1B3A2D] font-medium mb-2">The Land</p>
                <p className="font-sans text-[10.5px] text-[#4A2C17] leading-relaxed mb-3">
                  Owned collectively by Mike and Angie Hughes and Mike's sister, Dr. Laura Fox — approximately 90 acres across three contiguous parcels.
                </p>
                <div className="space-y-2.5">
                  {[
                    { dot: 'bg-[#C8963E]', title: '25 acres — Main grounds', sub: '(exclusively yours)', desc: 'The lodge, Cedar Hall, sauna, fire pit, and lawn. Complete privacy during your stay.' },
                    { dot: 'bg-green-700',  title: '20 acres — Northern trails', sub: '(open to all)', desc: 'Hand-built trail network through the northern forest. Yours to explore freely.' },
                    { dot: 'bg-blue-500',   title: '~45 acres — Up Red Mountain', sub: '(open to all)', desc: 'Rises toward Red Mountain and connects to adjacent state land. Old-growth forest.' },
                  ].map(({ dot, title, sub, desc }) => (
                    <div key={title} className="flex items-start gap-2 avoid-break">
                      <div className={`w-2 h-2 rounded-full ${dot} shrink-0 mt-1`} />
                      <div>
                        <p className="font-sans text-[10px] font-semibold text-[#1B3A2D]">{title} <span className="font-normal text-[#4A2C17] opacity-60">{sub}</span></p>
                        <p className="font-sans text-[10px] text-[#4A2C17] opacity-75 leading-relaxed mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Space name="Fire Pit" desc="Firewood provided and replenished — you will never run low. Pull up the Adirondack chairs and take your time. Never leave unattended." />
              <Space name="The Lawn" desc="Expansive lawn for games and gatherings. Corn hole, badminton. Additional parking on the lawn for larger groups in dry season." />
              <Space name="Wildlife" desc="Deer pass beneath the sauna deck regularly. Bobcats, raccoons, bats, and eagles are all regulars. No hunting on the property." />
            </div>

            <div>
              <SectionHead label="Trails" title="Trail Map" />

              {/* Trail map image */}
              <div className="relative w-full mb-4 bg-[#F7F2E8] avoid-break" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/trails.jpg"
                  alt="Property trail map"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Legend */}
              <div className="space-y-3 mb-5">
                {[
                  { color: 'bg-green-700',  label: 'Green Trail',  desc: 'Up the hill to old-growth forest. Real hiking — the big trees are up here. Worth the climb.' },
                  { color: 'bg-blue-500',   label: 'Blue Trail',   desc: 'A loop around the property. Easier grade — good for a quick explore or with kids.' },
                  { color: 'bg-yellow-500', label: 'Yellow Trail', desc: 'Leads to the Gold Mine cave. Historic 1900s entrance drilled into bedrock, natural spring inside. Follow yellow.' },
                ].map(({ color, label, desc }) => (
                  <div key={label} className="flex items-start gap-2 avoid-break">
                    <div className={`w-3 h-3 rounded-full ${color} shrink-0 mt-0.5`} />
                    <div>
                      <span className="font-sans text-[10px] font-semibold text-[#1B3A2D]">{label} — </span>
                      <span className="font-sans text-[10px] text-[#4A2C17] opacity-75">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <InfoBox>
                <p className="font-sans text-[10px] text-[#4A2C17] leading-relaxed">
                  <strong>Wear good shoes.</strong> Green trail is real hiking — not a manicured path. Bring water and a sense of adventure. The property connects to ~91 acres total.
                </p>
              </InfoBox>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 7 — LOCAL GUIDE
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="print-section print-break">
          <SectionHead label="Explore the Area" title="Local Guide" />

          <div className="grid grid-cols-3 gap-8">

            {/* Distances */}
            <div>
              <p className="font-sans text-[10px] font-semibold text-[#1B3A2D] mb-3">Distances</p>
              {[
                { place: "Joe's Fine Coffee",       time: '10 min' },
                { place: 'Silver Lake Park',         time: '5 min' },
                { place: "Wake 'n Bakery",           time: '20 min' },
                { place: 'North Fork Brewery',       time: '20 min' },
                { place: 'Glacier, WA',              time: '20 min' },
                { place: 'Canadian border (Sumas)',  time: '25 min' },
                { place: 'Abbotsford, BC',           time: '~30 min' },
                { place: 'Bellingham',               time: '45 min' },
                { place: 'Mt. Baker Ski Area',       time: '52 min' },
                { place: 'Vancouver, BC',            time: '~90 min' },
              ].map(({ place, time }) => (
                <div key={place} className="flex justify-between items-center py-1.5 border-b border-[#D8CDB8] last:border-0">
                  <span className="font-sans text-[10px] text-[#4A2C17]">{place}</span>
                  <span className="font-sans text-[9.5px] text-[#C8963E] font-medium">{time}</span>
                </div>
              ))}
              <div className="mt-4 bg-amber-50 border-l-2 border-amber-400 pl-3 py-2">
                <p className="font-sans text-[9px] font-semibold text-amber-800 mb-1">🇨🇦 Canada — Bring Passports</p>
                <p className="font-sans text-[9px] text-amber-900 leading-relaxed">
                  Valid passport required for everyone. Sumas/Abbotsford crossing is a short, easy drive — check wait times at bwt.cbp.gov.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="col-span-2 grid grid-cols-2 gap-x-6 gap-y-4">
              {[
                { name: "Joe's Fine Coffee",   meta: 'Maple Falls · 10 min', desc: "Superb espresso, drip coffee, sandwiches, and pastries. Your closest coffee stop — right down the road in Maple Falls." },
                { name: "Wake 'n Bakery",      meta: 'Glacier · 20 min',   desc: '6903 Bourne St, Glacier. Open 7am–5pm (summer). Coffee, baked goods, and serious Mt. Baker energy.' },
                { name: 'North Fork Brewery',  meta: 'Deming · 20 min',    desc: '6186 Mt. Baker Hwy. Open daily noon–9pm. Legendary pizza, house-brewed craft beer. A must-visit.' },
                { name: 'Silver Lake Park',    meta: 'Maple Falls · 5 min', desc: 'Kayaking, fishing, swimming, and picnicking right in the neighborhood. Great morning outing.' },
                { name: 'Cactus Club Café — Abbotsford, BC', meta: '~30 min', desc: '34650 Delair Rd, Abbotsford. Upscale casual — great cocktails, excellent food. Everyone needs a passport.' },
                { name: 'Mt. Baker',           meta: 'SR-542 east · 52 min', desc: 'Deep powder in winter, wildflower hikes in summer. One of the most scenic drives in Washington.' },
              ].map(({ name, meta, desc }) => (
                <div key={name} className="avoid-break">
                  <p className="font-display text-[14px] text-[#1B3A2D] font-medium mb-0.5">{name}</p>
                  <p className="font-sans text-[8.5px] text-[#C8963E] mb-1">{meta}</p>
                  <p className="font-sans text-[10px] text-[#4A2C17] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 8 — CONTACTS + GETTING AROUND
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="print-section print-break">
          <div className="grid grid-cols-2 gap-10">

            <div>
              <SectionHead label="Contacts" title={<>Emergency &<br />Owner Info</>} />
              <div className="space-y-3">
                {[
                  { label: 'Emergency',          value: '911',                sub: 'Cell service is limited — use Starlink wifi calling if available' },
                  { label: 'Nearest Hospital',   value: 'PeaceHealth St. Joseph', sub: '2901 Squalicum Pkwy, Bellingham · ~45 min' },
                  { label: 'Your Hosts',         value: 'Mike & Angie Hughes', sub: 'mike@stayredmountain.com · 360-410-8576 · Live adjacent' },
                  { label: 'Poison Control',     value: '1-800-222-1222',     sub: '' },
                ].map(({ label, value, sub }) => (
                  <div key={label} className="border border-[#D8CDB8] p-3 avoid-break">
                    <p className="font-sans text-[7.5px] tracking-[0.35em] uppercase text-[#C8963E] mb-1">{label}</p>
                    <p className="font-display text-xl text-[#1B3A2D] font-light">{value}</p>
                    {sub && <p className="font-sans text-[9.5px] text-[#4A2C17] opacity-60 mt-0.5">{sub}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHead label="Getting Around" title={<>On the<br />Road</>} />
              <ul className="mb-6">
                <Rule icon="🚗" text="A car is required — there is no public transportation in Maple Falls." />
                <Rule icon="📶" text="Cell service is limited in Maple Falls and along portions of the Mt. Baker Highway. Download offline maps before you leave." />
                <Rule icon="⛽" text="Fill up in Bellingham or Sumas before driving up the highway. Gas options thin out past Glacier." />
                <Rule icon="🛂" text="Crossing to Canada: Sumas/Abbotsford crossing is 25 min away. Every person needs a valid passport. Check wait times at bwt.cbp.gov." />
                <Rule icon="🏔️" text="Mt. Baker Highway (SR-542) is one of the most beautiful drives in Washington — allow extra time to stop." />
              </ul>

              <div className="bg-[#1B3A2D] text-white p-4">
                <p className="font-sans text-[7.5px] tracking-[0.35em] uppercase text-[#C8963E] mb-2">Weather Reminder</p>
                <p className="font-sans text-[10.5px] leading-relaxed text-white opacity-90">
                  Mountain rainforest climate — prepare for all conditions. Summer can be genuinely hot. Spring and fall bring heavy rain. Winter brings snow and ice. Always dress in layers.
                </p>
              </div>

              {/* Back-cover branding */}
              <div className="text-center mt-8 pt-8 border-t border-[#D8CDB8]">
                <Image
                  src="/images/logo.png"
                  alt="Red Mountain Retreat"
                  width={48}
                  height={48}
                  className="mx-auto mb-3 opacity-40"
                />
                <p className="font-sans text-[8px] tracking-[0.4em] uppercase text-[#C8963E] mb-1">Book Your Next Stay</p>
                <p className="font-display text-base text-[#1B3A2D] font-light">stayredmountain.com/book</p>
                <p className="font-sans text-[9px] text-[#4A2C17] opacity-50 mt-0.5">Direct booking — no platform fees</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
