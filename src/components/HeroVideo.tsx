import { useRef, useState } from "react";

const HERO_MP4 = "/videos/hero.mp4";
const HERO_WEBM = "/videos/hero.webm";
const HERO_POSTER = "/images/hero-poster.webp";

export function HeroVideo({ label }: { label: { on: string; off: string } }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    if (!next) v.play().catch(() => {});
  };

  return (
    <>
      <video
        ref={ref}
        poster={HERO_POSTER}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={HERO_WEBM} type="video/webm" />
        <source src={HERO_MP4} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/30 via-charcoal/20 to-ivory/55 pointer-events-none" />
      <button
        type="button"
        onClick={toggle}
        aria-label={muted ? label.on : label.off}
        title={muted ? label.on : label.off}
        className="absolute bottom-6 left-6 md:bottom-8 md:left-12 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-charcoal/40 backdrop-blur-sm text-ivory border border-ivory/30 hover:bg-charcoal/60 transition-colors"
      >
        {muted ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M11 5L6 9H3v6h3l5 4V5z" />
            <line x1="22" y1="9" x2="16" y2="15" />
            <line x1="16" y1="9" x2="22" y2="15" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M11 5L6 9H3v6h3l5 4V5z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </svg>
        )}
      </button>
    </>
  );
}
