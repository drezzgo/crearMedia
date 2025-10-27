# CrearMedia México - Sitio Web Oficial

Sitio web oficial de CrearMedia México, desarrollado con Astro, TailwindCSS y GSAP.

## 🚀 Tecnologías

- **[Astro](https://astro.build/)**: Framework web moderno para sitios de alto rendimiento
- **[TailwindCSS](https://tailwindcss.com/)**: Framework CSS utility-first
- **[GSAP](https://greensock.com/gsap/)**: Librería de animaciones profesionales
- **[MDX](https://mdxjs.com/)**: Markdown con componentes JSX

## 📁 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── content/         # Contenido en Markdown
│   │   ├── blogs/       # Artículos del blog
│   │   └── eventos/     # Eventos y workshops
│   ├── data/            # Contenido en JSON
│   │   ├── home.json    # Contenido de la página de inicio
│   │   ├── servicios.json # Contenido de servicios
│   │   └── acerca.json  # Contenido de acerca de
│   ├── layouts/         # Layouts de páginas
│   └── pages/           # Páginas del sitio
│       ├── index.astro
│       ├── servicios.astro
│       ├── acerca.astro
│       ├── blogs.astro
│       ├── blogs/[slug].astro
│       ├── eventos.astro
│       └── eventos/[slug].astro
├── astro.config.mjs     # Configuración de Astro
├── tailwind.config.mjs  # Configuración de Tailwind
└── package.json
```

## 🎯 Gestión de Contenido

### Contenido JSON (Home, Servicios, Acerca)

Los archivos JSON en `src/data/` controlan el contenido de las páginas principales:

- **`home.json`**: Hero, sección about, servicios destacados
- **`servicios.json`**: Lista completa de servicios con descripciones y características
- **`acerca.json`**: Misión, visión, valores y equipo

### Contenido Markdown (Blogs, Eventos)

Los archivos Markdown en `src/content/` usan frontmatter YAML para metadata:

**Blogs** (`src/content/blogs/`):
```yaml
---
title: "Título del artículo"
description: "Descripción breve"
pubDate: 2025-01-15
author: "Autor"
image: "/images/blog/imagen.jpg"
tags: ["tag1", "tag2"]
---
```

**Eventos** (`src/content/eventos/`):
```yaml
---
title: "Nombre del evento"
description: "Descripción del evento"
date: 2025-03-15
location: "Ubicación"
time: "18:00 - 20:00"
type: "workshop" # workshop, meetup, webinar, conference
image: "/images/eventos/imagen.jpg"
---
```

## 🔄 Flujo de Git

### Ramas

- **`main`**: Producción (https://crearmedia.com)
- **`develop`**: Staging (https://crearmediaprueba.com)
- **`feature/*`**: Ramas de características

### Proceso de Desarrollo

1. Crear rama desde `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/nombre-caracteristica
   ```

2. Hacer cambios y commits siguiendo convención:
   ```bash
   git add .
   git commit -m "feat: agregar nueva característica"
   ```

3. Push y crear Pull Request:
   ```bash
   git push origin feature/nombre-caracteristica
   ```

4. Crear PR hacia `develop` para staging
5. Después de validación en staging, crear PR de `develop` a `main` para producción

### Convención de Commits

Los commits deben seguir el formato: `<tipo>: <descripción>`

**Tipos permitidos:**
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `content`: Cambios de contenido (JSON/Markdown)
- `style`: Cambios de estilos/diseño
- `refactor`: Refactorización de código
- `chore`: Tareas de mantenimiento
- `docs`: Documentación
- `test`: Tests
- `ci`: Configuración de CI

**Ejemplos:**
```bash
git commit -m "feat: agregar página de contacto"
git commit -m "fix: corregir enlace roto en navbar"
git commit -m "content: actualizar artículo sobre SEO"
git commit -m "style: mejorar diseño responsive del hero"
```

## 📝 Pull Requests

Cada PR debe incluir:

1. **Descripción clara** de los cambios
2. **Lista de archivos de contenido afectados** (JSON/Markdown)
3. **Análisis de impacto SEO**:
   - ¿Se modificaron títulos o meta descripciones?
   - ¿Se agregaron/modificaron/eliminaron páginas?
   - ¿Se cambiaron URLs?
   - ¿Se modificó contenido importante para palabras clave?

El template de PR guiará este proceso automáticamente.

## 🛠️ Comandos

### Desarrollo
```bash
npm run dev          # Iniciar servidor de desarrollo
npm run start        # Alias de dev
```

### Build y Deploy
```bash
npm run build        # Compilar para producción
npm run preview      # Previsualizar build de producción
```

### Validación
```bash
npm run astro check  # Verificar tipos TypeScript
```

## ✨ Características Principales

### Performance
- ✅ Static Site Generation (SSG)
- ✅ Optimización automática de imágenes
- ✅ CSS y JS mínimos
- ✅ Lazy loading

### SEO
- ✅ Meta tags optimizados
- ✅ Open Graph tags
- ✅ URLs semánticas
- ✅ Sitemap automático
- ✅ Contenido estructurado

### Accesibilidad
- ✅ HTML semántico
- ✅ ARIA labels
- ✅ Contraste de colores adecuado
- ✅ Navegación por teclado
- ✅ Theme color configurado

## 🔒 Validación Automática

El proyecto incluye validación automática mediante GitHub Actions:

1. **Validación de commits**: Verifica que los commits sigan la convención
2. **Build**: Comprueba que el proyecto compile correctamente
3. **Content tracking**: Identifica archivos de contenido modificados
4. **SEO check reminder**: Recuerda analizar el impacto SEO

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/drezzgo/crearMedia.git
cd crearMedia

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev
```

## 📄 Licencia

Ver archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request siguiendo el template

---

Desarrollado con ❤️ por CrearMedia México
