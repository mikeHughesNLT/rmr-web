import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Preview page — noindex until Mike and Sasha approve going live.
export const metadata: Metadata = {
  title: "Wilderness Services — In-House Massage | Red Mountain Retreat",
  description:
    "Book an in-house massage with Sasha Lewis, a Washington licensed massage therapist, during your stay at Red Mountain Retreat.",
  robots: { index: false, follow: false },
};

const THERAPIST_NAME = "Sasha Lewis";
const LICENSE_NO = "MA00021960";

const menu = [
  { name: "1-hour massage", price: "$120", note: "One guest, one hour." },
  {
    name: "3-hour block",
    price: "$300",
    note: "A three-hour window with Sasha — great for two or three guests, one after another.",
  },
];

const locations = [
  {
    title: "The master bedroom",
    body: "Quiet, warm and private — the classic choice.",
    img: "/images/bedroom1-master-a.jpg",
  },
  {
    title: "The den bedroom",
    body: "A private main-floor room with a cozy potbelly stove — tucked away from the rest of the house.",
    img: "/images/bedroom2.jpg",
  },
  {
    title: "In the forest",
    body: "An outdoor session among the trees, weather permitting. If the weather turns, we move inside.",
    img: "/images/trails.jpg",
  },
];

const requestBody = [
  "Hi! I'd like to request a Wilderness Services massage.",
  "",
  "Name:",
  "Dates of our stay:",
  "Preferred day and time:",
  "Session (1 hour or 3-hour block):",
  "Location (master bedroom, den bedroom, or forest):",
  "Number of guests who'd like a massage:",
  "Anything Sasha should know:",
].join("\n");

const mailto =
  "mailto:mike@stayredmountain.com" +
  "?subject=" + encodeURIComponent("Wilderness Services — massage request") +
  "&body=" + encodeURIComponent(requestBody);

const faqs = [
  {
    q: "What should I bring?",
    a: "Just yourself. Sasha brings her table, linens, and oil or lotion. She'll step out while you get settled and you'll be draped throughout the session.",
  },
  {
    q: "Can more than one of us book?",
    a: "Yes. The 3-hour block is made for that — two or three guests, one after another.",
  },
  {
    q: "Can I have a massage after the sauna?",
    a: "Absolutely. Cool down after the treehouse sauna, then head to a nearby room for your session. We don't offer massage inside the hot sauna itself.",
  },
  {
    q: "Is this part of the room rate?",
    a: "No. Wilderness Services are optional and booked separately. Your stay is unchanged if you decide not to book.",
  },
];

