import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Couples Retreat — Red Mountain Retreat",
  robots: { index: false, follow: false },
};

const RETREAT_PASSWORD = process.env.COUPLES_RETREAT_PASSWORD ?? "retreat";

async function unlock(formData: FormData) {
  "use server";
  const entered = (formData.get("password") as string | null)?.trim() ?? "";
  if (entered.toLowerCase() === RETREAT_PASSWORD.toLowerCase()) {
    const cookieStore = await cookies();
    cookieStore.set("couples-retreat-auth", "1", {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
    redirect("/retreats/couples");
  }
  redirect("/retreats/couples/unlock?wrong=1");
}

export default function CouplesRetreatUnlock({
  searchParams,
}: {
  searchParams: { wrong?: string };
}) {
  const wrong = searchParams.wrong === "1";

  return (
    <div className="min-h-screen bg-[var(--color-forest)] flex items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="Red Mountain Retreat"
            width={80}
            height={80}
            className="brightness-0 invert mx-auto"
          />
        </div>

        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-3">
          Red Mountain Retreat
        </p>
        <h1 className="font-display text-3xl text-white font-light mb-2">
          Couples Retreat
        </h1>
        <p className="font-sans text-sm text-white/50 mb-10">
          This page is private. Enter the access code to continue.
        </p>

        <form action={unlock} className="space-y-4">
          <input
            type="password"
            name="password"
            placeholder="Access code"
            autoComplete="current-password"
            className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 font-sans text-sm px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
          />

          {wrong && (
            <p className="font-sans text-xs text-red-400">
              Incorrect code. Please check with your host.
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[var(--color-gold)] text-white font-sans text-xs tracking-widest uppercase px-6 py-3 hover:bg-[var(--color-gold-light)] transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
