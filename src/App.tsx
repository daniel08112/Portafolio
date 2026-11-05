import { useCallback, useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Certificates, Contact, Education, Experience, Mobility, Projects, Skills, Summary } from './components/Sections';
import { useReducedMotion } from './hooks/useDom';
import { useTheme } from './hooks/useTheme';
import { useLang, type Lang } from './i18n';

function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div className={`toast${visible ? ' show' : ''}`} role="status" aria-live="polite">
      <i aria-hidden="true">✓</i>
      <span>{message}</span>
    </div>
  );
}

export default function App() {
  const { lang, setLang } = useLang();
  const reduceMotion = useReducedMotion();
  const { theme, toggle } = useTheme(reduceMotion);
  const [swapping, setSwapping] = useState(false);
  const [toast, setToast] = useState({ message: '', visible: false });
  const toastTimer = useRef(0);

  // Cambio de idioma con un fundido breve.
  const changeLang = useCallback(
    (next: Lang) => {
      if (next === lang) return;
      if (reduceMotion) {
        setLang(next);
        return;
      }
      setSwapping(true);
      window.setTimeout(() => {
        setLang(next);
        requestAnimationFrame(() => setSwapping(false));
      }, 80);
    },
    [lang, reduceMotion, setLang],
  );

  const notify = useCallback((message: string) => {
    window.clearTimeout(toastTimer.current);
    setToast({ message, visible: true });
    toastTimer.current = window.setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2200);
  }, []);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  return (
    <div id="app" className={swapping ? 'swapping' : undefined}>
      <Header onLangChange={changeLang} theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero reduceMotion={reduceMotion} />
        <Summary reduceMotion={reduceMotion} />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Mobility />
        <Education />
        <Contact notify={notify} />
      </main>
      <footer className="wrap">
        <span>© {new Date().getFullYear()} Daniel Guzmán · CDMX</span>
        <span>React + TypeScript · {lang.toUpperCase()}</span>
      </footer>
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}
