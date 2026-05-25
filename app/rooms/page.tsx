import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Rooms & Spaces — Red Mountain Retreat",
  description: "7 bedrooms sleeping 14. Two main-floor suites, five upstairs bedrooms, a spiral cedar staircase, billiard room, and the great room with Steinway piano.",
};

type Room = {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  photos: { src: string; alt: string }[];
};

const mainFloor: Room[] = [
  {
    id: "master",
    label: "Main Floor · Bedroom 1",
    title: "The Master Suite",
    subtitle: "King Bed",
    description:
      "The best bedroom in the house — and it knows it. A large, private king suite on the main floor with a real wood-burning fireplace that you'll actually use. Private vanity, private ensuite bathroom, and a sliding glass door to your own outdoor deck. Step outside with your morning coffee into the forest without disturbing anyone else in the house.",
    features: [
      "King bed — premium mattress and luxury linens",
      "Real wood-burning fireplace",
      "Private ensuite bathroom",
      "Private deck — sliding glass door access",
      "Vanity and seating area",
      "Main floor — no stairs required",
    ],
    photos: [
      { src: "/images/bedroom1-master-a.jpg", alt: "Master suite — king bed, fireplace, private deck" },
      { src: "/images/bedroom1-master-b.jpg", alt: "Master suite — sitting area and vanity" },
    ],
  },
  {
    id: "den",
    label: "Main Floor · Bedroom 2",
    title: "The Den",
    subtitle: "Queen Bed · Private Half Bath · Ground Floor",
    description:
      "A warm, private retreat on the main floor — perfect for anyone who prefers not to deal with stairs. The Den has a classic Franklin potbelly stove with electric fireplace insert, a private half bath (no shared hallway, no climbing), and direct outdoor access through one of the most impressive doors on the property: a solid 3-inch thick wooden door that feels like the entrance to something old and important. This room is ideal for grandparents, guests with mobility considerations, or anyone who just wants their own corner of the house.",
    features: [
      "Queen bed — premium mattress and luxury linens",
      "Franklin potbelly stove with electric fireplace insert",
      "Private half bath (toilet + vanity — no stairs, no sharing)",
      "Direct outdoor access — solid 3\" thick wood door",
      "Main floor — fully accessible without stairs",
      "Quiet, private corner of the house",
    ],
    photos: [
      { src: "/images/bedroom2.jpg", alt: "The Den — queen bed, Franklin stove, outdoor access" },
      { src: "/images/bedroom2b.jpg", alt: "The Den — potbelly stove and private entrance" },
    ],
  },
];

const staircase = {
  title: "Two Ways Up",
  body: "The upper floor is accessible by two staircases. One is conventional. The other is anything but — a spiral staircase built around a massive live cedar tree that grew right through the center of the house. The cedar column is original to the structure, and the staircase was built around it rather than removing the tree. It's the kind of architectural decision that defines a house. Guests discover it and immediately want to photograph it.",
  photos: [
    { src: "/images/unique-spiral-staircase.jpg", alt: "Spiral cedar staircase — built around a live cedar tree" },
    { src: "/images/staircase-2.jpg", alt: "The second staircase — open railing, log construction" },
    { src: "/images/stare-case.jpg", alt: "Staircase architectural detail" },
  ],
};

