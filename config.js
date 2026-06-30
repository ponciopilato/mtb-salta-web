// Configuración del Sitio MTB Salta
// Editá estos valores para personalizar tu sitio

const CONFIG = {
    // 📱 WhatsApp - TU NÚMERO AQUÍ
    // Formato: 54 + 9 + código de área + número (sin espacios ni guiones)
    whatsappNumber: '5493871234567',  // <== CAMBIAR ESTE NÚMERO
    
    // 📧 Información de Contacto
    email: 'info@mtbsalta.com',
    telefono: '+54 387 123 4567',
    ubicacion: 'Salta, Argentina',
    
    // 🌐 Redes Sociales (dejá vacío si no usás alguna)
    redes: {
        instagram: 'https://instagram.com/mtbsalta',
        facebook: 'https://facebook.com/mtbsalta',
        strava: 'https://strava.com/clubs/mtbsalta',
        youtube: ''  // Ejemplo: 'https://youtube.com/@mtbsalta'
    },
    
    // 🗺️ Coordenadas iniciales del mapa (centro)
    mapa: {
        lat: -24.7859,
        lng: -65.4038,
        zoom: 11
    },
    
    // 🎨 Colores (opcional - si querés cambiar desde acá)
    colores: {
        principio: '#6B8E23',   /* Olive Drab - vegetación */
        intermedio: '#D2691E',  /* Chocolate - rocas */
        avanzado: '#DAA520',    /* Goldenrod - sol */
        experto: '#8B0000'      /* Dark Red - extremo */
    }
};

// Exportar para usar en script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}