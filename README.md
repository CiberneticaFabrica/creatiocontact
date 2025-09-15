# CreatioContact - Formulario de Contacto con Astro

Un proyecto simple de formulario de contacto construido con Astro.

## Características

- ✨ Formulario de contacto responsivo y moderno
- 🎨 Diseño atractivo con gradientes y animaciones
- 📱 Completamente responsivo
- ✅ Validación de formularios en el frontend
- 🚀 Construido con Astro para máximo rendimiento

## Campos del Formulario

- Nombre completo (requerido)
- Correo electrónico (requerido)
- Teléfono (opcional)
- Asunto (requerido)
- Mensaje (requerido)
- Aceptación de política de privacidad (requerido)

## Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:4321`

## Despliegue en Netlify

El proyecto está configurado para desplegarse automáticamente en Netlify con:

- **Adaptador Netlify:** Para funcionalidad de servidor
- **Rutas dinámicas:** Soporte para `/contact-demo/[contactId]`
- **API externa:** Integración con Creatio CRM

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción

## Tecnologías Utilizadas

- [Astro](https://astro.build/) - Framework web moderno
- HTML5 - Estructura semántica
- CSS3 - Estilos y animaciones
- JavaScript - Interactividad del formulario

## Estructura del Proyecto

```
creatiocontact/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── ContactForm.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
└── README.md
```

## Personalización

Puedes personalizar fácilmente:
- Colores en los archivos CSS
- Campos del formulario en `ContactForm.astro`
- Estilos en `Layout.astro`
- Configuración en `astro.config.mjs`
