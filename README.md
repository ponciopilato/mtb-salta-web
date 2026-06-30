# 🚵‍♂️ MTB Salta - Website de Senderos para Mountain Bike

Sitio web moderno y responsive para promocionar senderos de MTB en Salta, Argentina.

## 📍 Características

- **Mapa Interactivo** con Leaflet.js - Todos los senderos geolocalizados
- **Formulario a WhatsApp** - Los mensajes llegan directamente a tu teléfono
- **Diseño Responsive** - Funciona perfecto en móviles, tablets y desktop
- **6 Senderos Destacados** - Con información de dificultad, distancia y desnivel
- **Animaciones** - Efectos suaves al hacer scroll
- **Galería** - Espacio para fotos de los senderos
- **Sección de Consejos** - Información útil para visitantes

## 🚀 Instalación y Uso

### 1. Abrir el sitio
Simplemente abrí el archivo `index.html` en tu navegador:

```bash
# En Windows, hacé doble clic en index.html
# O desde la terminal:
start index.html
```

### 2. Configurar tu número de WhatsApp

**IMPORTANTE:** Para que el formulario funcione, debés editar tu número en el archivo `script.js`:

1. Abrí `script.js`
2. Buscá la línea 2:
   ```javascript
   const WHATSAPP_NUMBER = '5493871234567';
   ```
3. Reemplazá con tu número real en formato:
   - **Código de país** (54 para Argentina)
   - **9** (para celulares)
   - **Código de área** (387 para Salta)
   - **Número** (sin 15, sin espacios ni guiones)

**Ejemplo:** Si tu número es `387-123-4567`, el formato sería:
```javascript
const WHATSAPP_NUMBER = '5493871234567';
```

### 3. Personalizar senderos

Las coordenadas de los senderos son aproximadas. Para actualizarlas con precisión:

1. En `script.js`, buscá la función `initMap()`
2. Actualizá las coordenadas en el array `trails`:
   ```javascript
   {
       name: 'Nombre del Sendero',
       coords: [-24.7859, -65.4038], // Latitud, Longitud
       // ... resto de datos
   }
   ```

## 📁 Estructura de Archivos

```
mtb-salta-web/
├── index.html          # Estructura principal
├── styles.css          # Estilos y diseño
├── script.js           # Mapa interactivo + WhatsApp + animaciones
└── README.md          # Este archivo
```

## 🗺️ Mapa Interactivo

El mapa usa:
- **Leaflet.js** (librería gratuita de mapas)
- **OpenStreetMap** (tiles gratuitos)
- Marcadores de colores según dificultad:
  - 🟢 Verde = Principiante
  - 🔵 Azul = Intermedio
  - 🟠 Naranja = Avanzado
  - 🔴 Rojo = Experto

## 💬 Formulario WhatsApp

Cuando un usuario completa el formulario:
1. Se genera un mensaje formateado con todos los datos
2. Se abre WhatsApp Web (o la app en móviles)
3. El mensaje ya está escrito, solo hay que enviar

**Mensaje de ejemplo:**
```
🚵‍♂️ Nuevo mensaje desde MTB Salta

Nombre: Juan Pérez
Email: juan@email.com
Teléfono: 3871234567
Sendero de interés: Cerro San Bernardo

Mensaje: Quiero más información sobre este sendero...
```

## 🎨 Personalización

### Cambiar colores
En `styles.css`, modificá las variables CSS al inicio:
```css
:root {
    --primary-color: #667eea;    /* Color principal */
    --secondary-color: #764ba2;  /* Color secundario */
    --accent-green: #22c55e;     /* Principiante */
    --accent-blue: #3b82f6;      /* Intermedio */
    --accent-orange: #f59e0b;    /* Avanzado */
    --accent-red: #ef4444;       /* Experto */
}
```

### Agregar más senderos
1. En `index.html`, copiá un `trail-card` existente
2. Actualizá la información
3. En `script.js`, agregá el sendero al array `trails` con sus coordenadas

### Cambiar fotos
Actualmente usa gradientes CSS. Para fotos reales:
1. Reemplazá en `.trail-image` el `background: linear-gradient(...)` por:
   ```css
   background: url('fotos/san-bernardo.jpg') center/cover;
   ```
2. Creá una carpeta `fotos/` y guardá las imágenes ahí

## 🌐 Publicar Online

### Opción 1: Netlify (Gratis)
1. Creá cuenta en [netlify.com](https://netlify.com)
2. Arrastrá la carpeta `mtb-salta-web` al dashboard
3. ¡Listo! Te da un URL tipo `mtb-salta.netlify.app`

### Opción 2: Vercel (Gratis)
1. Instalá Vercel CLI: `npm i -g vercel`
2. En la carpeta del proyecto: `vercel`
3. Seguí las instrucciones

### Opción 3: GitHub Pages (Gratis)
1. Subí los archivos a un repo de GitHub
2. Andá a Settings > Pages
3. Elegí la rama main y guardá

### Dominio Personalizado
Para un dominio como `mtbsalta.com`:
1. Comprá el dominio en Namecheap, GoDaddy, etc.
2. Configura los DNS según tu hosting

## 📱 Responsive

El sitio se adapta a:
- 📱 **Móviles**: Menú hamburguesa, mapa más pequeño
- 📱 **Tablets**: Layout de 2 columnas
- 💻 **Desktop**: Layout completo de 3+ columnas

## 🛠️ Tecnologías Usadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Grid/Flexbox
- **JavaScript** - Interactividad
- **Leaflet.js** - Mapa interactivo
- **OpenStreetMap** - Tiles del mapa
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografías Montserrat + Open Sans

## 📞 Contacto

Para soporte o consultas sobre el sitio.

## 📄 Licencia

Libre uso para proyectos personales y comerciales.

---

**Hecho con ❤️ para la comunidad MTB de Salta**