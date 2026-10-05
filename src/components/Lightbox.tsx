import { useEffect } from "react";
import { X } from "lucide-react";
import { useLang } from "./LangContext";
import { COPY, type Artwork } from "../lib/content";
import { Picture } from "./Picture";

type Props = {
  artwork: Artwork;
  inquiryUrl: string;
  onClose: () => void;
};

export function Lightbox({ artwork, inquiryUrl, onClose }: Props) {
  const { t } = useLang();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-ivory/98 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={artwork.title}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="fixed top-6 right-6 md:top-8 md:right-8 z-10 w-12 h-12 flex items-center justify-center text-charcoal hover:text-clay transition-colors"
        aria-label={t(COPY.exhibition.collapse)}
      >
        <X size={28} strokeWidth={1.2} />
      </button>
      <div
        className="min-h-screen flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lg:w-2/3 flex items-center justify-center p-6 md:p-12 bg-warm-white">
          <Picture
            slug={artwork.slug}
            alt={`${artwork.title} — escultura cerámica de Nora Bystrowicz`}
            sizes="(min-width: 1024px) 66vw, 100vw"
            priority
            className="max-h-[88vh] w-auto max-w-full object-contain"
          />
        </div>
        <div className="lg:w-1/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <p className="small-caps text-clay mb-5">{artwork.number}</p>
          <h3 className="font-display text-3xl md:text-5xl leading-[1.05] text-charcoal mb-3">
            {artwork.title}
          </h3>
          <p className="font-display italic text-stone mb-8">
            {t(artwork.medium)}, {artwork.year}
          </p>
          <div className="space-y-4 text-charcoal/80 leading-relaxed text-[16px] mb-10">
            {t(artwork.narrative)
              .split("\n\n")
              .map((p, i) => (
                <p key={i}>{p}</p>
              ))}
          </div>
          <a
            href={inquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start small-caps text-charcoal border-b border-charcoal pb-1 hover:text-clay hover:border-clay transition-colors"
          >
            {t(COPY.exhibition.inquire)}
          </a>
        </div>
      </div>
    </div>
  );
}
