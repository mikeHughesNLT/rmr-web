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
          <p className="text-sm mb-5">No platform fees.<br />Pay direct, save more.</p>
          <p className="text-xs tracking-widest uppercase mb-3 text-[var(--color-gold)]">Follow</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/red_mountain_retreat/" target="_blank" rel="noopener noreferrer"
              className="text-[var(--color-cream)]/60 hover:text-[var(--color-gold)] transition-colors" aria-label="Instagram">
              {/* Instagram */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/redmountainretreat/" target="_blank" rel="noopener noreferrer"
              className="text-[var(--color-cream)]/60 hover:text-[var(--color-gold)] transition-colors" aria-label="Facebook">
              {/* Facebook */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-4 text-xs flex justify-between">
        <span>© {new Date().getFullYear()} Red Mountain Retreat. All rights reserved.</span>
        <span>Maple Falls, WA · Mt. Baker Country</span>
      </div>
    </footer>
  );
}
