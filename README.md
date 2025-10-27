# 🌐 CrearMedia México — Sitio Web Oficial

Desarrollo del sitio web de **CrearMedia México**, construido con **Astro**, **TailwindCSS** y **GSAP**, optimizado para **rendimiento, accesibilidad y SEO**.  
El sitio se publica en dos entornos:  
- **Staging:** [`crearmediaprueba.com`](https://crearmediaprueba.com) → rama `develop`  
- **Producción:** [`crearmedia.com`](https://crearmedia.com) → rama `main`

---

## 🚀 Stack Técnico

- [Astro](https://astro.build/) — Framework principal (Static Site Generation).
- [TailwindCSS](https://tailwindcss.com/) — Sistema de estilos utilitario.
- [GSAP](https://gsap.com/) — Animaciones y microinteracciones.
- [Markdown / JSON] — Gestión de contenido editable.
- [Hostinger Business] — Infraestructura de hosting y despliegue.
- [GitHub Actions](https://github.com/features/actions) — CI/CD automatizado vía FTP.

---

## 🧱 Estructura del Proyecto

---

/
├─ src/
│ ├─ components/ # Componentes Astro/Tailwind
│ ├─ content/ # Contenido en Markdown (blogs/eventos)
│ │ ├─ blog/
│ │ └─ events/
│ ├─ data/ # Contenido JSON (Home, Servicios, Acerca)
│ ├─ layouts/
│ ├─ pages/
│ └─ styles/
├─ public/ # Archivos estáticos (imágenes, favicons)
├─ .github/workflows/ # CI/CD y plantillas de PR/issues
├─ package.json
├─ astro.config.mjs
├─ tailwind.config.cjs
├─ commitlint.config.cjs
├─ .editorconfig
├─ .gitignore
├─ LICENSE
└─ README.md

---

## 🧩 Contenido Editable

### JSON (`src/data/`)
Usado para **Home**, **Servicios**, **Acerca de nosotros**.  
> El cliente puede actualizar estos archivos sin tocar el código.

Ejemplo:
```json
{
  "title": "Marketing Digital",
  "description": "Estrategias que impulsan tu marca en línea",
  "image": "/img/servicios/marketing-digital.jpg"
}