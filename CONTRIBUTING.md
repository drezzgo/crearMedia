# Guía de Contribución

¡Gracias por tu interés en contribuir a CrearMedia México! Esta guía te ayudará a entender nuestro proceso de desarrollo.

## 📋 Antes de Empezar

1. Lee el [README.md](README.md) para entender la estructura del proyecto
2. Familiarízate con nuestra convención de commits
3. Revisa los issues abiertos para ver en qué puedes ayudar

## 🔄 Proceso de Contribución

### 1. Fork y Clone

```bash
# Fork el repositorio en GitHub, luego:
git clone https://github.com/TU-USUARIO/crearMedia.git
cd crearMedia
npm install
```

### 2. Crear Rama de Feature

Siempre crea tu rama desde `develop`:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/nombre-descriptivo
```

Nomenclatura de ramas:
- `feature/nueva-funcionalidad` - Nuevas características
- `fix/correccion-bug` - Corrección de bugs
- `content/actualizar-blog` - Cambios de contenido
- `style/mejorar-diseño` - Mejoras de diseño

### 3. Hacer Cambios

#### Convención de Commits

Todos los commits deben seguir este formato:

```
<tipo>: <descripción corta>

[cuerpo opcional]

[footer opcional]
```

**Tipos válidos:**
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `content`: Cambios de contenido
- `style`: Cambios de estilo/diseño (no lógica)
- `refactor`: Refactorización de código
- `chore`: Tareas de mantenimiento
- `docs`: Solo documentación
- `test`: Agregar o modificar tests
- `ci`: Cambios en configuración CI

**Ejemplos:**

✅ Buenos commits:
```bash
git commit -m "feat: agregar página de contacto con formulario"
git commit -m "fix: corregir navegación móvil en iOS"
git commit -m "content: actualizar información de servicios"
git commit -m "style: mejorar espaciado en cards de eventos"
```

❌ Malos commits:
```bash
git commit -m "Update files"  # No especifica el tipo
git commit -m "FEAT: Add page"  # Tipo en mayúsculas
git commit -m "fix: Fix."  # Descripción poco clara
```

#### Cambios de Contenido

Cuando modifiques contenido:

**JSON** (`src/data/`):
- Mantén la estructura existente
- Valida el JSON antes de commit
- Considera el impacto SEO

**Markdown** (`src/content/blogs/` o `src/content/eventos/`):
- Usa el frontmatter correcto
- Optimiza imágenes antes de subirlas
- Usa formato Markdown estándar

### 4. Testing

Antes de hacer commit, asegúrate de:

```bash
# Verificar que el proyecto compile
npm run build

# Verificar en desarrollo
npm run dev
```

### 5. Crear Pull Request

1. Push tus cambios:
```bash
git push origin feature/nombre-descriptivo
```

2. Ve a GitHub y crea un Pull Request hacia `develop`

3. Completa el template de PR:
   - Describe los cambios claramente
   - Lista archivos de contenido afectados
   - Analiza el impacto SEO
   - Marca los checkboxes completados

4. Espera la revisión del código

## 📝 Guidelines de Código

### JavaScript/TypeScript
- Usa nombres descriptivos para variables y funciones
- Comenta código complejo
- Sigue las convenciones de Astro

### CSS/TailwindCSS
- Usa clases de Tailwind cuando sea posible
- Mantén consistencia con el diseño existente
- Considera accesibilidad (contraste, tamaños)

### Contenido
- Usa español correcto y profesional
- Revisa ortografía y gramática
- Optimiza imágenes (WebP preferido)
- Usa alt text descriptivo en imágenes

## 🎯 SEO y Accesibilidad

### SEO
- Títulos descriptivos y únicos
- Meta descripciones de 150-160 caracteres
- URLs limpias y descriptivas
- Contenido de calidad

### Accesibilidad
- HTML semántico
- Contraste adecuado (WCAG AA mínimo)
- Labels en formularios
- Navegación por teclado

## 🔍 Revisión de Código

Tu PR será revisado considerando:
- ✅ Calidad del código
- ✅ Convención de commits
- ✅ Testing
- ✅ Documentación
- ✅ Impacto SEO
- ✅ Accesibilidad

## 🐛 Reportar Bugs

Para reportar un bug:

1. Busca si ya existe un issue similar
2. Crea un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducir
   - Comportamiento esperado vs actual
   - Screenshots si aplica
   - Información del navegador/dispositivo

## 💡 Sugerir Características

Para sugerir una nueva característica:

1. Abre un issue de tipo "Feature Request"
2. Describe la característica claramente
3. Explica el problema que resuelve
4. Proporciona ejemplos si es posible

## ❓ Preguntas

Si tienes preguntas, puedes:
- Abrir un issue con la etiqueta "question"
- Contactar al equipo de CrearMedia

## 📄 Licencia

Al contribuir, aceptas que tus contribuciones se licencien bajo la misma licencia del proyecto.

---

¡Gracias por contribuir a CrearMedia México! 🎉