export default function WildernessServicesPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)]">

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Wilderness Services</p>
        <h1 className="font-display text-5xl sm:text-6xl text-[var(--color-forest)] font-light leading-tight mb-6">
          Slow down. Breathe.<br />Let the mountain do its work.
        </h1>
        <p className="text-[var(--color-bark)]/70 text-xl leading-relaxed font-sans max-w-2xl mx-auto">
          After a day on the trails — or a long session in the treehouse sauna — add an in-house
          massage without ever leaving the property.
        </p>
      </section>

      {/* Hero image */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src="/images/sauna-interior.jpg"
            alt="Cedar treehouse sauna at Red Mountain Retreat"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Meet Sasha */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3 font-sans">Meet Your Therapist</p>
        <h2 className="font-display text-4xl text-[var(--color-forest)] font-light mb-2">{THERAPIST_NAME}</h2>
        <p className="font-sans text-sm text-[var(--color-bark)]/60 mb-6">
          Licensed Massage Therapist · Washington License No. {LICENSE_NO}
        </p>
        <p className="text-[var(--color-bark)]/80 text-lg leading-relaxed font-sans mb-4">
          Sasha is a licensed massage therapist based in Maple Falls, just down the road from the
          retreat. She comes to the house by request, so there&apos;s time to set the room, settle in,
          and not rush the afternoon.
        </p>
        <p className="text-[var(--color-bark)]/60 text-sm leading-relaxed font-sans">
          Sasha is an independent licensed massage therapist. Red Mountain Retreat refers interested
          guests to her and does not provide massage services. Sessions are confirmed and paid
          directly with Sasha. You can verify a Washington massage license on the{" "}
          <a
            href="https://doh.wa.gov/licenses-permits-and-certificates/provider-credential-or-facility-search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-gold)] hover:underline"
          >
            Department of Health Provider Credential Search
          </a>.
        </p>
      </section>

      {/* Menu */}
      <section className="bg-[var(--color-forest)] text-[var(--color-cream)] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3 font-sans text-center">The Menu</p>
          <h2 className="font-display text-4xl font-light mb-10 text-center">In-house massage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menu.map(m => (
              <div key={m.name} className="border border-[var(--color-cream)]/20 p-8">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display text-2xl font-light">{m.name}</h3>
                  <span className="font-display text-3xl text-[var(--color-gold)]">{m.price}</span>
                </div>
                <p className="font-sans text-sm text-[var(--color-cream)]/70 leading-relaxed">{m.note}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-[var(--color-cream)]/50 mt-6 text-center">
            Book at least 48 hours in advance. Gratuity is optional and goes directly to Sasha.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3 font-sans text-center">Where It Happens</p>
        <h2 className="font-display text-4xl text-[var(--color-forest)] font-light mb-10 text-center">Sasha comes to you</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map(l => (
            <div key={l.title} className="bg-white/40">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image src={l.img} alt={l.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-[var(--color-forest)] mb-2">{l.title}</h3>
                <p className="font-sans text-sm text-[var(--color-bark)]/70 leading-relaxed">{l.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="font-sans text-sm text-[var(--color-bark)]/70 text-center mt-8 max-w-2xl mx-auto">
          Special requests are welcome — a post-sauna session in a nearby room is a lovely way to close out the heat.
        </p>
      </section>

      {/* How to book */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="border border-[var(--color-cream-dark)] bg-white/40 p-10">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3 font-sans">How to Book</p>
          <h2 className="font-display text-3xl text-[var(--color-forest)] font-light mb-4">Request a session</h2>
          <p className="font-sans text-[var(--color-bark)]/80 leading-relaxed mb-4">
            Send us your name, stay dates, preferred day and time, session length, location, and how many
            guests would like a massage. Please request at least 48 hours ahead.
          </p>
          <p className="font-sans text-sm text-[var(--color-bark)]/60 leading-relaxed mb-8">
            A request isn&apos;t a confirmed booking. Sasha will follow up to confirm the time, walk you
            through her intake, and arrange payment directly.
          </p>
          <a
            href={mailto}
            className="inline-block bg-[var(--color-gold)] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans"
          >
            Request a Session
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl text-[var(--color-forest)] font-light mb-6">A few questions, answered</h2>
        <div className="space-y-6">
          {faqs.map(f => (
            <div key={f.q} className="border-b border-[var(--color-cream-dark)] pb-6">
              <h3 className="font-sans font-medium text-[var(--color-forest)] mb-2">{f.q}</h3>
              <p className="font-sans text-sm text-[var(--color-bark)]/70 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
        <p className="font-sans text-xs text-[var(--color-bark)]/50 mt-10 leading-relaxed">
          {THERAPIST_NAME}, Licensed Massage Therapist, Washington License No. {LICENSE_NO}, is an
          independent practitioner. Red Mountain Retreat offers this page as a referral to her practice
          and does not employ massage therapists or provide massage.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-forest)] text-center py-16 px-6">
        <h2 className="font-display text-4xl text-white font-light mb-4">Plan the whole stay</h2>
        <p className="text-[var(--color-cream)]/70 font-sans text-sm mb-8 max-w-lg mx-auto">
          Check availability and book directly — no service fees.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book"
            className="bg-[var(--color-gold)] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans">
            Check Availability
          </Link>
          <Link href="/sauna"
            className="border border-white/50 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors font-sans">
            See the Sauna
          </Link>
        </div>
      </section>

    </div>
  );
}
