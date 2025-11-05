// Ultra Premium NeonGrid Pro - Main JavaScript
class NeonGridApp {
    constructor() {
        this.init();
    }

    init() {
        // Initialize all components
        this.initPreloader();
        this.initNavigation();
        this.initAnimations();
        this.initParticles();
        this.initTestimonials();
        this.initPricing();
        this.initCodeCopy();
        this.initScrollEffects();
        this.initPerformance();
        this.initAccessibility();
    }

    // Preloader
    initPreloader() {
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1500);
        });
    }

    // Navigation
    initNavigation() {
        const nav = document.querySelector('.floating-nav');
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelectorAll('.nav-link');

        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Mobile menu
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            document.querySelector('.nav-menu').classList.toggle('active');
            document.querySelector('.nav-actions').classList.toggle('active');
        });

        // Smooth scrolling
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Animations
    initAnimations() {
        // Initialize AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
                easing: 'ease-out-cubic'
            });
        }

        // GSAP Animations
        if (typeof gsap !== 'undefined') {
            this.initGSAPAnimations();
        }
    }

    initGSAPAnimations() {
        // Hero section animations
        const heroTimeline = gsap.timeline();

        heroTimeline
            .from('.hero-badge', {
                duration: 1,
                y: -50,
                opacity: 0,
                ease: 'power3.out'
            })
            .from('.hero-title', {
                duration: 1.2,
                y: 100,
                opacity: 0,
                ease: 'power3.out'
            }, '-=0.5')
            .from('.hero-subtitle', {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power3.out'
            }, '-=0.8')
            .from('.hero-stats', {
                duration: 1,
                y: 50,
                opacity: 0,
                stagger: 0.2,
                ease: 'power3.out'
            }, '-=0.6')
            .from('.hero-actions', {
                duration: 1,
                y: 50,
                opacity: 0,
                stagger: 0.1,
                ease: 'power3.out'
            }, '-=0.4');

        // Orb animations
        if (!this.shouldReduceMotion()) {
            gsap.to('.main-orb', {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: 'none'
            });

            gsap.to('.floating-orb', {
                y: 'random(-30, 30)',
                x: 'random(-20, 20)',
                rotation: 'random(-180, 180)',
                duration: 'random(3, 6)',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: 0.5
            });
        }

        // Scroll triggered animations
        this.initScrollAnimations();
    }

    initScrollAnimations() {
        // Feature cards animation
        gsap.utils.toArray('.feature-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                y: 100,
                opacity: 0,
                duration: 1,
                delay: i * 0.1,
                ease: 'power3.out'
            });
        });

        // Pricing cards animation
        gsap.utils.toArray('.pricing-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.2,
                ease: 'back.out(1.7)'
            });
        });
    }

    // Particles.js
    initParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: ['#a855f7', '#06b6d4', '#3b82f6']
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#a855f7',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            line_linked: {
                                opacity: 0.3
                            }
                        },
                        push: {
                            particles_nb: 4
                        }
                    }
                },
                retina_detect: true
            });
        }
    }

    // Testimonials Slider
    initTestimonials() {
        if (typeof Swiper !== 'undefined') {
            const testimonialSwiper = new Swiper('.testimonials-slider', {
                loop: true,
                speed: 600,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 40
                    }
                }
            });
        }
    }

    // Pricing Toggle
    initPricing() {
        const toggle = document.getElementById('pricing-toggle');
        const monthlyPrices = {
            starter: 29,
            professional: 99,
            enterprise: 499
        };
        const annualPrices = {
            starter: 23,
            professional: 79,
            enterprise: 399
        };

        if (toggle) {
            toggle.addEventListener('change', (e) => {
                const isAnnual = e.target.checked;
                this.updatePricing(isAnnual ? annualPrices : monthlyPrices);
            });
        }
    }

    updatePricing(prices) {
        document.querySelectorAll('.pricing-card').forEach(card => {
            const plan = card.querySelector('.plan-name').textContent.toLowerCase();
            const priceElement = card.querySelector('.amount');
            
            if (priceElement && prices[plan]) {
                // Animate price change
                gsap.to(priceElement, {
                    duration: 0.3,
                    opacity: 0,
                    y: -10,
                    onComplete: () => {
                        priceElement.textContent = prices[plan];
                        gsap.to(priceElement, {
                            duration: 0.3,
                            opacity: 1,
                            y: 0
                        });
                    }
                });
            }
        });
    }

    // Code Copy Functionality
    initCodeCopy() {
        const copyButtons = document.querySelectorAll('.copy-btn');
        
        copyButtons.forEach(button => {
            button.addEventListener('click', async () => {
                const codeBlock = button.closest('.code-preview');
                const codeContent = codeBlock.querySelector('code').textContent;
                
                try {
                    await navigator.clipboard.writeText(codeContent);
                    this.showCopySuccess(button);
                } catch (err) {
                    this.showCopyError(button);
                }
            });
        });
    }

    showCopySuccess(button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="ri-check-line"></i> Copied!';
        button.style.background = '#10b981';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }

    showCopyError(button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="ri-error-warning-line"></i> Failed';
        button.style.background = '#ef4444';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }

    // Scroll Effects
    initScrollEffects() {
        // Parallax effect for hero section
        if (!this.shouldReduceMotion()) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.orb');
                
                parallaxElements.forEach(element => {
                    const speed = element.dataset.speed || 0.5;
                    element.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });
        }

        // Intersection Observer for animations
        this.initIntersectionObserver();
    }

    initIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    
                    // Add specific animations based on element type
                    if (entry.target.classList.contains('feature-card')) {
                        this.animateFeatureCard(entry.target);
                    }
                    
                    if (entry.target.classList.contains('stat-item')) {
                        this.animateCounter(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.feature-card, .stat-item, .pricing-card').forEach(el => {
            observer.observe(el);
        });
    }

    animateFeatureCard(card) {
        gsap.from(card, {
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });
    }

    animateCounter(statItem) {
        const valueElement = statItem.querySelector('.stat-value');
        const targetValue = valueElement.textContent;
        
        if (isNaN(targetValue)) return;
        
        gsap.from(valueElement, {
            duration: 2,
            textContent: 0,
            ease: 'power2.out',
            snap: { textContent: 1 }
        });
    }

    // Performance Optimizations
    initPerformance() {
        // Lazy loading for images
        this.initLazyLoading();
        
        // Debounce scroll events
        this.debounceScrollEvents();
        
        // Optimize animations for mobile
        this.optimizeMobileAnimations();
    }

    initLazyLoading() {
        if ('IntersectionObserver' in window) {
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

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    debounceScrollEvents() {
        let ticking = false;
        
        const updateOnScroll = () => {
            // Update any scroll-dependent elements
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        });
    }

    optimizeMobileAnimations() {
        if (this.isMobileDevice()) {
            // Reduce particle count on mobile
            if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
                window.pJSDom[0].pJS.particles.number.value = 30;
                window.pJSDom[0].pJS.fn.particlesRefresh();
            }
            
            // Disable some heavy animations
            gsap.globalTimeline.timeScale(1.2);
        }
    }

    // Accessibility
    initAccessibility() {
        // Keyboard navigation
        this.initKeyboardNavigation();
        
        // Focus management
        this.initFocusManagement();
        
        // ARIA labels
        this.initARIALabels();
    }

    initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Escape key closes modals/menus
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
            
            // Tab key management
            if (e.key === 'Tab') {
                this.manageFocus(e);
            }
        });
    }

    initFocusManagement() {
        // Add focus styles for all interactive elements
        const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        focusableElements.forEach(el => {
            el.addEventListener('focus', () => {
                el.classList.add('focused');
            });
            
            el.addEventListener('blur', () => {
                el.classList.remove('focused');
            });
        });
    }

    initARIALabels() {
        // Add ARIA labels to interactive elements
        const buttons = document.querySelectorAll('button:not([aria-label])');
        
        buttons.forEach(button => {
            if (!button.textContent.trim() && !button.querySelector('img')) {
                const label = button.getAttribute('title') || 'Button';
                button.setAttribute('aria-label', label);
            }
        });
    }

    // Utility Methods
    shouldReduceMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    isMobileDevice() {
        return window.innerWidth <= 768;
    }

    closeAllModals() {
        // Close any open modals or menus
        document.querySelectorAll('.modal.open, .menu.open').forEach(el => {
            el.classList.remove('open');
        });
    }

    manageFocus(e) {
        // Manage focus trapping for modals
        const modals = document.querySelectorAll('.modal.open');
        
        if (modals.length > 0) {
            const currentModal = modals[modals.length - 1];
            const focusableElements = currentModal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    }

    // Utility function for debouncing
    debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    }

    // Utility function for throttling
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Additional Utility Classes
class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.init();
    }

    init() {
        this.observeLCP();
        this.observeFID();
        this.observeCLS();
    }

    observeLCP() {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
        });

        observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    observeFID() {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                this.metrics.fid = entry.processingStart - entry.startTime;
            });
        });

        observer.observe({ entryTypes: ['first-input'] });
    }

    observeCLS() {
        let clsValue = 0;
        let sessionValue = 0;
        let sessionEntries = [];

        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach(entry => {
                if (!entry.hadRecentInput) {
                    const firstSessionEntry = sessionEntries[0];
                    const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

                    if (entry.startTime - lastSessionEntry.startTime < 1000 &&
                        entry.startTime - firstSessionEntry.startTime < 5000) {
                        sessionValue += entry.value;
                        sessionEntries.push(entry);
                    } else {
                        sessionValue = entry.value;
                        sessionEntries = [entry];
                    }

                    if (sessionValue > clsValue) {
                        clsValue = sessionValue;
                        this.metrics.cls = clsValue;
                    }
                }
            });
        });

        observer.observe({ entryTypes: ['layout-shift'] });
    }

    getMetrics() {
        return this.metrics;
    }
}

class ErrorHandler {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('error', this.handleError.bind(this));
        window.addEventListener('unhandledrejection', this.handlePromiseRejection.bind(this));
    }

    handleError(event) {
        console.error('Application Error:', event.error);
        this.reportError(event.error);
    }

    handlePromiseRejection(event) {
        console.error('Unhandled Promise Rejection:', event.reason);
        this.reportError(event.reason);
    }

    reportError(error) {
        // Here you would typically send the error to your error reporting service
        console.log('Error reported:', error);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main application
    const app = new NeonGridApp();
    
    // Initialize additional utilities
    const performanceMonitor = new PerformanceMonitor();
    const errorHandler = new ErrorHandler();
    
    // Make app globally available for debugging
    window.NeonGridApp = app;
    
    // Log initialization
    console.log('🚀 NeonGrid Pro initialized successfully!');
    
    // Performance logging
    window.addEventListener('load', () => {
        const metrics = performanceMonitor.getMetrics();
        console.log('📊 Performance Metrics:', metrics);
    });
});

// Service Worker Registration (if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NeonGridApp, PerformanceMonitor, ErrorHandler };
}
