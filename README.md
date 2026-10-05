# Nora es Cultura — Nora Bystrowicz

Sitio portfolio bilingüe (español / inglés) de la escultora ceramista Nora Bystrowicz.
Stack: **React 19 + TanStack Start + Vite + Tailwind CSS v4**. Sin Lovable: todo corre con herramientas públicas.

---

## 1. Requisitos

- **Node.js 20 o superior** (recomendado 22) — o **Bun** si preferís.
- Git (opcional, para versionar el proyecto).

## 2. Instalar y ver en local

```bash
npm install        # o: bun install
npm run dev        # abre http://localhost:5173
```

## 3. Producción

```bash
npm run build      # genera .vercel/output
npm run preview    # prueba la versión de producción en local
```

## 4. Dónde se edita cada cosa

| Qué querés cambiar | Dónde |
|---|---|
| Textos, títulos, obras, biografía (ES/EN) | `src/lib/content.ts` |
| Agregar una obra nueva | `src/lib/content.ts` → array `artworks` (se agrega sola a la galería) |
| Fotos de obras | `public/images/` (versiones `.webp` y `.avif` optimizadas) |
| Video del hero | `public/videos/hero.mp4` y `hero.webm` |
| Colores, tipografías, espaciados | `src/styles.css` |
| Secciones / estructura de la página | `src/routes/index.tsx` |
| Menú, íconos sociales | `src/components/Nav.tsx` |
| Botón flotante de WhatsApp | `src/components/FloatingWhatsApp.tsx` |
| Teléfono de WhatsApp | `src/components/FloatingWhatsApp.tsx` y `Nav.tsx` |
| Instagram embebido | `src/routes/index.tsx` (bloque de embed) |

### Optimizar imágenes nuevas

```bash
node scripts/optimize-images.mjs
```
Convierte las originales de `scripts/source-images/` a `.webp` + `.avif` en varios tamaños.
Necesita `sharp` (ya está en devDependencies).

## 5. Desplegar en Vercel

1. Subí el proyecto a un repositorio de GitHub (o GitLab).
2. En Vercel: **Add New → Project → Import** ese repositorio.
3. En **Framework Preset** elegí **Other**.
4. **Build Command**: `npm run build`
5. **Output Directory**: `.vercel/output`
6. Deploy.

El archivo `vercel.json` ya configura caché agresiva para imágenes y assets.
Alternativa sin GitHub: `npm run build && npx nitro deploy --prebuilt`.

## 6. Dominio propio

En Vercel: **Settings → Domains → Add** tu dominio (ej. `noraescultura.com`).
Vercel te da los registros DNS (CNAME/A) para configurar en tu registrador.
HTTPS se activa solo una vez apuntado el DNS.

## 7. Idiomas

El sitio arranca en español y se cambia a inglés con el selector del menú.
Todo el contenido vive en `src/lib/content.ts`, así que agregar textos o una
tercera lengua no requiere tocar los componentes.

---

## English (summary)

React 19 + TanStack Start + Vite + Tailwind v4, fully standalone (no Lovable tooling).

```bash
npm install && npm run dev     # local dev
npm run build                  # production build -> .vercel/output
```

Deploy on Vercel: import the repo, Framework Preset **Other**,
Build Command `npm run build`, Output Directory `.vercel/output`.
All copy lives in `src/lib/content.ts`; images in `public/images`, hero video in `public/videos`.
