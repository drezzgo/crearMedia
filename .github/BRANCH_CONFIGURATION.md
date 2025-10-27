# Configuración de Branches

Este documento describe cómo configurar las ramas y protecciones del repositorio.

## Ramas Principales

### `main` - Producción
- **Entorno**: https://crearmedia.com
- **Protección**: Alta
- **Requiere**: 
  - PR review aprobado
  - Status checks pasando (CI/CD)
  - Commits firmados (recomendado)
  - No permite force push
  - No permite eliminación

### `develop` - Staging
- **Entorno**: https://crearmediaprueba.com
- **Protección**: Media
- **Requiere**: 
  - Status checks pasando (CI/CD)
  - No permite force push

### `feature/*` - Desarrollo
- **Base**: `develop`
- **Protección**: Ninguna
- **Lifecycle**: Temporal (se elimina después del merge)

## Configuración de Branch Protection

Para configurar las protecciones (requiere permisos de administrador):

### Main Branch

1. Ve a Settings → Branches → Add rule
2. Branch name pattern: `main`
3. Activa:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1 mínimo)
   - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require status checks to pass before merging
     - Status checks: `commitlint`, `build`, `content-check`
   - ✅ Require conversation resolution before merging
   - ✅ Do not allow bypassing the above settings
   - ✅ Restrict who can push to matching branches

### Develop Branch

1. Ve a Settings → Branches → Add rule
2. Branch name pattern: `develop`
3. Activa:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
     - Status checks: `commitlint`, `build`
   - ✅ Require conversation resolution before merging

## Auto-merge Strategy

### Para Feature Branches → Develop
- Merge strategy: **Squash and merge** (recomendado)
- Esto mantiene el historial limpio

### Para Develop → Main
- Merge strategy: **Merge commit**
- Esto preserva el historial completo de cambios en staging

## Configuración de Environments

### Production (main)
1. Ve a Settings → Environments → New environment
2. Nombre: `production`
3. Deployment branches: `main` only
4. Reviewers: Agregar reviewers requeridos
5. Wait timer: 0 minutos
6. Environment secrets:
   - `DEPLOY_TOKEN`: Token para deploy en producción

### Staging (develop)
1. Ve a Settings → Environments → New environment
2. Nombre: `staging`
3. Deployment branches: `develop` only
4. Environment secrets:
   - `DEPLOY_TOKEN`: Token para deploy en staging

## Comandos Útiles

### Crear nueva feature branch
```bash
git checkout develop
git pull origin develop
git checkout -b feature/mi-nueva-caracteristica
```

### Actualizar feature branch con develop
```bash
git checkout feature/mi-feature
git fetch origin
git rebase origin/develop
# Resolver conflictos si existen
git push origin feature/mi-feature --force-with-lease
```

### Crear PR desde CLI
```bash
gh pr create --base develop --title "feat: mi nueva característica" --body "Descripción"
```

## Notas Importantes

1. **Nunca hacer commits directos** a `main` o `develop`
2. **Siempre usar Pull Requests** para integrar cambios
3. **Seguir convención de commits** (validado automáticamente)
4. **Completar el template de PR** incluyendo análisis SEO
5. **Hacer builds locales** antes de push: `npm run build`
6. **Eliminar feature branches** después del merge

## Hotfix Process

Para correcciones urgentes en producción:

1. Crear branch desde `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/descripcion-corta
   ```

2. Hacer el fix y commit:
   ```bash
   git commit -m "fix: descripción del hotfix"
   ```

3. PR a `main` con review expedito

4. Después del merge a `main`, hacer PR de `main` a `develop` para sincronizar

## Referencias

- [GitHub Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)
- [GitHub Environments](https://docs.github.com/en/actions/deployment/targeting-different-environments)
