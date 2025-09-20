# Inka Walker — Sitio Web de Turismo

Inka Walker es una aplicación web de turismo enfocada en paquetes para viajes de promoción y grupos estudiantiles en Perú. Construida con React + Vite + TypeScript y Tailwind CSS, integra galerías de fotos, páginas de detalle de tours y navegación SPA.

## ✨ Características
- SPA con React Router (rutas de paquetes y detalles de tour)
- Hero con imagen de fondo y overlay
- Galerías de fotos con PhotoSwipe (masonry + lightbox)
- Scroll al inicio en cada navegación
- Favicon y color del navegador dinámicos (según tema del sistema)
- Secciones: Hero, Servicios, Paquetes, Contacto y Footer

## 🧱 Stack Tecnológico
- React 18 (canary/experimental) y React DOM
- Vite 5
- TypeScript 5
- Tailwind CSS 3
- React Router DOM 7
- Lucide Icons
- PhotoSwipe (con wrapper simple)

## 📂 Estructura del Proyecto
```
inka_walker/
├─ public/
│  ├─ images/           # Imágenes de tours (rutas /images/...)
│  ├─ favicon-*.svg     # Favicons por tema
│  └─ LOGO*.png
├─ src/
│  ├─ components/       # UI: Hero, Navigation, Services, TourPackages, etc.
│  ├─ data/             # Fuente de datos de tours (tourData.ts)
│  ├─ pages/            # Páginas: HomePage, TourDetailPage, etc.
│  ├─ shared/           # Utilidades compartidas (ScrollToTop, ViewTransition, Gallery)
│  ├─ lib/              # Integraciones (PhotoSwipe)
│  ├─ index.css         # Tailwind + estilos globales
│  └─ main.tsx          # Bootstrap React + Router
├─ index.html           # HTML base + favicons y meta theme-color
├─ vite.config.ts       # Configuración de Vite
├─ tailwind.config.js   # Configuración Tailwind
├─ eslint.config.js     # ESLint (TS + React Hooks)
├─ tsconfig*.json       # TypeScript configs
└─ package.json         # Scripts y dependencias
```

## 🚀 Puesta en Marcha
Requisitos: Node 18+ (o Bun), PNPM/NPM/Yarn.

- Desarrollo (Vite):
  - con NPM: `npm run dev`
  - con Bun: `bun run dev`
- Lint: `npm run lint`
- Build producción: `npm run build`
- Preview build: `npm run preview`

> Nota: El proyecto incluye dependencias marcadas "experimental" (React y eslint-plugin-react-hooks). Si ves advertencias, puedes fijar versiones estables cuando desees congelar producción.

## 🖼️ Gestión de Imágenes
- Todas las imágenes públicas viven en `public/images` y se referencian con rutas absolutas `/images/...`.
- Las galerías de cada tour están en `src/data/tourData.ts` en la propiedad `gallery`.
- Recomendación: mantener `image` (thumbnail) y `heroImage` también con rutas locales para consistencia.

## 🗺️ Datos de Tours (tourData.ts)
Cada tour sigue esta interfaz:
- id, title, subtitle, price, duration, group, region
- image, heroImage
- highlights, description, fullDescription
- itinerary (array de días con actividades)
- includes, gallery

## 🧭 Navegación y UX
- ScrollToTop asegura que cada navegación comience en la parte superior.
- ViewTransitionWrapper añade transiciones suaves cuando el navegador soporta la API.
- El Hero tiene overlay para mejorar legibilidad del texto.

## 🧩 Componentes Clave
- `Hero.tsx`: cabecera con imagen, título y CTA.
- `Navigation.tsx`: barra de navegación fija.
- `TourPackages.tsx`: tabs (Cusco/Sur/Costa) responsivas y tarjetas de paquetes.
- `TourDetailPage.tsx`: página de detalle con galería PhotoSwipe.
- `shared/simpleGallery.tsx`: grilla masonry + lightbox.

## 🔧 Configuración
- Tailwind: contenido escanea `index.html` y `src/**/*.{js,ts,jsx,tsx}`. Fuente extra `fontFamily.fantasy`.
- Vite: plugin React, `lucide-react` excluido en optimizeDeps.
- ESLint: reglas recomendadas TS + React Hooks + react-refresh.
- TS: modo bundler, strict, sin emisión.

## 📦 Scripts (package.json)
- `dev`: inicia servidor Vite
- `build`: construye para producción
- `preview`: previsualiza la build
- `lint`: ejecuta ESLint

## 🛠️ Desarrollo de Galerías
- PhotoSwipe inicializado desde `lib/photoswipe.ts` y `shared/simpleGallery.tsx`.
- Las grillas usan CSS columns vía Tailwind para efecto masonry.

## 📤 Deploy
- Build estática lista para cualquier hosting de archivos (Netlify, Vercel, GitHub Pages, Nginx, etc.).
- Asegúrate de servir `index.html` con fallback para rutas SPA.

## 🤝 Contribución
1. Crea rama desde `develop`.
2. Ejecuta `npm run lint` antes de subir cambios.
3. Asegura que las rutas de imágenes existan en `public/images`.

## 📄 Licencia
Este proyecto es de uso privado del propietario. Consulta con el autor antes de reutilizar el código o assets.

---

Si necesitas que incluya capturas o una guía rápida de edición de `tourData.ts`, lo agrego en una sección adicional.
