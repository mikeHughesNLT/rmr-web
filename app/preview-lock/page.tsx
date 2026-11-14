import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preview — Red Mountain Retreat",
  robots: { index: false, follow: false },
};

export default async function PreviewLockPage({
  searchParams,
}: {
  searchParams: Promise<{ bad?: string }>;
}) {
  const { bad } = await searchParams;
  return (
    <div className="pt-24 bg-[var(--color-cream)] min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center py-16">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Private Preview</p>
        <h1 className="font-display text-4xl text-[var(--color-forest)] font-light mb-4">This page isn&apos;t public yet</h1>
        <p className="font-sans text-[var(--color-bark)]/70 mb-8">Enter the preview password to take a look.</p>
        <form method="GET" action="/wilderness-services" className="flex flex-col gap-3">
          <input
            type="password"
            name="key"
            required
            autoComplete="off"
            placeholder="Password"
            className="border border-[var(--color-cream-dark)] bg-white px-4 py-3 font-sans text-[var(--color-bark)]"
          />
          <button
            type="submit"
            className="bg-[var(--color-gold)] text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans"
          >
            View Preview
          </button>
        </form>
        {bad && <p className="font-sans text-sm text-red-700 mt-4">That password didn&apos;t work. Please try again.</p>}
      </div>
    </div>
  );
}
