import Link from "next/link";
import Image from "next/image";
import PropertyGallery from "@/components/PropertyGallery";

const rooms = [
  { name: "Primary King Suite",  desc: "Ground floor. Wood-burning fireplace, seating area, vanity. Premium mattresses, luxury linens." },
  { name: "3 Additional Kings",  desc: "Premium mattresses, luxury linens, forested views from every window." },
  { name: "2 Queen Bedrooms",    desc: "One ground floor with attached half bath — single-level access for grandparents." },
  { name: "Twin XL Room",        desc: "Two twin XL beds upstairs — ideal for kids or additional guests." },
];

const amenities = [
  "Stone fireplace great room", "Steinway grand piano", "Family lounge — oversized sectional + smart TV",
  "Full kitchen — large group ready", "Treehouse sauna + cold shower", "Pool table",
  "Private hiking trails (25 acres)", "Expansive lawn + fire pit", "Multiple decks + seating nooks",
  "Washer + dryer", "Starlink wifi (lodge + sauna)", "Smart lock — no key exchange",
  "Free parking (6+ vehicles)", "Firewood included", "Dog kennels available",
  "Cedar Hall — 840 sq ft activity space",
];


export default function ThePropertyPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)]">

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">The Property</p>
        <h1 className="font-display text-6xl text-[var(--color-forest)] font-light leading-tight mb-6">
          6,000 sq ft lodge + Cedar Hall on 25 private acres
        </h1>
        <p className="text-[var(--color-bark)]/70 text-lg leading-relaxed font-sans max-w-2xl mx-auto">
          Rich leathers, warm woods, deep greens, and cozy textures throughout.
          This isn&apos;t a dusty cabin — it&apos;s a curated retreat.
        </p>
      </section>

      {/* Photo gallery grid */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <PropertyGallery />
      </section>

      {/* Bedrooms */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-8 font-sans">Where You&apos;ll Sleep</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rooms.map(r => (
            <div key={r.name} className="border border-[var(--color-cream-dark)] bg-white p-6">
              <h3 className="font-display text-2xl text-[var(--color-forest)] mb-2">{r.name}</h3>
              <p className="text-[var(--color-bark)]/70 text-sm font-sans">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Treehouse Sauna — photo + text */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[440px]">
          <Image src="/images/sauna-interior.jpg" alt="Treehouse sauna interior" fill className="object-cover" />
        </div>
        <div className="bg-[var(--color-forest)] flex items-center p-12 md:p-16">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Signature Feature</p>
            <h2 className="font-display text-4xl text-white font-light leading-tight mb-4">The Treehouse Sauna</h2>
            <p className="text-[var(--color-cream)]/70 font-sans text-sm leading-relaxed">
              Custom-built cedar sauna perched in the forest canopy — slate floors, live-edge benches,
              glowing rocks. Cold shower outside. Step into 40°F mountain air. It changes your day.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-8 font-sans">Everything Included</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {amenities.map(a => (
            <div key={a} className="flex items-center gap-3 py-3 border-b border-[var(--color-cream-dark)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] flex-shrink-0" />
              <span className="text-sm font-sans text-[var(--color-bark)]/80">{a}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Cedar Hall CTA */}
      <section className="bg-[var(--color-cream-dark)] py-16 px-6 text-center">
        <h2 className="font-display text-4xl text-[var(--color-forest)] mb-4">Plus: Cedar Hall</h2>
        <p className="text-[var(--color-bark)]/70 font-sans mb-6 max-w-xl mx-auto">
          840 sq ft of open space — conferences, kids, retreats, movie nights, and more. Wrestling mats coming Summer 2026.
        </p>
        <Link href="/cedar-hall"
          className="border-2 border-[var(--color-forest)] text-[var(--color-forest)] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[var(--color-forest)] hover:text-white transition-colors font-sans inline-block">
          Explore Cedar Hall
        </Link>
      </section>
    </div>
  );
}
