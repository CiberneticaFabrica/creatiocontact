# ContactInfo Component

Un componente de Astro que consume la API REST de Creatio CRM para mostrar información detallada de contactos.

## Características

- ✅ Consume API REST de Creatio CRM
- ✅ Muestra información completa del contacto
- ✅ Soporte para fotos de perfil
- ✅ Diseño responsivo y moderno
- ✅ Manejo de errores
- ✅ Tipado TypeScript completo
- ✅ Estados de carga y error

## Uso

```astro
---
import ContactInfo from '../components/ContactInfo.astro';
---

<ContactInfo 
  contactId="60d45129-99d1-44a9-8c74-1d0b924795f4" 
  includePhoto={true} 
/>
```

## Props

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `contactId` | `string` | No | `"60d45129-99d1-44a9-8c74-1d0b924795f4"` | ID del contacto en Creatio CRM |
| `includePhoto` | `boolean` | No | `true` | Si incluir la foto del contacto |

## API Configuration

- **URL Base:** `https://h9hl7f2ijf.execute-api.us-east-1.amazonaws.com/dev/Contact`
- **Método:** POST
- **Content-Type:** application/json

### Request Body
```json
{
  "contact_id": "60d45129-99d1-44a9-8c74-1d0b924795f4",
  "include_photo": true
}
```

## Información Mostrada

### Información Básica
- Nombre completo
- Título del trabajo
- Estado de confirmación
- Porcentaje de completitud

### Información de Contacto
- Email
- Teléfono móvil
- Teléfono fijo
- Dirección
- Departamento
- Fecha de nacimiento

### Información Adicional
- Edad
- Estado de confirmación de email
- Número de cédula
- Fecha de vencimiento de cédula

### Preferencias de Comunicación
- Email (habilitado/deshabilitado)
- Llamadas (habilitado/deshabilitado)
- SMS (habilitado/deshabilitado)
- Correo postal (habilitado/deshabilitado)

### Redes Sociales
- Skype
- Facebook
- LinkedIn
- Twitter

## Estilos

El componente incluye estilos CSS modernos con:
- Diseño de tarjeta con sombras
- Gradientes en el header
- Grid responsivo para la información
- Estados visuales para diferentes tipos de datos
- Animaciones suaves en hover
- Diseño completamente responsivo

## Manejo de Errores

El componente maneja automáticamente:
- Errores de red
- Respuestas HTTP no exitosas
- Datos faltantes o nulos
- Estados de carga

## Tipos TypeScript

El componente utiliza tipos TypeScript definidos en `src/types/creatio.ts`:
- `CreatioContactResponse`
- `CreatioContact`
- `CreatioContactRequest`

## Demo

Visita `/contact-demo` para ver el componente en acción con datos reales de la API de Creatio CRM.
