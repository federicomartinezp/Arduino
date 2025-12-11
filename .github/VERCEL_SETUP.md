# 🚀 Configuración de Vercel para Arduino Start

Esta guía te ayudará a desplegar Arduino Start en Vercel de forma óptima.

## 📋 Pre-requisitos

- Cuenta en [Vercel](https://vercel.com)
- Repositorio en GitHub/GitLab/Bitbucket
- Proyecto Arduino Start

## 🎯 Deploy Automático (Recomendado)

### Paso 1: Conectar Repositorio

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Importa tu repositorio Git
3. Vercel detectará automáticamente:
   - Framework: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Paso 2: Configurar Variables de Entorno (Opcional)

Si quieres activar las explicaciones con IA:

1. En la configuración del proyecto, ve a **Settings** → **Environment Variables**
2. Agrega la variable:
   ```
   Name: API_KEY
   Value: tu_gemini_api_key
   ```
3. Aplica para: Production, Preview, Development

### Paso 3: Deploy

1. Click en **Deploy**
2. Espera ~2 minutos
3. ¡Tu app estará en vivo! 🎉

## ⚙️ Configuración Avanzada

### Variables de Entorno

El proyecto ya incluye `vercel.json` configurado:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "env": {
    "API_KEY": "@api_key"
  }
}
```

### Build Settings

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

### Git Integration

Cada push a tu rama principal generará un nuevo deploy automáticamente:

- **Production**: Rama `main` o `master`
- **Preview**: Todas las demás ramas y PRs

## 🔐 Seguridad

### Variables de Entorno

**NUNCA** hagas commit de:
- `.env.local`
- `.env`
- API keys

Las variables de entorno se configuran en:
1. Vercel Dashboard → Settings → Environment Variables
2. Se inyectan en build time
3. No se exponen en el cliente (excepto las definidas en `vite.config.ts`)

### HTTPS

Vercel proporciona HTTPS automático:
- ✅ Certificado SSL gratuito
- ✅ Renovación automática
- ✅ HTTP/2 enabled

## 🌐 Dominio Personalizado

### Agregar Dominio

1. Settings → Domains
2. Agrega tu dominio
3. Configura DNS según las instrucciones:
   ```
   Type: CNAME
   Name: www (o @)
   Value: cname.vercel-dns.com
   ```

### Dominio por Defecto

Vercel te asigna automáticamente:
```
https://tu-proyecto.vercel.app
```

## 📊 Performance

### Optimizaciones Incluidas

El proyecto ya está optimizado con:

- ✅ **Code Splitting**: Vite automático
- ✅ **Tree Shaking**: Elimina código no usado
- ✅ **Minification**: CSS y JS minificados
- ✅ **Gzip/Brotli**: Compresión automática en Vercel
- ✅ **CDN Global**: Edge network de Vercel
- ✅ **Cache Headers**: Configurados para assets estáticos

### Tamaño del Bundle

```
dist/index.html            1.36 kB │ gzip:  0.70 kB
dist/assets/index.css     31.79 kB │ gzip:  6.06 kB
dist/assets/index.js     221.53 kB │ gzip: 66.04 kB
```

## 🔄 CI/CD

### Deployment Workflow

```
Git Push → Vercel Detect → Build → Deploy → Live
```

1. **Push** código a GitHub
2. **Vercel detecta** el cambio
3. **Build** ejecuta `npm run build`
4. **Deploy** sube a CDN global
5. **Live** en segundos

### Branch Previews

Cada PR genera un preview único:
```
https://proyecto-git-branch-name-user.vercel.app
```

### Rollback

En caso de error:
1. Deployments → Ver historia
2. Click en deploy anterior
3. "Promote to Production"

## 🐛 Troubleshooting

### Build Falla

**Error**: `ENOENT: no such file or directory`

**Solución**:
```bash
# Verifica que node_modules esté en .gitignore
# Vercel instalará dependencias automáticamente
```

### Variables de Entorno No Funcionan

**Error**: `process.env.API_KEY is undefined`

**Solución**:
1. Verifica que agregaste la variable en Vercel
2. Redeploy el proyecto
3. Las variables se aplican en build time, no runtime

### 404 en Rutas

**Error**: Recargar página da 404

**Solución**: Ya está configurado en `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Build Timeout

**Error**: Build excede 45 segundos (Free tier)

**Solución**:
- El proyecto actual build en ~4 segundos
- Si crece, considera Vercel Pro

## 📈 Analytics

### Habilitar Web Analytics

1. Settings → Analytics → Enable
2. Gratuito en todos los planes
3. Métricas disponibles:
   - Page views
   - Unique visitors
   - Top pages
   - Referrers

### Web Vitals

Vercel mide automáticamente:
- **LCP**: Largest Contentful Paint
- **FID**: First Input Delay
- **CLS**: Cumulative Layout Shift

## 🎯 Checklist de Deploy

Antes de hacer deploy, verifica:

- [ ] `.gitignore` incluye `node_modules`, `dist`, `.env*`
- [ ] `vercel.json` está en la raíz
- [ ] `npm run build` funciona localmente
- [ ] Variables de entorno configuradas (si aplica)
- [ ] README actualizado con tu dominio
- [ ] Licencia incluida

## 💡 Tips Pro

1. **Preview Deployments**: Usa branches para testing
2. **Environment Variables**: Diferentes por entorno (dev, preview, prod)
3. **Custom Domains**: Múltiples dominios apuntan al mismo proyecto
4. **Edge Functions**: Futura expansión con Vercel Functions
5. **Analytics**: Monitorea el tráfico desde día 1

## 🆘 Soporte

### Documentación Oficial
- [Vercel Docs](https://vercel.com/docs)
- [Vite on Vercel](https://vercel.com/docs/frameworks/vite)

### Comunidad
- [Vercel GitHub Discussions](https://github.com/vercel/vercel/discussions)
- [Discord de Vercel](https://vercel.com/discord)

### Proyecto
- Abre un issue en el repositorio
- Revisa [DEPLOYMENT.md](../DEPLOYMENT.md)

---

¡Disfruta tu deploy! 🚀
