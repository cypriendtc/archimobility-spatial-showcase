import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { pageMetadata, translations, type Language, type TranslationKey } from "./translations";

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string }>({ language: "fr", setLanguage: () => {}, t: (key) => translations.fr[key] });
export const languageStorageKey = "archmobility-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>("fr");
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    try {
      const saved = localStorage.getItem(languageStorageKey);
      if (saved === "fr" || saved === "en") updateLanguage(saved);
    } catch { /* Language selection remains available when storage is blocked. */ }
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    const pages = pageMetadata[language];
    const path = pathname.replace(/\/$/, "") || "/";
    if (!(path in pages)) return;
    const [title, description] = pages[path as keyof typeof pages];
    document.title = title;
    for (const [selector, value] of [["meta[name='description']", description], ["meta[property='og:title']", title], ["meta[property='og:description']", description]]) {
      document.querySelectorAll(selector).forEach((meta) => meta.setAttribute("content", value));
    }
  }, [language, pathname]);
  function setLanguage(next: Language) {
    updateLanguage(next);
    try { localStorage.setItem(languageStorageKey, next); } catch { /* Storage is optional. */ }
  }
  return <LanguageContext.Provider value={{ language, setLanguage, t: (key) => translations[language][key] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }