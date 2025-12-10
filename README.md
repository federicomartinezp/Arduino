<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🤖 Arduino Start - Aprende Arduino Interactivamente

Una aplicación web interactiva para aprender Arduino desde cero. Explora placas, descubre para qué sirve cada pin, y construye proyectos paso a paso.

## ✨ Características

- 🔍 **Explorador de Placas**: Visualiza Arduino UNO y Nano con componentes interactivos
- 📍 **Información de Pines**: Haz clic en cualquier pin para ver su función, uso y ejemplos de código
- 🎓 **Tutoriales Paso a Paso**: Aprende con proyectos guiados como el semáforo de LEDs
- 🤖 **Asistente IA**: Explicaciones detalladas generadas por Gemini AI
- 💻 **Guía de Instalación IDE**: Instrucciones claras para comenzar a programar
- 📱 **Responsive**: Funciona perfectamente en móviles, tablets y escritorio

## 🚀 Ejecutar Localmente

**Requisitos previos:** Node.js 18+

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno (opcional):**
   
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   API_KEY=tu_gemini_api_key_aqui
   ```
   > La API key es opcional. Si no la configuras, la app funcionará igual pero sin las explicaciones IA.

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   ```
   http://localhost:5173
   ```

## 📦 Construir para Producción

```bash
npm run build
```

El build estará en la carpeta `dist/`.

## 🌐 Deploy en Vercel

### Deploy Automático

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/arduino-start)

### Deploy Manual

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Configura variables de entorno en Vercel:**
   - Ve a tu proyecto en [vercel.com](https://vercel.com)
   - Settings → Environment Variables
   - Agrega `API_KEY` con tu clave de Gemini (opcional)

### Configuración Vercel

El proyecto incluye `vercel.json` con la configuración óptima para SPAs de Vite:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## 🛠️ Stack Tecnológico

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: TailwindCSS 3
- **Icons**: Lucide React
- **IA**: Google Gemini API (@google/genai)

## 📁 Estructura del Proyecto

```
/
├── components/          # Componentes React reutilizables
│   ├── BoardVisualizer.tsx    # Visualizador de placas interactivo
│   ├── ProjectsHub.tsx         # Hub de proyectos
│   ├── TutorialTrafficLight.tsx # Tutorial del semáforo
│   ├── IntroAnimation.tsx      # Animación de introducción
│   ├── IdeSetup.tsx           # Guía de instalación del IDE
│   └── CodeBlock.tsx          # Bloque de código con copy
├── services/           # Servicios externos
│   └── geminiService.ts       # Wrapper de Gemini AI
├── App.tsx            # Componente principal
├── constants.tsx      # Datos de pines y contenido
├── types.ts           # TypeScript types
├── index.tsx          # Entry point
├── index.html         # HTML principal
└── vercel.json        # Configuración Vercel
```

## 🎯 Uso

1. **Explorar Placas**: Navega a "Arduino UNO" o "Arduino Nano"
2. **Click en los Pines**: Haz clic en los puntos blancos sobre la placa
3. **Aprender**: Lee la descripción, tips de conexión y ejemplos de código
4. **IA Explicación**: Usa el botón morado para explicaciones detalladas
5. **Proyectos**: Ve a "Proyectos" y comienza con el semáforo

## 📝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**Federico Martínez**

Hecho con ❤️ para aprender Arduino de forma divertida e interactiva.

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!
