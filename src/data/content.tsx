/**
 * Todo el contenido del portafolio vive aquí.
 * Para agregar un proyecto o un certificado, añade un objeto a `projects` o `certificates`.
 * Cada texto tiene su versión en español (es) y en inglés (en).
 */
import type { ReactNode } from 'react';
import type { Localized } from '../i18n';
import type { JsonValue } from '../components/JsonView';

export const contact = {
  email: 'daniellguzman081@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jorge-daniel-guzman-moedano-729889231',
  linkedinName: 'Jorge Daniel Guzmán',
};

export const nav: { id: string; label: Localized; hideSm?: boolean }[] = [
  { id: 'resumen', label: { es: 'Resumen', en: 'Summary' }, hideSm: true },
  { id: 'skills', label: { es: 'Skills', en: 'Skills' }, hideSm: true },
  { id: 'experiencia', label: { es: 'Experiencia', en: 'Experience' }, hideSm: true },
  { id: 'proyectos', label: { es: 'Proyectos', en: 'Projects' } },
  { id: 'certificados', label: { es: 'Certificados', en: 'Certificates' }, hideSm: true },
  { id: 'contacto', label: { es: 'Contacto', en: 'Contact' } },
];

export const hero = {
  eyebrow: { es: 'Software Developer · Ciudad de México', en: 'Software Developer · Mexico City' },
  subtitle: { es: 'Full Stack con enfoque Back End', en: 'Full Stack, Back End focused' },
  lede: {
    es: <>Desarrollador <b>Full Stack</b>: construyo APIs, diseño <b>bases de datos</b> y despliego en la <b>nube</b>.</>,
    en: <><b>Full Stack</b> developer: I build APIs, design <b>databases</b> and deploy to the <b>cloud</b>.</>,
  } satisfies Localized<ReactNode>,
};

export const passportFields: { label: Localized; value: Localized; ok?: boolean; full?: boolean }[] = [
  { label: { es: 'Apellido', en: 'Surname' }, value: { es: 'GUZMÁN', en: 'GUZMÁN' } },
  { label: { es: 'Nombre', en: 'Given name' }, value: { es: 'DANIEL', en: 'DANIEL' } },
  { label: { es: 'Profesión', en: 'Occupation' }, value: { es: 'Ingeniero Informático · Full Stack Developer', en: 'Computer Engineer · Full Stack Developer' }, full: true },
  { label: { es: 'Base', en: 'Based in' }, value: { es: 'CDMX, MÉXICO', en: 'CDMX, MEXICO' } },
  { label: { es: 'Idiomas', en: 'Languages' }, value: { es: 'Español · Inglés', en: 'Spanish · English' } },
  { label: { es: 'Visa', en: 'Visa' }, value: { es: 'Vigente', en: 'Valid' }, ok: true },
  { label: { es: 'Movilidad', en: 'Mobility' }, value: { es: 'Internacional', en: 'International' }, ok: true },
];

export const mrz = ['DEV<MEXGUZMAN<<DANIEL<<<<<<<<<<<<<<<<<<<<<', 'JAVA<PYTHON<REACT<GCP<<OPEN<TO<RELOCATE<<<'];

export const summary = {
  title: { es: 'Mi perfil en una sola respuesta', en: 'My profile in one response' },
  body: {
    es: <>Soy <b>Desarrollador Full Stack y Analista de Software</b>. Uso lo que aprendí en la ingeniería y en el trabajo en fintech e industria para crear funcionalidades nuevas, automatizar tareas y mantener datos bien estructurados. Trabajo en equipo con <b>Scrum</b>, organizo el trabajo en <b>Jira</b> y manejo ramas con <b>Git</b>.</>,
    en: <>I'm a <b>Full Stack Developer and Software Analyst</b>. I apply what I learned in engineering school and in fintech and manufacturing roles to ship new features, automate tasks and keep data well structured. I work in <b>Scrum</b> teams, track work in <b>Jira</b> and manage branches with <b>Git</b>.</>,
  } satisfies Localized<ReactNode>,
  legend: [
    { key: { es: 'backend', en: 'backend' }, text: { es: 'Frameworks para APIs y servicios', en: 'Frameworks for APIs and services' } },
    { key: { es: 'datos', en: 'data' }, text: { es: 'PostgreSQL: diseño de tablas, consultas y mapeo', en: 'PostgreSQL: table design, queries and mapping' } },
    { key: { es: 'cloud', en: 'cloud' }, text: { es: 'GCP como principal; también AWS, Vercel y Railway', en: 'GCP first; also AWS, Vercel and Railway' } },
    { key: { es: 'git', en: 'git' }, text: { es: 'Manejo de ramas, merges y pull requests en GitHub', en: 'Branching, merges and pull requests on GitHub' } },
    { key: { es: 'scrum', en: 'scrum' }, text: { es: 'Sprints, reuniones diarias (dailies) y tablero de tareas en Jira', en: 'Sprints, daily stand-ups and task boards in Jira' } },
  ] as { key: Localized; text: Localized }[],
};

