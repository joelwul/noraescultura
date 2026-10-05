import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
const HERO_POSTER_URL = "/images/hero-poster.webp";

import { LangProvider, useLang } from "../components/LangContext";
import { Nav } from "../components/Nav";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { HeroVideo } from "../components/HeroVideo";
import { Picture } from "../components/Picture";
import { useReveal } from "../hooks/use-reveal";
import {
  ARTWORKS,
  COPY,
  HERO_SLUG,
  INSTAGRAM_URL,
  PORTRAIT_SLUG,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "../lib/content";

// Below-the-fold — code-split to keep the initial JS bundle minimal.
const ExhibitionSection = lazy(() =>
  import("../components/ExhibitionSection").then((m) => ({ default: m.ExhibitionSection })),
);

const SITE_URL = "https://noraescultura.com";
const OG_IMAGE = `${SITE_URL}/images/${HERO_SLUG}-1280.webp`;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nora Bystrowicz | Escultura Cerámica Contemporánea" },
      {
        name: "description",
        content:
          "Obra escultórica en cerámica de Nora Bystrowicz. Una exhibición íntima de materia, gesto y silencio. Buenos Aires.",
      },
      { property: "og:title", content: "Nora Bystrowicz | Nora es Cultura" },
      {
        property: "og:description",
        content: "Escultura cerámica contemporánea — materia, gesto y silencio.",
      },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "preload", as: "image", href: HERO_POSTER_URL, fetchpriority: "high" },
    ],
  }),
  component: () => (
    <LangProvider>
      <Page />
    </LangProvider>
  ),
});

function Paragraphs({ text, className = "" }: { text: string; className?: string }) {
  return (
    <>
      {text.split("\n\n").map((p, i) => (
        <p key={i} className={className}>
          {p}
        </p>
      ))}
    </>
  );
}

