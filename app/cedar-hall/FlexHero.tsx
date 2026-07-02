"use client";
import { useEffect, useState } from "react";

const SLIDES = [
  "36′ × 26′ of wide-open floor — doors rolled up to the mountain air.",
  "Inflatable screen. Inflatable furniture. Movie night in the forest.",
  "Three large rollup doors open the whole room to the forest.",
  "Mats arriving July 2026 — yoga, combatives, or a full-on dodgeball war.",
  "Morning practice. Team meeting. Movie night. Dodgeball. All in one space.",
];

const FADE_MS  = 1000;
const HOLD_MS  = 5000;
const GAP_MS   = 500;

export default function FlexHero() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "gap">("in");

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === "in")        t = setTimeout(() => setPhase("hold"), FADE_MS);
    else if (phase === "hold") t = setTimeout(() => setPhase("out"),  HOLD_MS);
    else if (phase === "out")  t = setTimeout(() => setPhase("gap"),  FADE_MS);
    else                       t = setTimeout(() => { setIndex(i => (i + 1) % SLIDES.length); setPhase("in"); }, GAP_MS);
    return () => clearTimeout(t);
  }, [phase]);

  const opacity    = phase === "out" || phase === "gap" ? 0 : 1;
  const transition = phase === "in"  ? `opacity ${FADE_MS}ms ease-in`
                   : phase === "out" ? `opacity ${FADE_MS}ms ease-out` : "none";

  return (
    <section className="relative w-full aspect-video max-h-[80vh] overflow-hidden bg-black">
      <video
        src="/videos/cedar-hall.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 px-8 pb-10 md:px-16 md:pb-14">
        <p
          className="font-display text-white text-2xl md:text-4xl font-light leading-snug max-w-2xl"
          style={{ opacity, transition }}
        >
          {SLIDES[index]}
        </p>
      </div>
    </section>
  );
}