export const profileJson: Localized<JsonValue> = {
  es: {
    nombre: 'Daniel Guzmán',
    rol: 'Full Stack · enfoque Back End',
    ubicacion: 'CDMX, México',
    lenguajes: ['Java', 'Python', 'JavaScript'],
    backend: { java: ['Spring Boot', 'Struts', 'MyBatis'], python: ['Django', 'Flask'] },
    datos: ['PostgreSQL', 'SQL', 'MyBatis'],
    frontend: ['React', 'HTML', 'CSS', 'Tailwind', 'Bootstrap'],
    cloud: { principal: 'GCP', otras: ['AWS S3', 'CloudWatch', 'Vercel', 'Railway', 'PythonAnywhere'] },
    control_versiones: { git: 'manejo de ramas', repos: 'GitHub' },
    metodologia: 'Scrum',
    herramientas: ['Jira', 'Postman'],
    idiomas: ['Español', 'Inglés'],
    visa_vigente: true,
    reubicacion: 'internacional',
    disponible: true,
  },
  en: {
    name: 'Daniel Guzmán',
    role: 'Full Stack · Back End focus',
    location: 'Mexico City, MX',
    languages: ['Java', 'Python', 'JavaScript'],
    backend: { java: ['Spring Boot', 'Struts', 'MyBatis'], python: ['Django', 'Flask'] },
    data: ['PostgreSQL', 'SQL', 'MyBatis'],
    frontend: ['React', 'HTML', 'CSS', 'Tailwind', 'Bootstrap'],
    cloud: { main: 'GCP', others: ['AWS S3', 'CloudWatch', 'Vercel', 'Railway', 'PythonAnywhere'] },
    version_control: { git: 'branching', repos: 'GitHub' },
    methodology: 'Scrum',
    tools: ['Jira', 'Postman'],
    spoken: ['Spanish', 'English'],
    valid_visa: true,
    relocation: 'international',
    available: true,
  },
};

export type Skill = { sym: string; name: string; main?: boolean };
export const skillGroups: { title: Localized; items: Skill[] }[] = [
  { title: { es: 'Lenguajes', en: 'Languages' }, items: [{ sym: 'Jv', name: 'Java' }, { sym: 'Py', name: 'Python' }, { sym: 'Js', name: 'JavaScript' }] },
  { title: { es: 'Bases de datos', en: 'Databases' }, items: [{ sym: 'Pg', name: 'PostgreSQL' }, { sym: 'Sq', name: 'SQL' }] },
  { title: { es: 'Frameworks Back End', en: 'Back End frameworks' }, items: [{ sym: 'Sb', name: 'Spring Boot' }, { sym: 'Dj', name: 'Django' }, { sym: 'Fl', name: 'Flask' }, { sym: 'St', name: 'Struts' }, { sym: 'Mb', name: 'MyBatis' }] },
  { title: { es: 'Front End', en: 'Front End' }, items: [{ sym: 'Re', name: 'React' }, { sym: 'Tw', name: 'Tailwind' }, { sym: 'Bs', name: 'Bootstrap' }, { sym: 'Ht', name: 'HTML' }, { sym: 'Cs', name: 'CSS' }] },
  { title: { es: 'Nube', en: 'Cloud' }, items: [{ sym: 'Gc', name: 'GCP', main: true }, { sym: 'Aw', name: 'AWS' }, { sym: 'Vc', name: 'Vercel' }, { sym: 'Rw', name: 'Railway' }, { sym: 'Pa', name: 'PythonAnywhere' }] },
  { title: { es: 'Herramientas', en: 'Tools' }, items: [{ sym: 'Gt', name: 'Git' }, { sym: 'Gh', name: 'GitHub' }, { sym: 'Jr', name: 'Jira' }, { sym: 'Pm', name: 'Postman' }] },
  { title: { es: 'Metodologías', en: 'Methodologies' }, items: [{ sym: 'Sc', name: 'Scrum' }] },
];

