'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="font-sans text-xs tracking-widest uppercase bg-[#1B3A2D] text-white px-5 py-2.5 hover:bg-[#2A5242] transition-colors"
    >
      Print / Save PDF
    </button>
  );
}
