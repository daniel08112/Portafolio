import { useRef, type CSSProperties, type PointerEvent } from 'react';
import foto from '../assets/foto.jpg';
import { contact, hero, mrz, passportFields } from '../data/content';
import { useLang } from '../i18n';

const delay = (i: number) => ({ '--i': i }) as CSSProperties;

function Passport({ reduceMotion }: { reduceMotion: boolean }) {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const frame = useRef(0);
  const canTilt = () =>
    !reduceMotion && typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || !canTilt()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.classList.add('live');
      el.style.setProperty('--ry', `${((x - 0.5) * 10).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${((0.5 - y) * 8).toFixed(2)}deg`);
      el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.classList.remove('live');
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div className="pp-stage">
      <article ref={ref} className="passport" onPointerMove={onMove} onPointerLeave={onLeave} aria-label={t({ es: 'Ficha de datos personales', en: 'Personal data page' })}>
        <div className="pp-head">
          <span>Developer Passport</span>
          <span>{t({ es: 'Hoja de datos', en: 'Data page' })}</span>
        </div>
        <div className="pp-body">
          <div className="photo has-img">
            <img src={foto} alt="Daniel Guzmán" width={480} height={600} />
          </div>
          <dl className="fields">
            {passportFields.map((f) => (
              <div key={f.label.es} className={f.full ? 'full' : undefined}>
                <dt>{t(f.label)}</dt>
                <dd className={f.ok ? 'ok' : undefined}>{t(f.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mrz" aria-hidden="true">
          {mrz[0]}
          <br />
          {mrz[1]}
        </div>
      </article>
    </div>
  );
}

export function Hero({ reduceMotion }: { reduceMotion: boolean }) {
  const { t } = useLang();
  return (
    <div className="wrap" id="inicio">
      <div className="hero">
        <div>
          <div className="eyebrow rise" style={delay(0)}>{t(hero.eyebrow)}</div>
          <h1 className="rise" style={delay(1)}>
            Daniel Guzmán<span className="sub">{t(hero.subtitle)}</span>
          </h1>
          <p className="lede rise" style={delay(2)}>{t(hero.lede)}</p>
          <div className="cta rise" style={delay(3)}>
            <a className="btn primary" href="#contacto">
              {t({ es: 'Contactarme', en: 'Get in touch' })}
              <span className="arr" aria-hidden="true">→</span>
            </a>
            <a className="btn ghost" href="#proyectos">{t({ es: 'Ver mis proyectos', en: 'See my projects' })}</a>
          </div>
          <div className="social-mini rise" style={delay(4)}>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${contact.email}`}>{t({ es: 'Correo', en: 'Email' })}</a>
          </div>
        </div>
        <Passport reduceMotion={reduceMotion} />
      </div>
    </div>
  );
}
