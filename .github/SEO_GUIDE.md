# Guía SEO para CrearMedia

Esta guía describe las mejores prácticas SEO implementadas en el sitio y cómo mantenerlas.

## 📊 SEO Implementado

### Meta Tags
Cada página incluye:
- **Title**: Único y descriptivo (50-60 caracteres)
- **Description**: Descripción concisa (150-160 caracteres)
- **Open Graph**: Para redes sociales (og:title, og:description, og:type)
- **Theme Color**: Para navegadores móviles

### Sitemap
- ✅ Sitemap XML automático generado en cada build
- ✅ Ubicación: `/sitemap-index.xml`
- ✅ Incluye todas las páginas y contenido

### Robots.txt
- ✅ Configurado para permitir rastreo
- ✅ Incluye referencia al sitemap

### URLs Semánticas
- ✅ URLs limpias y descriptivas
- ✅ Sin parámetros complejos
- ✅ Estructura lógica

Ejemplos:
```
/servicios
/blogs/tendencias-diseno-web-2025
/eventos/workshop-astro
```

### Performance
- ✅ Static Site Generation (SSG)
- ✅ HTML semántico
- ✅ CSS y JS optimizados
- ✅ Imágenes optimizadas (cuando se usan)

### Contenido Estructurado
- ✅ Headings jerárquicos (H1 → H2 → H3)
- ✅ HTML semántico (article, section, nav, etc.)
- ✅ Alt text en imágenes

## 📝 Checklist para Nuevo Contenido

### Al Crear/Editar JSON (Home, Servicios, Acerca)

**`home.json`, `servicios.json`, `acerca.json`:**
- [ ] Title único y descriptivo
- [ ] Description de 150-160 caracteres
- [ ] Incluye palabras clave relevantes naturalmente
- [ ] No duplica content de otras páginas

### Al Crear/Editar Blog Post

**Frontmatter requerido:**
```yaml
---
title: "Título SEO-friendly (50-60 caracteres)"
description: "Meta descripción optimizada (150-160 caracteres)"
pubDate: 2025-01-15
author: "Nombre del Autor"
image: "/images/blog/imagen-optimizada.jpg"  # Opcional
tags: ["tag1", "tag2", "tag3"]  # Máximo 5 tags
---
```

**Contenido:**
- [ ] H1 único (solo uno por página)
- [ ] H2 y H3 para estructura
- [ ] Párrafos de 2-3 líneas
- [ ] Enlaces internos a contenido relacionado
- [ ] Imágenes con alt text descriptivo
- [ ] Mínimo 300 palabras

### Al Crear/Editar Evento

**Frontmatter requerido:**
```yaml
---
title: "Nombre del Evento"
description: "Descripción del evento (150-160 caracteres)"
date: 2025-03-15
location: "Ubicación"
time: "18:00 - 20:00"
type: "workshop"  # workshop, meetup, webinar, conference
image: "/images/eventos/imagen.jpg"  # Opcional
---
```

## 🎯 Palabras Clave

### Primarias
- Desarrollo web México
- Diseño web México
- Agencia digital México
- Marketing digital México

### Secundarias
- Astro framework
- TailwindCSS
- GSAP animaciones
- Diseño UX/UI
- SEO México

### Long-tail
- "Agencia de desarrollo web en Ciudad de México"
- "Diseño web profesional México"
- "Desarrollo web con Astro"

## 🔍 Análisis de Impacto SEO

Al hacer cambios, analiza:

### Bajo Impacto
✅ Cambios de estilo/diseño sin afectar contenido
✅ Correcciones ortográficas menores
✅ Actualización de imágenes (manteniendo alt text)

### Impacto Medio
⚠️ Modificación de descripciones
⚠️ Cambio de estructura de headings
⚠️ Agregar/eliminar secciones de contenido
⚠️ Modificar tags en blogs

### Alto Impacto
❗ Cambio de títulos de página
❗ Cambio de URLs (requiere redirects)
❗ Eliminación de páginas
❗ Cambios masivos de contenido
❗ Modificación de palabras clave principales

## 📈 Mejores Prácticas

### Content
1. **Calidad sobre cantidad**: Contenido valioso y relevante
2. **Actualización regular**: Blog posts nuevos mensualmente
3. **Links internos**: Conectar contenido relacionado
4. **Call to Actions**: Claros y relevantes

### Técnico
1. **Core Web Vitals**: Monitorear performance
2. **Mobile-first**: Diseño responsivo
3. **Schema markup**: Considerar structured data
4. **HTTPS**: Siempre usar SSL

### URLs
1. **Descriptivas**: `/servicios/desarrollo-web` mejor que `/s/1`
2. **Cortas**: Evitar URLs muy largas
3. **Minúsculas**: Sin mayúsculas ni caracteres especiales
4. **Guiones**: Usar `-` no `_`

## 🚫 Errores Comunes a Evitar

❌ **Títulos duplicados**: Cada página debe tener título único
❌ **Meta descriptions vacías**: Siempre incluir description
❌ **Contenido duplicado**: No copiar contenido entre páginas
❌ **URLs cambiantes**: Mantener URLs estables
❌ **Imágenes sin alt**: Siempre incluir alt text
❌ **Headings desordenados**: H1 → H2 → H3 (no saltar)
❌ **Contenido delgado**: Páginas con muy poco contenido
❌ **Links rotos**: Verificar links regularmente

## 🛠️ Herramientas Recomendadas

### Análisis
- **Google Search Console**: Monitoreo de indexación
- **Google Analytics**: Análisis de tráfico
- **PageSpeed Insights**: Performance
- **Lighthouse**: Auditoría completa

### Testing
- **Google Rich Results Test**: Structured data
- **Mobile-Friendly Test**: Responsividad
- **Screaming Frog**: Crawling del sitio

### Keywords
- **Google Keyword Planner**: Investigación
- **Ubersuggest**: Análisis de competencia
- **Answer The Public**: Long-tail keywords

## 📊 Monitoreo y Reportes

### Semanal
- Verificar Google Search Console para errores
- Revisar Core Web Vitals

### Mensual
- Analizar rankings de palabras clave
- Revisar tráfico orgánico
- Identificar contenido de bajo rendimiento
- Planear nuevo contenido

### Trimestral
- Auditoría SEO completa
- Actualizar contenido antiguo
- Revisar estrategia de keywords
- Análisis de competencia

## 📞 Recursos

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Astro SEO Best Practices](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## 🎓 Tips Pro

1. **Contenido evergreen**: Crea contenido que permanezca relevante
2. **Featured snippets**: Estructura contenido para snippets
3. **E-A-T**: Demuestra Expertise, Authoritativeness, Trustworthiness
4. **User intent**: Entiende qué buscan los usuarios
5. **Local SEO**: Optimiza para búsquedas locales (México, CDMX)

---

Mantén esta guía actualizada conforme evolucionen las prácticas SEO.
