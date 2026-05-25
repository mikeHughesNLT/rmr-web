"use client";
import { useRef, useState } from "react";

/**
 * Hero video background.
 * - Plays inway.mp4 first (autoplay, muted, no loop).
 * - When it ends, lazily loads sauna-journey.mp4 and plays it on loop.
 * - sauna-journey.mp4 is the forward+reverse palindrome — seamless infinite loop.
 */
export default function HeroVideo() {
  const videoRef  = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<"entry" | "sauna">("entry");

  function handleEnded() {
    const vid = videoRef.current;
    if (!vid) return;
    setPhase("sauna");
    vid.src = "/videos/sauna-journey.mp4";
    vid.loop = true;
    vid.load();
    vid.play().catch(() => {});
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      loop={false}
      onEnded={handleEnded}
      className="absolute inset-0 w-full h-full object-cover"
      poster="/images/hero-aerial.jpg"
      // Only preload the entry video metadata; sauna video loads on demand
      preload="auto"
    >
      <source src="/videos/inway.mp4" type="video/mp4" />
    </video>
  );
}
