# 🚀 Guía de Deployment - Arduino Start

Esta guía te ayudará a desplegar Arduino Start en diferentes plataformas de hosting.

## 📦 Vercel (Recomendado)

Vercel es la forma más fácil y rápida de desplegar esta aplicación.

### Método 1: Deploy con GitHub (Automático)

1. **Push tu código a GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com) y crea una cuenta
   - Click en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Vite

3. **Configura Variables de Entorno (Opcional):**
   - En la configuración del proyecto, ve a "Environment Variables"
   - Agrega: `API_KEY` = tu_gemini_api_key
   - Esta variable es opcional, la app funciona sin ella

4. **Deploy:**
   - Click en "Deploy"
   - ¡Listo! Tu app estará en vivo en minutos

### Método 2: Deploy con Vercel CLI

```bash
# Instala Vercel CLI globalmente
npm install -g vercel

# Navega a tu proyecto
cd /tu/proyecto/arduino-start

# Inicia el deploy
vercel

# Sigue las instrucciones en pantalla
# La primera vez te pedirá:
# - Conectar con tu cuenta
# - Confirmar el directorio
# - Configurar el proyecto

# Para producción
vercel --prod
```

### Configuración Automática

El archivo `vercel.json` ya está configurado con:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

Esto asegura:
- ✅ Rutas SPA funcionan correctamente
- ✅ Build optimizado con Vite
- ✅ Configuración de framework detectada

## 🌐 Netlify

### Deploy Manual con Netlify Drop

1. **Build tu proyecto:**
   ```bash
   npm run build
   ```

2. **Sube la carpeta `dist`:**
   - Ve a [netlify.com/drop](https://app.netlify.com/drop)
   - Arrastra la carpeta `dist` al área de drop
   - ¡Listo!

### Deploy con Git

1. **Conecta tu repositorio:**
   - Ve a [netlify.com](https://netlify.com)
   - "Add new site" → "Import from Git"
   - Selecciona tu repositorio

2. **Configuración de Build:**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Variables de entorno (opcional):**
   - Site settings → Environment variables
   - Agrega `API_KEY`

4. **Deploy:**
   - Click "Deploy site"

### Configuración de Redirects

Crea `netlify.toml` en la raíz:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🎯 GitHub Pages

1. **Instala gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Actualiza package.json:**
   ```json
   {
     "homepage": "https://tu-usuario.github.io/arduino-start",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Actualiza vite.config.ts:**
   ```typescript
   export default defineConfig({
     base: '/arduino-start/', // nombre de tu repo
     // ... resto de la config
   });
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Configura GitHub Pages:**
   - Settings → Pages
   - Source: Deploy from branch `gh-pages`

## 🐳 Docker

### Dockerfile

```dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Comandos Docker

```bash
# Build
docker build -t arduino-start .

# Run
docker run -p 8080:80 arduino-start

# Con variables de entorno
docker run -p 8080:80 -e API_KEY=tu_api_key arduino-start
```

## ☁️ Otras Plataformas

### Railway

1. Conecta tu repositorio en [railway.app](https://railway.app)
2. Railway detectará automáticamente Vite
3. Configura variables de entorno si es necesario
4. Deploy automático en cada push

### Render

1. Conecta tu repositorio en [render.com](https://render.com)
2. New → Static Site
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Environment variables: agrega `API_KEY` si lo necesitas

### Cloudflare Pages

1. Conecta tu repositorio en Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Deploy

## 🔐 Variables de Entorno

### En Producción

**Importante:** Nunca hagas commit de archivos `.env.local` con keys reales.

Para diferentes plataformas:

- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Environment Variables
- **GitHub Pages:** No soporta variables de entorno del servidor
- **Docker:** Pasa con `-e` o archivo `.env`

### Variable API_KEY

```env
API_KEY=tu_gemini_api_key
```

Esta variable es **opcional**. Si no la configuras:
- ✅ La app funciona normalmente
- ❌ Las explicaciones IA no estarán disponibles
- ℹ️ Se mostrará un mensaje informativo al usuario

## 📊 Optimización

### Build Optimization

Ya está optimizado con:
- ✅ Tree shaking automático de Vite
- ✅ Code splitting
- ✅ Minificación CSS y JS
- ✅ Gzip compression en Vercel/Netlify

### Performance Tips

1. **CDN:** Vercel y Netlify usan CDN global automáticamente
2. **Caching:** Headers ya configurados para assets estáticos
3. **Images:** Ya se usan SVG y CSS para visuales (lightweight)

## 🐛 Troubleshooting

### "404 Not Found" en rutas

**Problema:** Recargar la página da error 404

**Solución:**
- Vercel: Ya configurado en `vercel.json`
- Netlify: Agrega `netlify.toml` con redirects
- Nginx: Configura `try_files`

### Variables de entorno no funcionan

**Problema:** `process.env.API_KEY` es undefined

**Solución:**
- Verifica que agregaste la variable en tu plataforma
- Rebuild el proyecto después de agregar variables
- En Vite, las variables deben estar definidas en tiempo de build

### Build falla

**Problema:** Error en `npm run build`

**Solución:**
```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📞 Soporte

Si tienes problemas con el deployment:

1. Revisa los logs de build en tu plataforma
2. Verifica que Node.js versión sea >= 18
3. Abre un issue en GitHub con detalles del error

---

¡Feliz deployment! 🎉
