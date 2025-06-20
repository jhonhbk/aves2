function abrirDato(numero) {
  window.location.href = `dato${numero}.html`;
}

function generarQR(id, url) {
  const qr = new QRCodeStyling({
    width: 250,
    height: 250,
    data: url,
    dotsOptions: { color: "#000", type: "square" },
    backgroundOptions: { color: "#fff" },
    cornersSquareOptions: { color: "#000" },
  });
  qr.append(document.getElementById(id));
}


window.onload = function () {
  const base = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, "/");
  generarQR("qr1", base + "dato1.html");
  generarQR("qr2", base + "dato2.html");
  generarQR("qr3", base + "dato3.html");
  generarQR("qr4", base + "dato4.html");
  generarQR("qr5", base + "dato5.html");
  generarQR("qr6", base + "dato6.html");
  generarQR("qr7", base + "dato7.html");
  generarQR("qr8", base + "dato8.html");
  generarQR("qr9", base + "dato9.html");
  generarQR("qr10", base + "dato10.html");
  generarQR("qr11", base + "dato11.html");
  generarQR("qr12", base + "dato12.html");
  generarQR("qr13", base + "dato13.html");
  generarQR("qr14", base + "dato14.html");
  generarQR("qr15", base + "dato15.html");
  generarQR("qr16", base + "dato16.html");
  generarQR("qr17", base + "dato17.html");
  generarQR("qr18", base + "dato18.html");
  generarQR("qr19", base + "dato19.html");
  generarQR("qr20", base + "dato20.html");
  generarQR("qr21", base + "dato21.html");
  generarQR("qr22", base + "dato22.html");
  generarQR("qr23", base + "dato23.html");
  generarQR("qr24", base + "dato24.html");
  generarQR("qr25", base + "dato25.html");
  generarQR("qr26", base + "dato26.html");
  generarQR("qr27", base + "dato27.html");
  generarQR("qr28", base + "dato28.html");
  generarQR("qr29", base + "dato29.html");
};




// CODIGO ADCICIONAL ESTILOS

// Carrusel Infinito - Solo CSS Animation
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    
    // Duplicar slides para crear efecto infinito
    function duplicateSlides() {
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });
    }
    
    // Precargar imágenes para mejor rendimiento
    function preloadImages() {
        slides.forEach(slide => {
            const img = slide.querySelector('img');
            if (img && img.src) {
                const preloadImg = new Image();
                preloadImg.src = img.src;
            }
        });
    }
    
    // Control de pausa con Intersection Observer
    function setupIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        track.style.animationPlayState = 'running';
                    } else {
                        track.style.animationPlayState = 'paused';
                    }
                });
            }, {
                threshold: 0.1
            });
            
            observer.observe(document.querySelector('.carousel-container'));
        }
    }
    
    // Pause on page visibility change
    function setupVisibilityChange() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                track.style.animationPlayState = 'paused';
            } else {
                track.style.animationPlayState = 'running';
            }
        });
    }
    
    // Reducir velocidad en móviles para mejor UX
    function adjustSpeedForMobile() {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            track.style.animationDuration = '35s';
        }
    }
    
    // Efectos de hover mejorados
    function setupHoverEffects() {
        slides.forEach(slide => {
            slide.addEventListener('mouseenter', () => {
                slide.style.transform = 'translateY(-8px) scale(1.02)';
                slide.style.filter = 'brightness(1.1)';
            });
            
            slide.addEventListener('mouseleave', () => {
                slide.style.transform = 'translateY(0) scale(1)';
                slide.style.filter = 'brightness(1)';
            });
        });
    }
    
    // Reiniciar animación suavemente cuando termine
    function setupAnimationLoop() {
        track.addEventListener('animationiteration', () => {
            // La animación se reinicia automáticamente con CSS
            // Este evento se puede usar para analytics o callbacks
        });
    }
    
    // Inicializar todo
    function init() {
        duplicateSlides();
        preloadImages();
        setupIntersectionObserver();
        setupVisibilityChange();
        adjustSpeedForMobile();
        setupHoverEffects();
        setupAnimationLoop();
        
        // Iniciar animación
        track.style.animationPlayState = 'running';
    }
    
    // Manejar resize de ventana
    window.addEventListener('resize', () => {
        adjustSpeedForMobile();
    });
    
    // Inicializar cuando el DOM esté listo
    init();
});

// Optimización para performance
(function() {
    // Reducir animaciones si el usuario prefiere menos movimiento
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const track = document.querySelector('.carousel-track');
        if (track) {
            track.style.animationDuration = '120s'; // Más lento
        }
    }
    
    // Pausar animaciones cuando la batería está baja (si está disponible)
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            if (battery.level < 0.2) {
                const track = document.querySelector('.carousel-track');
                if (track) {
                    track.style.animationPlayState = 'paused';
                }
            }
        });
    }
})();





// IMAGENES DESPLEGABLES