const upstairs: Room[] = [
  {
    id: "king2",
    label: "Upper Floor · Bedroom 3",
    title: "King Bedroom",
    subtitle: "King Bed · Forest Views",
    description: "A handsome upstairs king with forested views, premium mattress, and luxury linens. Quiet, comfortable, and exactly what you need after a day on the mountain or in the sauna.",
    features: ["King bed — premium mattress", "Forest views", "Luxury linens", "Upper floor"],
    photos: [
      { src: "/images/bedroom4.jpg", alt: "Upstairs king bedroom — clean, modern, forest views" },
      { src: "/images/bedroom4b.jpg", alt: "Upstairs king bedroom — detail" },
    ],
  },
  {
    id: "king3",
    label: "Upper Floor · Bedroom 4",
    title: "King Suite",
    subtitle: "King Bed · Sitting Area",
    description: "A generous upstairs king with a sitting area — room enough to actually spread out. Bright, well-appointed, with the same quality linens throughout the house.",
    features: ["King bed — premium mattress", "Sitting area", "Luxury linens", "Upper floor"],
    photos: [
      { src: "/images/bedroom6a.jpg", alt: "Upstairs king suite — bed, sitting area, bright windows" },
      { src: "/images/bedroom6b.jpg", alt: "King suite — detail" },
      { src: "/images/bedroom6c.jpg", alt: "King suite — alternate angle" },
    ],
  },
  {
    id: "queen1",
    label: "Upper Floor · Bedroom 5",
    title: "Queen Bedroom",
    subtitle: "Queen Bed · Forest Views",
    description: "A warm, comfortable upstairs queen with character. Great natural light, quality linens, and the kind of quiet you can only get in a forest 25 acres from the nearest neighbor.",
    features: ["Queen bed — premium mattress", "Forest views", "Luxury linens", "Upper floor"],
    photos: [
      { src: "/images/bedroom5.jpg", alt: "Upstairs queen bedroom — warm tones, forest views" },
      { src: "/images/bedroom5b.jpg", alt: "Queen bedroom — closet and storage" },
      { src: "/images/bedrrom5c.jpg", alt: "Queen bedroom — alternate angle" },
    ],
  },
  {
    id: "queen2",
    label: "Upper Floor · Bedroom 6",
    title: "Queen Bedroom",
    subtitle: "Queen Bed",
    description: "A comfortable, well-furnished upstairs queen. Part of a house where every room gets the same quality mattress and linens — no one draws the short straw.",
    features: ["Queen bed — premium mattress", "Luxury linens", "Upper floor"],
    photos: [
      { src: "/images/bedroom3a.jpg", alt: "Queen bedroom — clean, comfortable" },
      { src: "/images/bedroom3b.jpg", alt: "Queen bedroom — detail" },
    ],
  },
  {
    id: "twins",
    label: "Upper Floor · Bedroom 7",
    title: "The Teenage Room",
    subtitle: "Two Twin XL Beds",
    description: "Two twin XL beds in their own room. The teenagers claim this one. Plenty of space, their own corner of the upper floor, and just far enough from the adults to feel independent — just close enough that they're not actually.",
    features: ["Two Twin XL beds", "Their own space on the upper floor", "Great for kids, teens, or extra guests"],
    photos: [
      { src: "/images/bedroom7a.jpg", alt: "The Teenage Room — two twin XL beds" },
      { src: "/images/bedroom7b.jpg", alt: "Twin bedroom — second angle" },
    ],
  },
];

const extras = [
  {
    label: "The Billiard Room",
    desc: "Turquoise-felt pool table in its own log room with stone fireplace. It becomes the place the group gravitates to after dinner.",
    photos: [
      { src: "/images/billardroom1.jpg", alt: "Billiard room — turquoise pool table, stone fireplace" },
      { src: "/images/billardroom2.jpg", alt: "Billiard room — alternate angle" },
    ],
  },
  {
    label: "The Great Room",
    desc: "Where everyone ends up. Steinway grand piano, stone fireplace, log walls, cathedral ceiling. The room holds a group — and it knows it.",
    photos: [
      { src: "/images/greatroom-steinway.jpg", alt: "Great room — Steinway piano, log walls, leather seating" },
      { src: "/images/greatroom-chess.jpg", alt: "Great room — chess table and fireplace" },
      { src: "/images/greatroom.jpg", alt: "Great room — full view" },
    ],
  },
];