export type Job = {
  company: string;
  role: Localized;
  place: string;
  dates: Localized;
  tag?: Localized;
  current?: boolean;
  bullets: Localized<string[]>;
};
export const jobs: Job[] = [
  {
    company: 'Industrias de Hule Galgo',
    role: { es: 'Full Stack Developer · enfoque Back End', en: 'Full Stack Developer · Back End focus' },
    place: 'Del Valle, CDMX',
    dates: { es: 'Ene 2026 – Hoy', en: 'Jan 2026 – Present' },
    tag: { es: 'Actual', en: 'Current' },
    current: true,
    bullets: {
      es: ['Desarrollo e implementación de nuevas funcionalidades, incluyendo APIs y procesos de automatización.', 'Creación y gestión de bases de datos.'],
      en: ['Build and ship new features, including APIs and automation processes.', 'Create and manage databases.'],
    },
  },
  {
    company: 'Maxikash',
    role: { es: 'Analista de Software / Full Stack Developer', en: 'Software Analyst / Full Stack Developer' },
    place: 'Lomas de Chapultepec, CDMX',
    dates: { es: 'Feb 2025 – Ene 2026', en: 'Feb 2025 – Jan 2026' },
    tag: { es: 'Fintech', en: 'Fintech' },
    bullets: {
      es: ['Desarrollo e implementación de nuevas funcionalidades, incluyendo APIs y procesos de automatización.', 'Mantenimiento, mejora y gestión de bases de datos.', 'Diseño y creación de nuevas tablas y estructuras de información.'],
      en: ['Built and shipped new features, including APIs and automation processes.', 'Maintained, improved and managed databases.', 'Designed and created new tables and data structures.'],
    },
  },
];

export type Project = {
  name: string;
  description: Localized;
  tech: string[];
  repo?: string;
  demo?: string;
};
/**
 * Ejemplo para agregar un proyecto:
 * {
 *   name: 'API de inventarios',
 *   description: { es: 'API REST para controlar entradas y salidas de almacén.', en: 'REST API to track warehouse stock.' },
 *   tech: ['Spring Boot', 'PostgreSQL', 'GCP'],
 *   repo: 'https://github.com/daniel08112/inventarios',
 *   demo: 'https://inventarios.vercel.app',
 * },
 */
export const projects: Project[] = [];

export type Certificate = {
  name: Localized;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
};
/**
 * Ejemplo para agregar un certificado:
 * { name: { es: 'Nombre del curso', en: 'Course name' }, issuer: 'Plataforma', date: '2026', credentialId: 'ABC123', url: 'https://...' },
 */
export const certificates: Certificate[] = [];

export const mobility: { title: Localized; text: Localized }[] = [
  { title: { es: 'Visa vigente', en: 'Valid visa' }, text: { es: 'Cuento con visa vigente para viajar.', en: 'I hold a valid visa to travel.' } },
  { title: { es: 'Reubicación', en: 'Relocation' }, text: { es: 'Dispuesto a mudarme fuera de México.', en: 'Willing to move outside Mexico.' } },
  { title: { es: 'Modalidad', en: 'Work mode' }, text: { es: 'Remoto, híbrido o presencial.', en: 'Remote, hybrid or on-site.' } },
];

export const education = {
  degree: { es: 'Ingeniería Informática', en: 'B.S. Computer Engineering' },
  school: 'Tecnológico de Estudios Superiores de Ixtapaluca · Ixtapaluca, Edo. Méx.',
  dates: { es: 'Ago 2020 – 2025', en: 'Aug 2020 – 2025' },
};
