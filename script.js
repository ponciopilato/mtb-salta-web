// WhatsApp Configuration
const WHATSAPP_NUMBER = CONFIG.whatsappNumber;

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Formspree Form Handler - Simple email forwarding
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Formspree handles the submission natively
        // No custom JS needed - the form action handles everything
        console.log('Form submitted to Formspree');
    });
}

// Initialize Interactive Map with Leaflet
function initMap() {
    // Check if Leaflet is loaded
    if (typeof L === 'undefined') {
        console.error('Leaflet library not loaded!');
        return;
    }
    
    // Salta coordinates
    const saltaCoords = [-24.7859, -65.4038];
    
    // Create map centered on Salta
    const map = L.map('trailsMap').setView(saltaCoords, 11);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Trail data with actual coordinates (approximate)
    const trails = [
        {
            name: 'Circuito 1: Elefante - Los Hurones',
            coords: [-24.6800, -65.4100],  // Villa San Lorenzo area
            distance: 12.58,
            elevation: 675,
            duration: '3-4 hs',
            difficulty: 'intermediate',
            description: 'Ascenso a Cerro Elefante (1.926m) y descenso por Sendero de Los Hurones. Selva de yunga, fauna autóctona, vistas del Valle de Lerma.',
            color: '#8B4513'
        },
        {
            name: 'Circuito 2: Cerro Negro - Corralito',
            coords: [-24.6000, -65.5500],  // Cerro Negro / Puna area
            distance: 0,
            elevation: 3000,
            duration: 'Varias hrs',
            difficulty: 'expert',
            description: 'Descenso épico desde ~4.000m de puna hasta la selva de Corralito. Cruce de ecosistemas extremos sin transición.',
            color: '#2C1810'
        },
        {
            name: 'Circuito 3: Cerro Redondo',
            coords: [-24.5500, -65.6500],  // Incamayo / Precordillera
            distance: 22.5,
            elevation: 1256,
            duration: '10 hs',
            difficulty: 'advanced',
            description: 'Acceso a la precordillera profunda. Ascenso a 3.463m con vistas 360° y descenso ancestral por senderos marcados por generaciones.',
            color: '#D2691E'
        }
    ];
    
    // Custom icon based on difficulty
    function createIcon(difficulty) {
        const colors = {
            beginner: '#6B8E23',   /* Olive Drab */
            intermediate: '#D2691E', /* Chocolate */
            advanced: '#DAA520',   /* Goldenrod */
            expert: '#8B0000'      /* Dark Red */
        };
        
        return L.divIcon({
            className: 'custom-marker',
            html: `<div style="
                background-color: ${colors[difficulty]};
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            "></div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
    }
    
    // Add markers for each trail
    trails.forEach(trail => {
        const marker = L.marker(trail.coords, { icon: createIcon(trail.difficulty) }).addTo(map);
        
        // Create popup content
        const popupContent = `
            <div style="min-width: 250px; font-family: 'Open Sans', sans-serif;">
                <h3 style="margin: 0 0 10px 0; color: #1a202c; font-family: 'Montserrat', sans-serif;">${trail.name}</h3>
                <div style="display: flex; gap: 10px; margin-bottom: 10px; flex-wrap: wrap;">
                    <span style="background: #f7fafc; padding: 3px 8px; border-radius: 4px; font-size: 12px;">
                        <i class="fas fa-route" style="color: #667eea;"></i> ${trail.distance} km
                    </span>
                    <span style="background: #f7fafc; padding: 3px 8px; border-radius: 4px; font-size: 12px;">
                        <i class="fas fa-arrow-up" style="color: #667eea;"></i> ${trail.elevation}m
                    </span>
                    <span style="background: #f7fafc; padding: 3px 8px; border-radius: 4px; font-size: 12px;">
                        <i class="fas fa-clock" style="color: #667eea;"></i> ${trail.duration}
                    </span>
                </div>
                <p style="margin: 0 0 10px 0; color: #718096; font-size: 13px; line-height: 1.5;">${trail.description}</p>
                <div style="margin-top: 10px;">
                    <span style="
                        display: inline-block;
                        padding: 4px 12px;
                        border-radius: 20px;
                        font-size: 11px;
                        font-weight: 600;
                        color: white;
                        background: ${trail.color};
                        text-transform: uppercase;
                    ">${trail.difficulty === 'beginner' ? 'Principiante' : trail.difficulty === 'intermediate' ? 'Intermedio' : trail.difficulty === 'advanced' ? 'Avanzado' : 'Experto'}</span>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent);
    });
    
    // Add legend
    const legend = L.control({ position: 'bottomright' });
    
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'map-legend');
        div.innerHTML = `
            <div style="
                background: white;
                padding: 15px;
                border-radius: 10px;
                box-shadow: 0 2px 15px rgba(0,0,0,0.2);
                font-family: 'Open Sans', sans-serif;
            ">
                <h4 style="margin: 0 0 10px 0; font-family: 'Bebas Neue', sans-serif; font-size: 16px; letter-spacing: 1px; text-transform: uppercase; color: #2C1810;">Dificultad</h4>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 16px; height: 16px; background: #6B8E23; border-radius: 50%;"></div>
                        <span style="font-size: 12px; font-family: 'Oswald', sans-serif; font-weight: 600; text-transform: uppercase;">Principiante</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 16px; height: 16px; background: #D2691E; border-radius: 50%;"></div>
                        <span style="font-size: 12px; font-family: 'Oswald', sans-serif; font-weight: 600; text-transform: uppercase;">Intermedio</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 16px; height: 16px; background: #DAA520; border-radius: 50%;"></div>
                        <span style="font-size: 12px; font-family: 'Oswald', sans-serif; font-weight: 600; text-transform: uppercase;">Avanzado</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 16px; height: 16px; background: #8B0000; border-radius: 50%;"></div>
                        <span style="font-size: 12px; font-family: 'Oswald', sans-serif; font-weight: 600; text-transform: uppercase;">Experto</span>
                    </div>
                </div>
            </div>
        `;
        return div;
    };
    
    legend.addTo(map);
    
    console.log('Map initialized successfully! 🗺️');
}

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe trail cards and other elements
document.querySelectorAll('.trail-card, .difficulty-card, .tip-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Gallery item click
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const location = item.querySelector('.gallery-overlay span')?.textContent;
        if (location) {
            alert(`Galería: ${location}\n\nEn una versión completa, esto abriría un lightbox con más fotos.`);
        }
    });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
                navLink.style.color = 'var(--primary-color)';
            } else {
                navLink.classList.remove('active');
                navLink.style.color = 'var(--dark)';
            }
        }
    });
});

