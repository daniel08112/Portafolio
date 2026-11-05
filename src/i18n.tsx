import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'es' | 'en';
/** Un valor traducido: texto plano o JSX. */
export type Localized<T = string> = { es: T; en: T };

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: <T>(value: Localized<T>) => T;
};

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = 'dg-lang';

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'es';
  if (window.location.hash === '#en') return 'en';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    /* almacenamiento bloqueado: usamos español */
  }
  return 'es';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* sin almacenamiento */
    }
  }, [lang]);

  const t = useCallback(<T,>(value: Localized<T>): T => value[lang], [lang]);

  return <LangContext.Provider value={{ lang, setLang: setLangState, t }}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang debe usarse dentro de <LangProvider>');
  return ctx;
}