function Page() {
  const { t, lang } = useLang();
  useReveal();

  const featured = ARTWORKS.find((a) => a.featured)!;

  const featuredInquiry = `${WHATSAPP_URL.split("?")[0]}?text=${encodeURIComponent(
    lang === "es"
      ? `Hola Nora, me gustaría consultar sobre "${featured.title}".`
      : `Hello Nora, I would like to inquire about "${featured.title}".`,
  )}`;

  return (
    <div id="top" className="bg-ivory text-charcoal min-h-screen">
      <Nav />
      <FloatingWhatsApp label="WhatsApp" />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <HeroVideo
            label={{
              on: lang === "es" ? "Activar sonido" : "Unmute",
              off: lang === "es" ? "Silenciar" : "Mute",
            }}
          />
        </div>
        <div className="relative flex-1 flex flex-col justify-end pb-16 md:pb-20 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
          <div className="reveal max-w-5xl min-w-0 pt-28 md:pt-36">
            <p className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-charcoal/85 mb-5 md:mb-6 text-shadow-sm">
              {t(COPY.hero.eyebrow)}
            </p>
            <h1 className="font-display-sans text-charcoal leading-[0.92] break-words whitespace-normal md:whitespace-nowrap tracking-[0.02em] text-[clamp(1.5rem,7vw,4rem)] md:text-[clamp(3.5rem,8.5vw,8.5rem)] text-shadow-lg">
              Nora Bystrowicz
            </h1>
          </div>
          <div className="reveal mt-16 md:mt-24 flex flex-col md:flex-row justify-between md:items-end gap-6">
            <p className="text-sm md:text-base font-medium text-charcoal/85 max-w-xs text-shadow">{t(COPY.hero.caption)}</p>
            <a
              href="#estudio"
              className="text-sm md:text-base font-semibold tracking-wide text-charcoal border-b border-charcoal pb-1 self-start md:self-auto hover:text-clay hover:border-clay transition-colors text-shadow-sm"
            >
              {t(COPY.hero.scroll)}
            </a>
          </div>
        </div>

      </section>

      {/* QUIÉN SOY */}
      <section id="estudio" className="py-32 md:py-48">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="reveal md:col-span-5">
            <div className="overflow-hidden bg-beige/40 aspect-[4/5]">
              <Picture
                slug={PORTRAIT_SLUG}
                alt="Retrato de Nora Bystrowicz en su estudio"
                sizes="(min-width: 768px) 40vw, 100vw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <p className="small-caps text-clay mb-6">{t(COPY.studio.label)}</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-charcoal mb-10">
              {t(COPY.studio.title)}
            </h2>
            <div className="space-y-5 text-charcoal/80 leading-relaxed text-[17px] max-w-xl">
              <Paragraphs text={t(COPY.studio.body)} />
            </div>
            <p className="font-display italic text-stone mt-8 text-lg">{t(COPY.studio.signature)}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="hairline" />
      </div>





      {/* OBRA DESTACADA — Órbita Mineral */}
      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="reveal flex items-baseline justify-between mb-16 md:mb-24">
            <p className="small-caps text-clay">{t(COPY.featured.label)}</p>
            <p className="small-caps text-stone">{featured.number}</p>
          </div>
        </div>
        <div className="reveal w-full">
          <Picture
            slug={featured.slug}
            alt={`${featured.title} — escultura cerámica de Nora Bystrowicz`}
            sizes="100vw"
            pictureClassName="block w-full"
            className="w-full h-auto max-h-[90vh] object-contain bg-warm-white"
          />
        </div>
        <div className="mx-auto max-w-[1100px] px-6 md:px-12 mt-16 md:mt-24">
          <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-charcoal">
                {featured.title}
              </h2>
              <p className="font-display italic text-stone mt-3">
                {t(featured.medium)}, {featured.year}
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <div className="space-y-4 text-charcoal/80 leading-relaxed text-[17px]">
                <Paragraphs text={t(featured.narrative)} />
              </div>
              <a
                href={featuredInquiry}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 small-caps text-charcoal border-b border-charcoal pb-1 hover:text-clay hover:border-clay transition-colors"
              >
                {t(COPY.featured.cta)}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-32 md:py-48" aria-hidden />}>
        <ExhibitionSection />
      </Suspense>

      {/* CAREER HIGHLIGHTS */}
      <section className="py-32 md:py-40 bg-warm-white">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12">
          <p className="small-caps text-clay mb-12 reveal">{t(COPY.highlights.label)}</p>
          <ul className="reveal space-y-6 font-display text-2xl md:text-3xl leading-snug text-charcoal/90">
            {t(COPY.highlights.items).map((item, i) => (
              <li key={i} className="flex gap-6 items-baseline">
                <span className="small-caps text-clay shrink-0">0{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRAYECTORIA Y EXPOSICIONES — fondo diferenciado */}
      <section id="trayectoria" className="py-32 md:py-40 bg-beige/30 border-y border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 space-y-24 md:space-y-32">
          {/* TRAYECTORIA Y FORMACIÓN */}
          <div>
            <p className="small-caps text-clay mb-12 reveal">{t(COPY.timeline.label)}</p>
            <ul className="reveal divide-y divide-charcoal/15">
              {COPY.timeline.items.map((it) => {
                const text = lang === "es" ? it.es : it.en;
                const [head, ...rest] = text.split("·");
                return (
                  <li key={it.year} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-7">
                    <span className="font-display font-semibold text-2xl md:text-3xl text-clay md:col-span-2">
                      {it.year}
                    </span>
                    <span className="text-charcoal md:col-span-10 self-center text-[17px]">
                      <strong className="font-semibold text-charcoal">{head.trim()}</strong>
                      {rest.length > 0 && (
                        <span className="text-charcoal/70"> · {rest.join("·").trim()}</span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* EXPOSICIONES */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="reveal md:col-span-4">
              <p className="small-caps text-clay mb-4">{t(COPY.exhibitions.label)}</p>
            </div>
            <div className="md:col-span-8 space-y-12">
              <div className="reveal">
                <p className="small-caps text-stone mb-5">{t(COPY.exhibitions.past)}</p>
                <ul className="space-y-4 font-display text-xl md:text-2xl text-charcoal/90">
                  {COPY.exhibitions.pastItems.map((it, i) => {
                    const text = lang === "es" ? it.es : it.en;
                    const [head, ...rest] = text.split("·");
                    return (
                      <li key={i}>
                        <strong className="font-semibold text-charcoal">{head.trim()}</strong>
                        {rest.length > 0 && (
                          <span className="text-charcoal/70 italic"> · {rest.join("·").trim()}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="reveal">
                <p className="small-caps text-stone mb-5">{t(COPY.exhibitions.upcoming)}</p>
                <p className="font-display italic text-charcoal/75 text-lg">
                  {t(COPY.exhibitions.upcomingText)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PENSAMIENTO */}
      <section className="py-40 md:py-56">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12">
          <p className="small-caps text-clay mb-10 reveal">{t(COPY.pensamiento.label)}</p>
          <blockquote className="reveal font-display italic text-3xl md:text-5xl leading-[1.2] text-charcoal/90">
            {t(COPY.pensamiento.quote)}
          </blockquote>
          <p className="reveal small-caps text-stone mt-10">{t(COPY.pensamiento.attribution)}</p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-32 md:py-48 bg-charcoal text-ivory">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="reveal md:col-span-5">
            <p className="small-caps text-clay mb-6">{t(COPY.contact.label)}</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              {t(COPY.contact.title)}
            </h2>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <div className="space-y-5 text-ivory/80 leading-relaxed text-[17px]">
              <Paragraphs text={t(COPY.contact.body)} />
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 small-caps text-ivory border-b border-ivory pb-1 hover:text-clay hover:border-clay transition-colors"
            >
              {t(COPY.contact.cta)}
              <span aria-hidden>→</span>
            </a>
            <p className="font-display text-2xl md:text-3xl mt-12 text-ivory/90">
              {WHATSAPP_NUMBER}
            </p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM — reel embed (lazy, no JS) */}
      <section id="instagram" className="py-32 md:py-40 bg-warm-white border-t border-border/60">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12">
          <div className="reveal flex items-baseline justify-between mb-12">
            <p className="small-caps text-clay">{lang === "es" ? "En Instagram" : "On Instagram"}</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="small-caps text-charcoal border-b border-charcoal pb-1 hover:text-clay hover:border-clay transition-colors"
            >
              @noraescultura →
            </a>
          </div>
          <div className="reveal mx-auto w-full max-w-[420px]">
            <div className="relative w-full overflow-hidden bg-beige/40" style={{ aspectRatio: "9 / 16" }}>
              <iframe
                src="https://www.instagram.com/reel/DZcl5RixSZv/embed/"
                title="Reel de Nora Bystrowicz en Instagram"
                loading="lazy"
                allow="encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                scrolling="no"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-ivory/70 border-t border-ivory/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <div>
            <p className="font-display text-xl text-ivory">
              Nora <span className="text-clay">es</span> Cultura
            </p>
            <p className="small-caps mt-3 text-ivory/50">{t(COPY.footer.tagline)}</p>
          </div>
          <div className="small-caps space-y-2 md:text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-clay transition-colors"
            >
              WhatsApp · {WHATSAPP_NUMBER}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-clay transition-colors"
            >
              Instagram · @noraescultura
            </a>
          </div>
          <p className="small-caps md:text-right text-ivory/50">
            © {new Date().getFullYear()} Nora Bystrowicz · {t(COPY.footer.rights)}
          </p>
        </div>
      </footer>
    </div>
  );
}
