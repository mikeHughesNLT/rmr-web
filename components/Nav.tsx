"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavLink = { href: string; label: string; sub?: { href: string; label: string }[] };

const links: NavLink[] = [
  {
    href: "/the-property",
    label: "The Property",
    sub: [
      { href: "/the-property", label: "Overview" },
      { href: "/rooms",        label: "All 7 Bedrooms" },
      { href: "/sauna",        label: "Treehouse Sauna" },
      { href: "/cedar-hall",   label: "Cedar Hall" },
      { href: "/location",     label: "Location & Area" },
    ],
  },
  { href: "/cedar-hall",    label: "Cedar Hall" },
  { href: "/sauna",         label: "Treehouse Sauna" },
  { href: "/contact",       label: "Contact" },
];

export default function Nav() {
  const [open, setOpen]   = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-forest)]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/images/logo.png" alt="Red Mountain Retreat" width={44} height={44} className="block brightness-0 invert" />
          <span className="font-display text-[var(--color-cream)] text-lg tracking-wide group-hover:text-[var(--color-gold)] transition-colors hidden sm:block">
            Red Mountain Retreat
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            "sub" in l ? (
              /* Dropdown item */
              <div key={l.href} className="relative"
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <Link href={l.href}
                  className="text-[var(--color-cream)]/80 hover:text-[var(--color-gold)] text-sm tracking-widest uppercase transition-colors font-sans flex items-center gap-1">
                  {l.label}
                  <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {dropOpen && l.sub && (
                  <div className="absolute top-full left-0 pt-2 min-w-[180px]">
                    <div className="bg-[var(--color-forest)] border border-white/10 py-2">
                      {l.sub.map(s => (
                        <Link key={s.href} href={s.href}
                          className="block px-5 py-2.5 text-[var(--color-cream)]/70 hover:text-[var(--color-gold)] hover:bg-white/5 text-xs tracking-widest uppercase font-sans transition-colors">
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={l.href} href={l.href}
                className="text-[var(--color-cream)]/80 hover:text-[var(--color-gold)] text-sm tracking-widest uppercase transition-colors font-sans">
                {l.label}
              </Link>
            )
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
            "sub" in l ? (
              <div key={l.href}>
                <p className="text-[var(--color-gold)] text-xs tracking-widest uppercase font-sans mb-2">{l.label}</p>
                {l.sub?.map(s => (
                  <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                    className="block pl-3 py-1.5 text-[var(--color-cream)]/70 text-xs tracking-widest uppercase font-sans">
                    {s.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-[var(--color-cream)]/80 text-sm tracking-widest uppercase font-sans">
                {l.label}
              </Link>
            )
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