function PhotoGrid({ photos }: { photos: { src: string; alt: string }[] }) {
  return (
    <div className={`grid gap-2 ${photos.length === 1 ? "grid-cols-1" : photos.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
      {photos.map(p => (
        <div key={p.src} className="relative aspect-[4/3] overflow-hidden">
          <Image src={p.src} alt={p.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
      ))}
    </div>
  );
}

function RoomCard({ room }: { room: Room }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 border-b border-[var(--color-cream-dark)]">
      <div>
        <p className="text-[var(--color-gold)] text-[10px] tracking-[0.3em] uppercase font-sans mb-2">{room.label}</p>
        <h2 className="font-display text-4xl text-[var(--color-forest)] font-light mb-1">{room.title}</h2>
        {room.subtitle && <p className="text-[var(--color-bark)]/60 font-sans text-sm mb-4">{room.subtitle}</p>}
        <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed mb-6">{room.description}</p>
        <ul className="space-y-2">
          {room.features.map(f => (
            <li key={f} className="flex items-start gap-3 text-sm font-sans text-[var(--color-bark)]/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] flex-shrink-0 mt-1.5" />
              {f}
            </li>
          ))}
        </ul>
      </div>
      <PhotoGrid photos={room.photos} />
    </div>
  );
}

export default function RoomsPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)]">

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Sleeping 14</p>
        <h1 className="font-display text-6xl text-[var(--color-forest)] font-light leading-tight mb-6">
          7 Bedrooms
        </h1>
        <p className="text-[var(--color-bark)]/70 text-lg leading-relaxed font-sans max-w-2xl mx-auto">
          Two suites on the main floor. Five bedrooms upstairs. A spiral cedar staircase between them.
          Every room has a premium mattress and luxury linens — no one draws the short straw.
        </p>
      </section>

      {/* Main floor */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="border-t-4 border-[var(--color-gold)] pt-8 mb-2">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase font-sans">Main Floor</p>
          <h2 className="font-display text-3xl text-[var(--color-forest)] font-light">Ground Level Bedrooms</h2>
        </div>
        {mainFloor.map(room => <RoomCard key={room.id} room={room} />)}
      </section>

      {/* Staircase */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-b border-[var(--color-cream-dark)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[var(--color-gold)] text-[10px] tracking-[0.3em] uppercase font-sans mb-2">Architectural Feature</p>
            <h2 className="font-display text-4xl text-[var(--color-forest)] font-light mb-4">{staircase.title}</h2>
            <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed">{staircase.body}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {staircase.photos.map(p => (
              <div key={p.src} className="relative aspect-[3/4] overflow-hidden">
                <Image src={p.src} alt={p.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upstairs */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="border-t-4 border-[var(--color-forest)] pt-8 mt-8 mb-2">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase font-sans">Upper Floor</p>
          <h2 className="font-display text-3xl text-[var(--color-forest)] font-light">Five Upstairs Bedrooms</h2>
        </div>
        {upstairs.map(room => <RoomCard key={room.id} room={room} />)}
      </section>

      {/* Billiard room + Great room */}
      <section className="bg-[var(--color-cream-dark)] py-20 px-6 mt-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase font-sans mb-12 text-center">Beyond the Bedrooms</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {extras.map(e => (
              <div key={e.label}>
                <h3 className="font-display text-3xl text-[var(--color-forest)] mb-2">{e.label}</h3>
                <p className="text-[var(--color-bark)]/70 font-sans text-sm mb-4 leading-relaxed">{e.desc}</p>
                <PhotoGrid photos={e.photos} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bathroom */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-[var(--color-cream-dark)]">
        <div>
          <p className="text-[var(--color-gold)] text-[10px] tracking-[0.3em] uppercase font-sans mb-2">3.5 Baths</p>
          <h2 className="font-display text-3xl text-[var(--color-forest)] font-light mb-3">Bathrooms</h2>
          <p className="text-[var(--color-bark)]/70 font-sans text-sm leading-relaxed">
            The property has 3.5 baths total. The master suite has a private ensuite. The Den has a private half bath.
            Shared bathrooms serve the upper floor bedrooms. At 14 guests, the math works.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src="/images/bath-upstairs.jpg" alt="Upstairs bathroom — double vanity, white cabinetry" fill className="object-cover" sizes="50vw" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-forest)] text-center py-16 px-6">
        <h2 className="font-display text-4xl text-white font-light mb-4">Ready to book all 7?</h2>
        <p className="text-[var(--color-cream)]/70 font-sans text-sm mb-8">
          The whole property is yours. No shared spaces with strangers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/book"
            className="bg-[var(--color-gold)] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans">
            Check Availability
          </Link>
          <Link href="/the-property"
            className="border border-white/50 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors font-sans">
            Back to Overview
          </Link>
        </div>
        <details className="max-w-md mx-auto text-left group">
          <summary className="text-[var(--color-cream)]/40 font-sans text-xs tracking-widest uppercase cursor-pointer hover:text-[var(--color-gold)] transition-colors list-none text-center">
            Not using all 7 bedrooms? ↓
          </summary>
          <div className="mt-4 bg-white/5 border border-white/10 px-6 py-5 text-[var(--color-cream)]/60 font-sans text-xs leading-relaxed">
            If your group doesn&apos;t need every room, book direct and let us know. We can lock the unused bedrooms
            and reduce the cleaning fee accordingly — potentially saving you around $100. Locked rooms are cleaned
            and secured; no guests ever access them, only our cleaning service. It&apos;s a simple coordination we&apos;re
            happy to do for direct bookings. Just mention it at the time of booking or reach out via the{" "}
            <Link href="/contact" className="text-[var(--color-gold)] hover:underline">contact page</Link>.
          </div>
        </details>
      </section>
    </div>
  );
}
