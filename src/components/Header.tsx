import { nav } from '../data/content';
import { useLang, type Lang } from '../i18n';
import { useActiveSection, useScrolled } from '../hooks/useDom';

type Props = {
  onLangChange: (lang: Lang) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export function Header({ onLangChange, theme, onToggleTheme }: Props) {
  const { lang, t } = useLang();
  const scrolled = useScrolled();
  const active = useActiveSection(nav.map((n) => n.id));
  const dark = theme === 'dark';
  const themeLabel = dark
    ? t({ es: 'Cambiar a modo claro', en: 'Switch to light mode' })
    : t({ es: 'Cambiar a modo oscuro', en: 'Switch to dark mode' });

  return (
    <header className={`top${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap">
        <a className="mark" href="#inicio">
          Daniel<i>/</i>Guzmán
        </a>
        <nav className="nav" aria-label={t({ es: 'Secciones', en: 'Sections' })}>
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={[item.hideSm ? 'hide-sm' : '', active === item.id ? 'active' : ''].join(' ').trim()}
            >
              {t(item.label)}
            </a>
          ))}
          <button type="button" className={`theme${dark ? ' is-dark' : ''}`} onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}>
            <svg className="sun" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4.2" />
              <g>
                <line x1="12" y1="2" x2="12" y2="4.5" />
                <line x1="12" y1="19.5" x2="12" y2="22" />
                <line x1="2" y1="12" x2="4.5" y2="12" />
                <line x1="19.5" y1="12" x2="22" y2="12" />
                <line x1="4.9" y1="4.9" x2="6.7" y2="6.7" />
                <line x1="17.3" y1="17.3" x2="19.1" y2="19.1" />
                <line x1="4.9" y1="19.1" x2="6.7" y2="17.3" />
                <line x1="17.3" y1="6.7" x2="19.1" y2="4.9" />
              </g>
            </svg>
            <svg className="moon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
            </svg>
          </button>
          <div className={`lang${lang === 'en' ? ' is-en' : ''}`} role="group" aria-label="Idioma / Language">
            <span className="pill" aria-hidden="true" />
            {(['es', 'en'] as const).map((l) => (
              <button key={l} type="button" aria-pressed={lang === l} onClick={() => onLangChange(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
