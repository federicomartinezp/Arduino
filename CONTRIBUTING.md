# Contribuyendo a Arduino Start

¡Gracias por tu interés en contribuir a Arduino Start! Este documento proporciona guías para contribuir al proyecto.

## 🎯 Formas de Contribuir

- 🐛 Reportar bugs
- ✨ Proponer nuevas características
- 📝 Mejorar la documentación
- 🎨 Mejorar el diseño UI/UX
- 🔧 Agregar nuevos proyectos tutoriales
- 🌐 Traducir el contenido

## 🚀 Proceso de Contribución

### 1. Fork y Clone

```bash
# Fork el repositorio desde GitHub
# Luego clona tu fork
git clone https://github.com/tu-usuario/arduino-start.git
cd arduino-start
```

### 2. Instala Dependencias

```bash
npm install
```

### 3. Crea una Rama

```bash
git checkout -b feature/nombre-de-tu-feature
# o
git checkout -b fix/descripcion-del-bug
```

### 4. Desarrolla y Prueba

```bash
# Inicia el servidor de desarrollo
npm run dev

# Haz tus cambios en el código
# Prueba que todo funcione correctamente
```

### 5. Verifica el Build

```bash
# Asegúrate de que el proyecto compile sin errores
npm run build
```

### 6. Commit y Push

```bash
git add .
git commit -m "feat: descripción clara de tu cambio"
git push origin feature/nombre-de-tu-feature
```

### 7. Abre un Pull Request

- Ve a GitHub y abre un Pull Request desde tu rama
- Describe claramente qué cambios hiciste y por qué
- Vincula cualquier issue relacionado

## 📝 Guías de Estilo

### Código

- Usa TypeScript para todo el código nuevo
- Sigue las convenciones de nomenclatura existentes
- Mantén los componentes pequeños y reutilizables
- Agrega comentarios solo cuando sea necesario para claridad

### Commits

Usa el formato de [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva característica
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan el código)
- `refactor:` Refactorización de código
- `test:` Agregar o modificar tests
- `chore:` Mantenimiento general

### Componentes React

```tsx
// Usa functional components con TypeScript
interface MiComponenteProps {
  titulo: string;
  onAction: () => void;
}

const MiComponente: React.FC<MiComponenteProps> = ({ titulo, onAction }) => {
  return (
    <div className="...">
      {/* Tu JSX aquí */}
    </div>
  );
};

export default MiComponente;
```

### TailwindCSS

- Usa clases de Tailwind en lugar de CSS custom
- Mantén consistencia con los colores del tema (#00979D para primario)
- Usa las utilidades de responsive design (sm:, md:, lg:)

## 🎨 Agregando Nuevos Proyectos

Si quieres agregar un nuevo tutorial de proyecto:

1. Agrega la información del proyecto en `constants.tsx`
2. Crea un nuevo componente de tutorial en `components/`
3. Actualiza `ProjectsHub.tsx` para incluir el nuevo proyecto
4. Actualiza `App.tsx` para manejar la nueva vista

## 🐛 Reportando Bugs

Cuando reportes un bug, incluye:

- Descripción clara del problema
- Pasos para reproducirlo
- Comportamiento esperado vs. actual
- Screenshots si es aplicable
- Información del navegador/dispositivo

## ✨ Proponiendo Features

Para nuevas características:

- Explica el problema que resuelve
- Describe la solución propuesta
- Considera el impacto en usuarios existentes
- Incluye mockups si es relevante

## 📚 Mejorando Documentación

- Corrige errores de ortografía o gramática
- Mejora explicaciones poco claras
- Agrega ejemplos donde falten
- Actualiza información desactualizada

## ❓ ¿Necesitas Ayuda?

Si tienes preguntas:

- Abre un issue con la etiqueta "question"
- Revisa issues y PRs existentes
- Consulta la documentación en README.md

## 🙏 Reconocimientos

Todos los contribuidores serán reconocidos en el README.

---

¡Gracias por ayudar a hacer Arduino Start mejor para todos! 🚀
