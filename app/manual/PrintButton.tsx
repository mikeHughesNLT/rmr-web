'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="font-sans text-xs tracking-widest uppercase bg-[var(--color-forest)] text-[var(--color-cream)] px-6 py-3 hover:bg-[var(--color-forest-light)] transition-colors"
    >
      Print Manual
    </button>
  );
}
