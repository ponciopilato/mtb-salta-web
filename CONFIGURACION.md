# ⚡ Guía Rápida de Configuración - MTB Salta

## 🚀 PASO 1: Configurar tu WhatsApp (¡IMPORTANTE!)

Para que el formulario funcione, tenés que poner tu número de WhatsApp.

1. Abrí el archivo **`config.js`** con cualquier editor de texto
2. Buscá la línea que dice:
   ```javascript
   whatsappNumber: '5493871234567',
   ```
3. **Cambiá el número** por el tuyo en este formato:
   - `54` = código de Argentina
   - `9` = indica que es celular
   - `387` = código de área de Salta
   - `1234567` = tu número (sin 15, sin espacios)

**Ejemplo:** Si tu número es `387-123-4567` → `5493871234567`

**Ejemplo para Buenos Aires:** Si tu número es `11-1234-5678` → `5491112345678`

4. **Guardá el archivo** y ¡listo!

---

## 📱 PASO 2: Probar el Funcionamiento

1. **Abrí `index.html`** en tu navegador (doble clic o `start index.html`)
2. **Desplazate hasta la sección "Contacto"**
3. **Completá el formulario** con datos de prueba
4. **Hacé clic en "Enviar por WhatsApp"**
5. Se debería abrir WhatsApp Web (o la app) con el mensaje ya escrito

---

## 📧 PASO 3: Actualizar Información de Contacto (Opcional)

En el mismo archivo `config.js`, podés cambiar:

```javascript
email: 'info@mtbsalta.com',           // Tu email real
telefono: '+54 387 123 4567',         // Tu teléfono con formato internacional
ubicacion: 'Salta, Argentina',        // Tu ubicación
```

---

## 🌐 PASO 4: Redes Sociales (Opcional)

Actualizá los links de tus redes:

```javascript
redes: {
    instagram: 'https://instagram.com/tu_usuario',
    facebook: 'https://facebook.com/tu_pagina',
    strava: 'https://strava.com/clubs/tu_club',
    youtube: 'https://youtube.com/@tu_canal'
}
```

**Si no usás alguna, dejala vacía:** `youtube: ''`

---

## 🗺️ PASO 5: Coordenadas de los Senderos (Opcional)

Las coordenadas actuales son aproximadas. Para poner las exactas:

1. Abrí **`script.js`**
2. Buscá la función `initMap()`
3. Actualizá las coordenadas en cada sendero:
   ```javascript
   {
       name: 'Cerro San Bernardo',
       coords: [-24.7689, -65.3928],  // <-- Cambiar por GPS real
       // ...
   }
   ```

**Para obtener coordenadas exactas:**
- Usá Google Maps: hacé clic derecho en el lugar → copiá las coordenadas
- O usá una app de GPS en tu celular cuando estés en el sendero

---

## 🎨 PASO 6: Personalizar Colores (Opcional)

En `config.js` podés cambiar los colores de los marcadores:

```javascript
colores: {
    principio: '#22c55e',    // Verde para principiantes
    intermedio: '#3b82f6',   // Azul para intermedios
    avanzado: '#f59e0b',     // Naranja para avanzadas
    experto: '#ef4444'       // Rojo para expertos
}
```

---

## 📸 PASO 7: Agregar Fotos Reales (Opcional)

Actualmente el sitio usa gradientes de colores. Para poner fotos:

1. **Creá una carpeta** llamada `fotos/` junto a los archivos
2. **Guardá tus fotos** ahí (ej: `san-bernardo.jpg`)
3. **Editá `styles.css`**:
   ```css
   .trail-card:nth-child(1) .trail-image {
       background: url('fotos/san-bernardo.jpg') center/cover;
   }
   ```

---

## ✅ Checklist de Verificación

- [ ] Cambié el número de WhatsApp en `config.js`
- [ ] Probé el formulario y abre WhatsApp correctamente
- [ ] Actualicé el email y teléfono si es necesario
- [ ] Puse los links de mis redes sociales
- [ ] (Opcional) Actualicé coordenadas de senderos
- [ ] (Opcional) Agregué fotos reales

---

## 🌐 Publicar en Internet (Gratis)

### Netlify (Recomendado - 5 minutos)

1. Entrá a [netlify.com](https://netlify.com) y creá una cuenta gratis
2. Arrastrá la carpeta `mtb-salta-web` completa a su página
3. ¡Listo! Te da un link tipo `https://mtb-salta.netlify.app`
4. (Opcional) Comprá un dominio y conectalo

### Vercel

1. Instalá: `npm i -g vercel`
2. En la carpeta del proyecto: `vercel`
3. Seguí las instrucciones en pantalla

### GitHub Pages

1. Subí los archivos a un repo de GitHub
2. Andá a Settings → Pages
3. Elegí la rama `main` y guardá

---

## 🆘 Problemas Comunes

### El formulario no abre WhatsApp
- ✅ Verificá que el número en `config.js` esté bien escrito (sin espacios, sin guiones)
- ✅ Si usás compu, debe abrirse WhatsApp Web (tenés que tener sesión iniciada)
- ✅ Si usás celular, debe abrirse la app de WhatsApp

### El mapa no se ve
- ✅ Verificá tener conexión a internet (necesita cargar los mapas de OpenStreetMap)
- ✅ Fijate en la consola del navegador (F12) si hay errores

### Los colores no cambian
- ✅ Después de editar `config.css`, refrescá la página con `Ctrl + F5` (o `Cmd + Shift + R` en Mac)

---

## 📞 ¿Necesitás Ayuda?

Si tenés algún problema:
1. Revisá este archivo desde el principio
2. Verificá que todos los archivos estén en la misma carpeta
3. Probá abrir el `index.html` en otro navegador (Chrome, Firefox, Edge)

---

**¡Listo! Tu sitio web de MTB Salta está configurado y funcionando.** 🚵‍♂️🎉