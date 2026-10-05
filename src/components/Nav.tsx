import { useEffect, useState } from "react";
import { useLang } from "./LangContext";
import { COPY, INSTAGRAM_URL, WHATSAPP_URL } from "../lib/content";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#obra", label: t(COPY.nav.obra) },
    { href: "#estudio", label: t(COPY.nav.estudio) },
    { href: "#trayectoria", label: t(COPY.nav.trayectoria) },
    { href: "#contacto", label: t(COPY.nav.contacto) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <a href="#top" className="font-display text-lg md:text-xl tracking-tight text-charcoal">
          Nora <span className="text-clay">es</span> Cultura
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="small-caps text-charcoal/70 hover:text-charcoal transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 md:gap-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @noraescultura"
            title="Instagram"
            className="text-charcoal/70 hover:text-clay transition-colors"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="text-charcoal/70 hover:text-clay transition-colors"
          >
            <WhatsAppIcon size={18} />
          </a>
          <span className="h-4 w-px bg-charcoal/20" aria-hidden />
          <div className="flex items-center gap-1 small-caps">
            <button
              onClick={() => setLang("es")}
              className={`px-1.5 py-1 transition-colors ${
                lang === "es" ? "text-charcoal" : "text-charcoal/40 hover:text-charcoal/70"
              }`}
              aria-label="Español"
            >
              ES
            </button>
            <span className="text-charcoal/30">/</span>
            <button
              onClick={() => setLang("en")}
              className={`px-1.5 py-1 transition-colors ${
                lang === "en" ? "text-charcoal" : "text-charcoal/40 hover:text-charcoal/70"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
