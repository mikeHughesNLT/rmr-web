"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/the-property", label: "The Property" },
  { href: "/the-nook",     label: "The Nook" },
  { href: "/location",     label: "Location" },
  { href: "/contact",      label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-forest)]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-white rounded-sm p-1">
            <Image src="/images/logo.jpg" alt="Red Mountain Retreat" width={36} height={36} className="block" />
          </div>
          <span className="font-display text-[var(--color-cream)] text-lg tracking-wide group-hover:text-[var(--color-gold)] transition-colors hidden sm:block">
            Red Mountain Retreat
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-[var(--color-cream)]/80 hover:text-[var(--color-gold)] text-sm tracking-widest uppercase transition-colors font-sans">
              {l.label}
            </Link>
          ))}
          <Link href="/book"
            className="bg-[var(--color-gold)] text-white text-sm tracking-widest uppercase px-5 py-2.5 hover:bg-[var(--color-gold-light)] transition-colors font-sans">
            Book Direct
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden text-[var(--color-cream)]" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--color-forest)] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-[var(--color-cream)]/80 text-sm tracking-widest uppercase font-sans">
              {l.label}
            </Link>
          ))}
          <Link href="/book" onClick={() => setOpen(false)}
            className="bg-[var(--color-gold)] text-white text-sm tracking-widest uppercase px-5 py-3 text-center font-sans">
            Book Direct
          </Link>
        </div>
      )}
    </header>
  );
}
