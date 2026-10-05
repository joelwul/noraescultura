import { createContext, useContext, useState, type ReactNode } from "react";
import type { Lang } from "../lib/content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: <T>(o: { es: T; en: T }) => T };

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const t = <T,>(o: { es: T; en: T }): T => o[lang];
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
