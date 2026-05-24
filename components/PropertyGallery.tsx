"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type GalleryItem = {
  src: string;
  alt: string;
  wide?: boolean;
  link?: string;
  objectPosition?: string;
};

const gallery: GalleryItem[] = [
  { src: "/images/exterior-bridge.jpg",  alt: "Lodge at golden hour — stone patio, bridge, cedar exterior", wide: true },
  { src: "/images/great-room-2.jpg",     alt: "Great room — log walls, cathedral ceiling, stone fireplace", wide: true },
  { src: "/images/sauna-interior-2.jpg", alt: "Treehouse sauna — cedar walls, slate floors, live-edge benches, glowing rocks", link: "/sauna" },
  { src: "/images/great-room.jpg",       alt: "Great room — full group gathering by the fire" },
  { src: "/images/bedroom-01.jpg",       alt: "King bedroom — barn door, hardwood floors, forest views" },
  { src: "/images/kitchen.jpg",          alt: "Full kitchen — large group ready" },
  { src: "/images/dining.jpg",           alt: "Dining area" },
  { src: "/images/master-bath.jpg",      alt: "Master bathroom" },
  { src: "/images/group-outside.jpg",    alt: "Group on the grounds — 25 acres of outdoor space", wide: true },
  { src: "/images/trails.jpg",           alt: "Private trails through old-growth forest" },
  { src: "/images/exterior-02.jpg",      alt: "Red Mountain Retreat — sign, deer, forest path", wide: true },
];

// Only non-linked items open in lightbox
const lightboxItems = gallery.filter(g => !g.link);

export default function PropertyGallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const currentIndex = lightboxItems.findIndex(g => g.src === lightboxSrc);
  const currentItem  = lightboxItems[currentIndex] ?? null;

  const close = useCallback(() => setLightboxSrc(null), []);

  const prev = useCallback(() => {
    if (currentIndex <= 0) return;
    setLightboxSrc(lightboxItems[currentIndex - 1].src);
  }, [currentIndex]);

  const next = useCallback(() => {
    if (currentIndex >= lightboxItems.length - 1) return;
    setLightboxSrc(lightboxItems[currentIndex + 1].src);
  }, [currentIndex]);

  useEffect(() => {
    if (!lightboxSrc) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxSrc, close, prev, next]);

  return (
    <>
      {/* ── Gallery grid ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {gallery.map((img, i) => {
          const isWide    = img.wide;
          const isFirst   = i === 0;
          const aspect    = isFirst ? "aspect-[16/9]" : "aspect-square";
          const spanClass = isWide  ? "col-span-2" : "";

          const inner = (
            <div className={`relative overflow-hidden ${aspect} ${spanClass} group cursor-pointer`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: img.objectPosition ?? "center center" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--color-forest)]/0 group-hover:bg-[var(--color-forest)]/30 transition-colors duration-300 flex items-center justify-center">
                {img.link ? (
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-sans text-xs tracking-widest uppercase border border-white/60 px-4 py-2">
                    View Sauna →
                  </span>
                ) : (
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                )}
              </div>
            </div>
          );

          return img.link ? (
            <Link key={img.src} href={img.link}>{inner}</Link>
          ) : (
            <div key={img.src} onClick={() => setLightboxSrc(img.src)}>
              {inner}
            </div>
          );
        })}
      </div>

      {/* ── Lightbox ── */}
      {lightboxSrc && currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4 my-8"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={currentItem.src}
              alt={currentItem.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-white/60 font-sans text-xs tracking-wide">{currentItem.alt}</p>
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Close"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          {currentIndex > 0 && (
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3"
              aria-label="Previous"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next */}
          {currentIndex < lightboxItems.length - 1 && (
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3"
              aria-label="Next"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/40 font-sans text-xs tracking-widest">
            {currentIndex + 1} / {lightboxItems.length}
          </div>
        </div>
      )}
    </>
  );
}
