# Portafolio · Daniel Guzmán

Portafolio personal bilingüe (ES / EN) hecho con **React 19 + TypeScript + Vite**.
Incluye modo claro/oscuro, resumen técnico en formato JSON, skills por categoría, experiencia, proyectos, certificados y contacto.

## Correr en tu computadora

Necesitas Node.js 20 o superior.

```bash
npm install
npm run dev        # abre http://localhost:5173
```

Otros comandos:

```bash
npm run build      # genera la versión final en /dist
npm run preview    # sirve /dist para revisarla
npm run typecheck  # revisa los tipos de TypeScript
```

## Editar el contenido

Todo el texto está en **`src/data/content.tsx`**. No necesitas tocar los componentes.

- **Agregar un proyecto:** añade un objeto al arreglo `projects`. Arriba del arreglo hay un ejemplo.
- **Agregar un certificado:** añade un objeto al arreglo `certificates`.
- **Cambiar skills, experiencia o el JSON del perfil:** edita `skillGroups`, `jobs` o `profileJson`.
- **Cambiar la foto:** reemplaza `src/assets/foto.jpg`, en formato vertical 4:5.

Cada texto tiene su versión en español (`es`) y en inglés (`en`).

## Estructura

```
src/
  data/content.tsx      contenido del portafolio (ES / EN)
  components/           Header, Hero (pasaporte), Sections, JsonView
  hooks/                tema claro/oscuro, sección activa, movimiento reducido
  i18n.tsx              contexto de idioma
  styles.css            estilos y tokens de color
  assets/foto.jpg
```

## Publicar en Vercel

El archivo `vercel.json` ya le indica a Vercel que es un proyecto de Vite.
Sube el proyecto a GitHub; Vercel lo construye y lo publica solo en cada `push`.
