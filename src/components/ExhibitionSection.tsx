import { lazy, Suspense, useCallback, useState } from "react";
import { useLang } from "./LangContext";
import { ARTWORKS, COPY, WHATSAPP_URL, type Artwork } from "../lib/content";
import { Picture } from "./Picture";

const Lightbox = lazy(() => import("./Lightbox").then((m) => ({ default: m.Lightbox })));

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>
  );
}

function inquiryUrl(title: string, lang: "es" | "en") {
  const msg =
    lang === "es"
      ? `Hola Nora, me gustaría solicitar información sobre "${title}".`
      : `Hello Nora, I would like to request information about "${title}".`;
  return `${WHATSAPP_URL.split("?")[0]}?text=${encodeURIComponent(msg)}`;
}

// Collage tile sizing — varied spans for an editorial, non-grid feel
const TILE_LAYOUT = [
  "md:col-span-5 md:row-span-2 aspect-[3/4]",
  "md:col-span-4 aspect-square",
  "md:col-span-3 aspect-[3/4]",
  "md:col-span-3 aspect-square",
  "md:col-span-4 aspect-[4/5]",
  "md:col-span-5 aspect-[5/4]",
];

export function ExhibitionSection() {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState<Artwork | null>(null);
  const works = ARTWORKS.filter((a) => !a.featured);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="obra" className="py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="reveal max-w-3xl mb-20 md:mb-28">
          <p className="small-caps text-stone mb-6">{t(COPY.exhibition.label)}</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-charcoal">
            {t(COPY.exhibition.title)}
          </h2>
        </div>

        {/* Collage interactivo */}
        <div className="reveal grid grid-cols-2 md:grid-cols-8 gap-4 md:gap-6 auto-rows-auto">
          {works.map((w, idx) => (
            <button
              key={w.slug}
              onClick={() => setSelected(w)}
              className={`group relative overflow-hidden bg-beige/40 ${TILE_LAYOUT[idx % TILE_LAYOUT.length]} focus:outline-none focus:ring-2 focus:ring-clay`}
              aria-label={`${w.title} — ${t(COPY.exhibition.expand)}`}
            >
              <Picture
                slug={w.slug}
                alt={`${w.title} — escultura cerámica de Nora Bystrowicz`}
                sizes="(min-width: 768px) 40vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500" />
              <div className="absolute left-0 right-0 bottom-0 p-4 md:p-5 flex items-end justify-between text-ivory opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div className="text-left">
                  <p className="small-caps text-ivory/80">{w.number}</p>
                  <p className="font-display text-lg md:text-xl leading-tight mt-1">{w.title}</p>
                </div>
                <span className="small-caps text-ivory/90 border-b border-ivory/60 pb-0.5">
                  {t(COPY.exhibition.expand)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <Suspense fallback={null}>
          <Lightbox artwork={selected} onClose={close} inquiryUrl={inquiryUrl(selected.title, lang)} />
        </Suspense>
      )}
    </section>
  );
}
