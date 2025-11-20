// Inicializar GSAP
gsap.registerPlugin();

// Animaciones del fondo
gsap.set(".shape", { scale: 0, opacity: 0 });

// Animación de entrada de las formas
gsap.to(".shape", {
    scale: 1,
    opacity: 1,
    duration: 2,
    stagger: 0.3,
    ease: "power2.out"
});

// Animación continua de las formas
gsap.to(".shape-1", {
    y: -30,
    rotation: 360,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
});

gsap.to(".shape-2", {
    y: -40,
    rotation: -360,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
});

gsap.to(".shape-3", {
    y: -25,
    rotation: 180,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
});

gsap.to(".shape-4", {
    y: -35,
    rotation: -180,
    duration: 9,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
});

gsap.to(".shape-5", {
    y: -20,
    rotation: 270,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
});

gsap.to(".shape-6", {
    y: -45,
    rotation: -270,
    duration: 11,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
});

// Animación del grid
gsap.to(".grid-pattern", {
    x: 50,
    y: 50,
    duration: 30,
    repeat: -1,
    ease: "none"
});

// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de scroll en la navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 15, 20, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '1px solid rgba(104, 211, 145, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 20, 28, 0.95)';
        navbar.style.backdropFilter = 'blur(15px)';
        navbar.style.borderBottom = '1px solid rgba(104, 211, 145, 0.3)';
    }
});

// Animaciones avanzadas con GSAP
gsap.set("section", { opacity: 0, y: 50 });

// Animación de entrada de secciones
const tl = gsap.timeline();

tl.to("section", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
});

// Animación de las tarjetas de proyecto
gsap.set(".project-card", { opacity: 0, y: 30, scale: 0.9 });

// Observer para animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('project-card')) {
                gsap.to(entry.target, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out"
                });
            }
            
            if (entry.target.classList.contains('skill-item')) {
                gsap.to(entry.target, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    stagger: 0.1
                });
            }
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.project-card, .skill-item, .project-screenshot').forEach(el => {
    gsap.set(el, { opacity: 0, y: 30, scale: 0.9 });
    observer.observe(el);
});

// Animación especial para las imágenes de proyectos
document.querySelectorAll('.project-screenshot').forEach(screenshot => {
    screenshot.addEventListener('mouseenter', () => {
        gsap.to(screenshot, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    screenshot.addEventListener('mouseleave', () => {
        gsap.to(screenshot, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Efectos hover mejorados con GSAP
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Efecto de hover en las habilidades
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        gsap.to(skill, {
            scale: 1.1,
            y: -5,
            duration: 0.3,
            ease: "back.out(1.7)"
        });
    });
    
    skill.addEventListener('mouseleave', () => {
        gsap.to(skill, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Animación del botón principal
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out"
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
        });
    });
});

// Función para mostrar/ocultar detalles de proyectos
function toggleProjectDetails(projectId) {
    const details = document.getElementById(projectId);
    if (details) {
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    }
}

// Validación de formulario de contacto (si se agrega)
function validateContactForm() {
    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const message = document.getElementById('contact-message');
    
    let isValid = true;
    
    if (!name.value.trim()) {
        showError(name, 'El nombre es requerido');
        isValid = false;
    }
    
    if (!email.value.trim() || !isValidEmail(email.value)) {
        showError(email, 'El email es requerido y debe ser válido');
        isValid = false;
    }
    
    if (!message.value.trim()) {
        showError(message, 'El mensaje es requerido');
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '5px';
    
    field.parentNode.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Contador animado para estadísticas (opcional)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Efecto parallax suave en el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Lazy loading para imágenes (si se agregan)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Efecto de escritura en el título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Animación especial del hero
gsap.set(".hero-content h1", { opacity: 0, y: 50 });
gsap.set(".hero-content h3", { opacity: 0, y: 30 });
gsap.set(".hero-content p", { opacity: 0, y: 20 });
gsap.set(".hero-buttons", { opacity: 0, y: 30 });
gsap.set(".profile-image-container", { opacity: 0, scale: 0.8, rotation: -10 });

// Timeline del hero
const heroTl = gsap.timeline();

heroTl.to(".hero-content h1", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
})
.to(".hero-content h3", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
}, "-=0.5")
.to(".hero-content p", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
}, "-=0.3")
.to(".hero-buttons", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "back.out(1.7)"
}, "-=0.2")
.to(".profile-image-container", {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 1.2,
    ease: "back.out(1.7)"
}, "-=0.5");

// Animación del botón de WhatsApp
gsap.set(".whatsapp-btn", { scale: 0, opacity: 0 });

gsap.to(".whatsapp-btn", {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    delay: 2,
    ease: "back.out(1.7)"
});

// Animación continua del botón de WhatsApp
gsap.to(".whatsapp-btn", {
    y: -5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
});

// Aplicar efecto de escritura al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
    
    // Cargar automáticamente las capturas de pantalla de los proyectos
    loadProjectScreenshots();
});

// Función para cargar capturas de pantalla automáticamente basadas en los links
function loadProjectScreenshots() {
    // Configuración del servicio de screenshots (usando thum.io como ejemplo gratuito)
    // Otros servicios posibles: microlink.io, screenshotapi.net, etc.
    const getScreenshotUrl = (url) => `https://image.thum.io/get/width/800/crop/600/noanimate/${url}`;
    
    // 1. Para el proyecto principal (Blackjack)
    const mainProjectImage = document.querySelector('.project-screenshot img');
    const mainProjectLink = document.querySelector('.project-image a');
    
    if (mainProjectImage && mainProjectLink && mainProjectLink.href) {
        mainProjectImage.src = getScreenshotUrl(mainProjectLink.href);
        // Añadir manejo de errores por si falla la carga
        mainProjectImage.onerror = () => {
            mainProjectImage.src = 'img/blackjack.svg'; // Fallback
        };
    }

    // 2. Para las tarjetas de proyectos (Grid)
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const imageImg = card.querySelector('.card-screenshot');
        // Buscar el enlace de demo. Asumimos que es el enlace que envuelve la imagen o un botón de "Ver Demo"
        // En nuestra estructura actual, la imagen está envuelta en un <a> con el link del demo
        const demoLink = card.querySelector('.project-card-image a');
        
        if (imageImg && demoLink && demoLink.href) {
            imageImg.src = getScreenshotUrl(demoLink.href);
        }
    });
}
