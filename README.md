# Angular + Auth0 Tutorial Project

Un proyecto de Angular 20 diseñado específicamente para enseñar la implementación de autenticación segura utilizando Auth0 de manera práctica y profesional.

## 📋 Descripción

Este es un proyecto educativo que demuestra la integración completa de Auth0 en una aplicación Angular moderna. Incluye ejemplos reales, mejores prácticas y una arquitectura bien estructurada para facilitar el aprendizaje de la autenticación en aplicaciones web.

## 🚀 Tecnologías Utilizadas

- **Angular 20** - Framework principal
- **Auth0 SDK** (`@auth0/auth0-angular`) - Servicio de autenticación
- **TypeScript** - Lenguaje de programación
- **Tailwind CSS** - Framework de estilos
- **DaisyUI** - Componentes UI para Tailwind
- **Font Awesome** - Iconografía

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas

```
src/app/
├── components/          # Componentes reutilizables
├── data/               # Modelos y datos
├── directives/         # Directivas personalizadas
├── guards/             # Guards de autenticación y autorización
├── interceptors/       # Interceptores HTTP
├── interfaces/         # Interfaces TypeScript
├── layouts/            # Layouts de la aplicación
│   ├── public-layout.ts
│   ├── private-layout.ts
│   └── components/
├── pages/              # Páginas de la aplicación
│   ├── public/
│   │   ├── public-home-page.ts
│   │   └── public-about-page.ts
│   └── private/
│       ├── private-dashboard-page.ts
│       └── private-profile-page.ts
├── routes/             # Configuración de rutas
│   ├── public.routes.ts
│   └── private.routes.ts
├── services/           # Servicios de la aplicación
│   └── app-auth.service.ts
└── utils/              # Utilidades y helpers
```

### Configuración de Path Mapping

El proyecto utiliza alias de importación para una mejor organización:

```typescript
"@components/*": ["src/app/components/*"]
"@data/*": ["src/app/data/*"]
"@directives/*": ["src/app/directives/*"]
"@guards/*": ["src/app/guards/*"]
"@interceptors/*": ["src/app/interceptors/*"]
"@interfaces/*": ["src/app/interfaces/*"]
"@layouts/*": ["src/app/layouts/*"]
"@pages/*": ["src/app/pages/*"]
"@routes/*": ["src/app/routes/*"]
"@services/*": ["src/app/services/*"]
"@utils/*": ["src/app/utils/*"]
"@env/*": ["src/environments/*"]
```

## 🎯 Características Principales

### Rutas Públicas

- **Home Page** - Página de inicio con información del tutorial
- **About Page** - Información sobre el proyecto y tecnologías

### Rutas Privadas

- **Dashboard** - Panel principal para usuarios autenticados
- **Profile** - Perfil del usuario con información básica

### Layouts Diferenciados

- **Public Layout** - Para páginas públicas con navbar básico
- **Private Layout** - Para páginas privadas con navbar extendido

### Servicio de Autenticación

- `AppAuthService` - Wrapper del Auth0 SDK
- Métodos de login y logout
- Manejo de estados de autenticación

## 🛠️ Instalación y Configuración

### Comando de Creación Inicial

```bash
ng new app-angular --skip-tests --skip-git --style css --no-ssr && \
cd app-angular && \
npm install tailwindcss @tailwindcss/postcss postcss --force && \
npm i -D daisyui@latest && \
ng g environments && \
touch .postcssrc.json && \
code .
```

### Estructura de Carpetas

```bash
cd src/app/ && \
mkdir components data directives guards interceptors interfaces layouts pages routes services utils
```

### Configuración de PostCSS

Archivo .postcssrc.json:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

### Configuración de Estilos

Archivo styles.css:

```css
@import "tailwindcss";
@plugin "daisyui";
```

## 🔧 Scripts Disponibles

```bash
npm run dev     # Desarrollo (limpia cache de Angular)
npm run start   # Servidor de desarrollo
npm run build   # Construcción para producción
npm run watch   # Construcción en modo watch
npm run test    # Ejecutar pruebas
```

## 📦 Dependencias Principales

### Dependencias de Producción

- `@angular/core`: ^20.0.0
- `@auth0/auth0-angular`: ^2.2.3
- `tailwindcss`: ^4.1.10
- `rxjs`: ~7.8.0

### Dependencias de Desarrollo

- `@angular/cli`: ^20.0.1
- `daisyui`: ^5.0.43
- `typescript`: ~5.8.2

## 🎨 Características de UI/UX

- **Diseño Responsivo** con Tailwind CSS
- **Componentes Modernos** con DaisyUI
- **Iconografía Completa** con Font Awesome
- **Navegación Intuitiva** con layouts diferenciados
- **Estados de Autenticación** claramente definidos

## 📚 Objetivos del Tutorial

1. **Configuración de Auth0** - Setup inicial y configuración
2. **Implementación de Login/Logout** - Flujos de autenticación
3. **Protección de Rutas** - Guards y middleware
4. **Manejo de Estados** - Estados de autenticación
5. **Mejores Prácticas** - Arquitectura y organización

## 🔐 Configuración de Seguridad

El proyecto está configurado con:

- Variables de entorno para credenciales
- Configuración de Auth0 en `app.config.ts`
- Redirección configurada al origen de la aplicación
- Zoneless change detection para mejor rendimiento

## 🎓 Recursos de Aprendizaje

Este proyecto forma parte de un tutorial completo que cubre:

- Configuración inicial de Auth0
- Integración con Angular
- Protección de rutas y componentes

---

**Desarrollado por:** JEBC-Dev  
**Canal:** [@jebcdev](https://youtube.com/@jebcdev)  
**Propósito:** Tutorial educativo de Auth0 + Angular