// Stats counter animation
const stats = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/\D/g, ''));
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + suffix;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + suffix;
            }
        }, 30);
    });
};

const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !statsAnimated) {
        statsAnimated = true;
        animateStats();
    }
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Initialize map when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    // Small delay to ensure map container is rendered
    setTimeout(initMap, 100);
}

// Trail data export
const trailData = [
    {
        name: 'Cerro San Bernardo',
        distance: 12,
        elevation: 450,
        duration: '2-3 hs',
        difficulty: 'intermediate',
        coordinates: [-24.7689, -65.3928]
    },
    {
        name: 'Valle de Lerma',
        distance: 25,
        elevation: 600,
        duration: '4-5 hs',
        difficulty: 'advanced',
        coordinates: [-24.8333, -65.5000]
    },
    {
        name: 'Quebrada de San Lorenzo',
        distance: 18,
        elevation: 800,
        duration: '3-4 hs',
        difficulty: 'advanced',
        coordinates: [-24.7167, -65.4500]
    },
    {
        name: 'Campo de Marte',
        distance: 8,
        elevation: 200,
        duration: '1-2 hs',
        difficulty: 'beginner',
        coordinates: [-24.7900, -65.4100]
    },
    {
        name: 'Cerro Castañal',
        distance: 15,
        elevation: 550,
        duration: '2-3 hs',
        difficulty: 'intermediate',
        coordinates: [-24.7700, -65.4200]
    },
    {
        name: 'Quebrada del Chachapoyas',
        distance: 30,
        elevation: 900,
        duration: '5-6 hs',
        difficulty: 'expert',
        coordinates: [-24.6500, -65.3800]
    }
];

window.trailData = trailData;

console.log('MTB Salta website loaded successfully! 🚵‍♂️');
console.log(`WhatsApp configured for: ${WHATSAPP_NUMBER}`);