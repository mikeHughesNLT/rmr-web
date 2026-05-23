"use client";
import { useEffect, useState } from "react";

const SLIDES = [
  "Short walk from the lodge — feels like a step into the wilderness.",
  "Deer and wildlife pass by the elevated deck.",
  "Dual heat: floor radiant + traditional sauna heater.",
  "Preheat the sauna from inside the lodge.",
  "Cold shower just outside the door.",
];

// Each slide: 1s fade in + 5s hold + 1s fade out + 0.5s gap = 7.5s per slide
const FADE_MS   = 1000;
const HOLD_MS   = 5000;
const GAP_MS    = 500;
const CYCLE_MS  = FADE_MS + HOLD_MS + FADE_MS + GAP_MS;

export default function SaunaHero() {
  const [index, setIndex]   = useState(0);
  const [phase, setPhase]   = useState<"in" | "hold" | "out" | "gap">("in");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "in") {
      timer = setTimeout(() => setPhase("hold"), FADE_MS);
    } else if (phase === "hold") {
      timer = setTimeout(() => setPhase("out"), HOLD_MS);
    } else if (phase === "out") {
      timer = setTimeout(() => setPhase("gap"), FADE_MS);
    } else {
      timer = setTimeout(() => {
        setIndex(i => (i + 1) % SLIDES.length);
        setPhase("in");
      }, GAP_MS);
    }

    return () => clearTimeout(timer);
  }, [phase]);

  const opacity =
    phase === "in"   ? 1 :
    phase === "hold" ? 1 :
    phase === "out"  ? 0 : 0;

  const transition =
    phase === "in"  ? `opacity ${FADE_MS}ms ease-in`  :
    phase === "out" ? `opacity ${FADE_MS}ms ease-out` : "none";

  return (
    <section className="relative w-full aspect-video max-h-[80vh] overflow-hidden bg-black">
      <video
        src="/videos/treehouse-sauna.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Dark gradient overlay so text is always legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Rolling text — bottom third, independent of video */}
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
