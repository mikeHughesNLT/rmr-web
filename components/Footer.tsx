import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-forest)] text-[var(--color-cream)]/70">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-display text-[var(--color-cream)] text-lg mb-2">Red Mountain Retreat</p>
          <p className="text-sm">Restore · Reconnect · Rise</p>
          <p className="text-sm mt-3">Near Silver Lake<br />Maple Falls, WA 98266</p>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase mb-4 text-[var(--color-gold)]">Explore</p>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/the-property" className="hover:text-[var(--color-cream)] transition-colors">The Property</Link>
            <Link href="/cedar-hall"   className="hover:text-[var(--color-cream)] transition-colors">Cedar Hall</Link>
            <Link href="/location"     className="hover:text-[var(--color-cream)] transition-colors">Location</Link>
            <Link href="/contact"      className="hover:text-[var(--color-cream)] transition-colors">Contact</Link>
          </nav>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase mb-4 text-[var(--color-gold)]">Book</p>
          <Link href="/book"
            className="inline-block bg-[var(--color-gold)] text-white text-sm tracking-widest uppercase px-5 py-2.5 hover:bg-[var(--color-gold-light)] transition-colors mb-4">
            Book Direct
          </Link>
          <p className="text-sm">No platform fees.<br />Pay direct, save more.</p>
        </div>
      </div>
      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-4 text-xs flex justify-between">
        <span>© {new Date().getFullYear()} Red Mountain Retreat. All rights reserved.</span>
        <span>Maple Falls, WA · Mt. Baker Country</span>
      </div>
    </footer>
  );
}
