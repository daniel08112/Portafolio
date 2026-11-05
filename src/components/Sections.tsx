import { useRef, useState, type ReactNode } from 'react';
import {
  certificates,
  contact,
  education,
  jobs,
  mobility,
  profileJson,
  projects,
  skillGroups,
  summary,
} from '../data/content';
import { useLang, type Localized } from '../i18n';
import { JsonView } from './JsonView';

const pad2 = (n: number) => String(n).padStart(2, '0');

function Section({ id, n, label, children }: { id: string; n: number; label: Localized; children: ReactNode }) {
  const { t } = useLang();
  return (
    <section id={id}>
      <div className="wrap sh">
        <div className="pg">
          <b>{pad2(n)}</b>
          {t(label)}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

/* ---------- 01 Resumen ---------- */
export function Summary({ reduceMotion }: { reduceMotion: boolean }) {
  const { t, lang } = useLang();
  const [state, setState] = useState<'idle' | 'loading' | 'reveal'>('idle');
  const [ms, setMs] = useState(42);
  const [run, setRun] = useState(0);
  const timer = useRef<number>(0);

  const resend = () => {
    window.clearTimeout(timer.current);
    setState('loading');
    timer.current = window.setTimeout(
      () => {
        setMs(28 + Math.round(Math.random() * 30));
        setRun((r) => r + 1);
        setState('reveal');
      },
      reduceMotion ? 0 : 180 + Math.round(Math.random() * 160),
    );
  };

  return (
    <Section id="resumen" n={1} label={{ es: 'Resumen técnico', en: 'Tech summary' }}>
      <div className="json-wrap">
        <div>
          <h2>{t(summary.title)}</h2>
          <p className="prose">{t(summary.body)}</p>
          <div className="legend">
            {summary.legend.map((row) => (
              <div key={row.key.es}>
                <span>{t(row.key)}</span>
                <span>{t(row.text)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={`api${state === 'loading' ? ' loading' : ''}${state === 'reveal' ? ' reveal' : ''}`}>
          <div className="api-head">
            <span>
              <span className="v">GET</span> /api/v1/developers/daniel-guzman
            </span>
            <span className="api-meta">
              <span className="c">200 OK</span>
              <span className="ms">{state === 'loading' ? '…' : `${ms} ms`}</span>
              <button className="send" type="button" onClick={resend}>
                {t({ es: 'Enviar ↻', en: 'Send ↻' })}
              </button>
            </span>
          </div>
          <JsonView
            key={`${lang}-${run}`}
            value={t(profileJson)}
            label={t({ es: 'Perfil técnico en formato JSON', en: 'Tech profile as JSON' })}
          />
        </div>
      </div>
    </Section>
  );
}

/* ---------- 02 Skills ---------- */
export function Skills() {
  const { t } = useLang();
  return (
    <Section id="skills" n={2} label={{ es: 'Skills', en: 'Skills' }}>
      <h2>{t({ es: 'Tecnologías que uso', en: 'Technologies I use' })}</h2>
      <p className="prose">
        {t({
          es: 'Mi stack actual, separado por lenguajes, bases de datos, frameworks, nube, herramientas y metodologías.',
          en: 'My current stack, grouped by languages, databases, frameworks, cloud, tools and methodologies.',
        })}
      </p>
      <div className="sk">
        {skillGroups.map((g) => (
          <div className="sk-group" key={g.title.es}>
            <h3>
              {t(g.title)}
              <span className="cnt">{pad2(g.items.length)}</span>
            </h3>
            <ul className="tiles">
              {g.items.map((s) => (
                <li key={s.name} className={`tile${s.main ? ' main' : ''}`}>
                  <span className="t-sym" aria-hidden="true">{s.sym}</span>
                  <span className="t-name">{s.name}</span>
                  {s.main && <span className="t-main">{t({ es: 'Principal', en: 'Main' })}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 03 Experiencia ---------- */
export function Experience() {
  const { t } = useLang();
  return (
    <Section id="experiencia" n={3} label={{ es: 'Experiencia', en: 'Experience' }}>
      <h2>{t({ es: 'Dónde he trabajado', en: "Where I've worked" })}</h2>
      <ol className="trips">
        {jobs.map((j) => (
          <li className="trip" key={j.company}>
            <div className="entry">
              <span>{t(j.dates)}</span>
              {j.tag && <span className={`tagx${j.current ? ' live' : ''}`}>{t(j.tag)}</span>}
            </div>
            <div>
              <h3>{j.company}</h3>
              <p className="role">{t(j.role)}</p>
              <p className="place">{j.place}</p>
              <ul>
                {t(j.bullets).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------- 04 Proyectos ---------- */
function Placeholder({ code, title, text, badge }: { code: string; title: string; text: string; badge: string }) {
  return (
    <article className="slot">
      <span className="n">{code}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="soon">{badge}</span>
    </article>
  );
}

export function Projects() {
  const { t } = useLang();
  return (
    <Section id="proyectos" n={4} label={{ es: 'Mis proyectos', en: 'My projects' }}>
      <h2>{t({ es: 'Mis proyectos', en: 'My projects' })}</h2>
      <p className="prose">
        {t({ es: 'Una selección de lo que he construido, con enlace al código y a la demo.', en: "A selection of things I've built, with links to the code and live demo." })}
      </p>
      <div className="grid3">
        {projects.length === 0
          ? [1, 2, 3].map((i) => (
              <Placeholder
                key={i}
                code={`PRJ-${pad2(i)}`}
                title={t({ es: 'Próximamente', en: 'Coming soon' })}
                text={t({ es: 'Proyecto en preparación.', en: 'Project being prepared.' })}
                badge={t({ es: 'En preparación', en: 'In progress' })}
              />
            ))
          : projects.map((p, i) => (
              <article className="slot proj-card" key={p.name}>
                <span className="n">PRJ-{pad2(i + 1)}</span>
                <h3>{p.name}</h3>
                <p>{t(p.description)}</p>
                <ul className="chips-sm">
                  {p.tech.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="card-links">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer">
                      {t({ es: 'Código', en: 'Code' })} ↗
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      Demo ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
      </div>
    </Section>
  );
}

/* ---------- 05 Certificados ---------- */
export function Certificates() {
  const { t } = useLang();
  const labels = {
    issuer: t({ es: 'Emisor', en: 'Issuer' }),
    date: t({ es: 'Fecha', en: 'Date' }),
  };
  const items =
    certificates.length === 0
      ? [1, 2, 3].map((i) => ({ key: `p${i}`, code: `CERT-${pad2(i)}`, name: t({ es: 'Certificado por agregar', en: 'Certificate to be added' }), issuer: '—', date: '—', id: '—', url: undefined as string | undefined }))
      : certificates.map((c, i) => ({ key: c.issuer + i, code: `CERT-${pad2(i + 1)}`, name: t(c.name), issuer: c.issuer, date: c.date, id: c.credentialId ?? '—', url: c.url }));

  return (
    <Section id="certificados" n={5} label={{ es: 'Certificados', en: 'Certificates' }}>
      <h2>{t({ es: 'Certificados y cursos', en: 'Certificates and courses' })}</h2>
      <p className="prose">
        {t({ es: 'Credenciales que respaldan mi formación, con su enlace de verificación.', en: 'Credentials that back up my training, each with its verification link.' })}
      </p>
      <div className="grid3">
        {items.map((c) => (
          <article className="slot cert" key={c.key}>
            <span className="seal" aria-hidden="true" />
            <span className="n">{c.code}</span>
            <h3>{c.name}</h3>
            <dl>
              <dt>{labels.issuer}</dt>
              <dd>{c.issuer}</dd>
              <dt>{labels.date}</dt>
              <dd>{c.date}</dd>
              <dt>ID</dt>
              <dd>{c.id}</dd>
            </dl>
            {c.url && (
              <div className="card-links">
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                  {t({ es: 'Verificar', en: 'Verify' })} ↗
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 06 Movilidad ---------- */
export function Mobility() {
  const { t } = useLang();
  return (
    <Section id="movilidad" n={6} label={{ es: 'Movilidad', en: 'Mobility' }}>
      <h2>{t({ es: 'Listo para trabajar en otro país', en: 'Ready to work abroad' })}</h2>
      <div className="route" aria-label={t({ es: 'De Ciudad de México a cualquier destino', en: 'From Mexico City to anywhere' })}>
        <div className="iata">
          MEX<small>CDMX · MÉXICO</small>
        </div>
        <div className="path" aria-hidden="true">
          <svg viewBox="0 0 300 40" preserveAspectRatio="none">
            <path className="dash" d="M4 30 Q150 -8 296 30" />
          </svg>
        </div>
        <div className="iata to">
          ANY<small>{t({ es: 'TU EMPRESA', en: 'YOUR COMPANY' })}</small>
        </div>
      </div>
      <div className="mob">
        {mobility.map((m) => (
          <div key={m.title.es}>
            <b>{t(m.title)}</b>
            <span>{t(m.text)}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 07 Educación ---------- */
export function Education() {
  const { t } = useLang();
  return (
    <section id="educacion">
      <div className="wrap sh">
        <div className="pg">
          <b>07</b>
          {t({ es: 'Educación', en: 'Education' })}
        </div>
        <div className="edu">
          <div>
            <h3>{t(education.degree)}</h3>
            <p>{education.school}</p>
          </div>
          <div className="entry">
            <span>{t(education.dates)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contacto ---------- */
export function Contact({ notify }: { notify: (msg: string) => void }) {
  const { t } = useLang();
  const emailRef = useRef<HTMLSpanElement>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      notify(t({ es: 'Correo copiado', en: 'Email copied' }));
    } catch {
      const el = emailRef.current;
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      notify(t({ es: 'Texto seleccionado. Presiona Ctrl+C para copiar', en: 'Text selected. Press Ctrl+C to copy' }));
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="wrap">
        <div>
          <div className="pg">{t({ es: 'Contacto', en: 'Contact' })}</div>
          <h2>{t({ es: '¿Buscas un desarrollador Back End?', en: 'Looking for a Back End developer?' })}</h2>
          <p className="prose">
            {t({
              es: 'Tengo visa vigente y disponibilidad para trabajar en otro país. Escríbeme por correo o por LinkedIn.',
              en: "I hold a valid visa and I'm available to work abroad. Reach me by email or on LinkedIn.",
            })}
          </p>
        </div>
        <div className="lines">
          <div className="line">
            <div>
              <small>{t({ es: 'Correo', en: 'Email' })}</small>
              <span className="val" ref={emailRef}>{contact.email}</span>
            </div>
            <button className="copy" type="button" onClick={copyEmail}>
              {t({ es: 'Copiar', en: 'Copy' })}
            </button>
          </div>
          <div className="socials">
            <a className="soc" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <small>LinkedIn</small>
              <span>{contact.linkedinName}</span>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
