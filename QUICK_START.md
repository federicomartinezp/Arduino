# ⚡ Quick Start - Arduino Start

¿Quieres ejecutar la aplicación rápidamente? Sigue estos pasos:

## 🏃‍♂️ En 3 Pasos

```bash
# 1. Instala dependencias
npm install

# 2. Inicia el servidor de desarrollo
npm run dev

# 3. Abre tu navegador en http://localhost:5173
```

¡Eso es todo! 🎉

## 🌐 Deploy en Vercel (1 minuto)

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel
```

O simplemente conecta tu repositorio de GitHub con Vercel desde [vercel.com](https://vercel.com).

## 🤖 Activar IA (Opcional)

Si quieres las explicaciones con IA:

1. Obtén una API key gratis en: https://aistudio.google.com/app/apikey
2. Crea un archivo `.env.local`:
   ```env
   API_KEY=tu_api_key_aqui
   ```
3. Reinicia el servidor de desarrollo

**Nota:** La app funciona perfectamente sin la API key, solo no tendrás las explicaciones IA.

## 📚 ¿Qué puedo hacer?

Una vez que la app esté corriendo:

1. 🔍 **Explora Placas**: Haz clic en "Arduino UNO" o "Arduino Nano" en el menú
2. 📍 **Click en Pines**: Toca los puntos blancos en la placa para ver información
3. 🎓 **Aprende con Proyectos**: Ve a "Proyectos" y empieza con el semáforo
4. 💾 **Instala IDE**: Sigue la guía para instalar Arduino IDE en tu computadora

## 🆘 ¿Problemas?

### No funciona `npm install`

```bash
# Limpia caché y reinstala
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Puerto 5173 ya está en uso

```bash
# Usa otro puerto
npm run dev -- --port 3000
```

### Build falla

```bash
# Verifica la versión de Node.js (debe ser >= 18)
node --version

# Si es menor, actualiza Node.js
```

## 📖 Documentación Completa

- [README.md](README.md) - Documentación completa
- [DEPLOYMENT.md](DEPLOYMENT.md) - Guía de deployment
- [CONTRIBUTING.md](CONTRIBUTING.md) - Cómo contribuir

## 🎯 Stack

- React 18 + TypeScript
- Vite 5
- TailwindCSS 3
- Gemini AI (opcional)

---

**¿Listo para aprender Arduino?** 🚀

Abre http://localhost:5173 y comienza tu aventura.
