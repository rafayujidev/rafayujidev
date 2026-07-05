/**
 * RAFAYUJIDEV - PORTFÓLIO FRONT-END
 * JavaScript para interatividade e funcionalidades
 * 
 * Recursos implementados:
 * 1. Menu mobile responsivo
 * 2. Validação de formulário de contato
 * 3. Filtro de projetos
 * 4. Efeitos de animação ao scroll
 * 5. Smooth scroll para links internos
 */

// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // MENU MOBILE RESPONSIVO
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animação do ícone hamburguer
            const hamburgers = menuToggle.querySelectorAll('.hamburger');
            if (navMenu.classList.contains('active')) {
                hamburgers[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                hamburgers[1].style.opacity = '0';
                hamburgers[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                hamburgers[0].style.transform = 'none';
                hamburgers[1].style.opacity = '1';
                hamburgers[2].style.transform = 'none';
            }
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const hamburgers = menuToggle.querySelectorAll('.hamburger');
                hamburgers[0].style.transform = 'none';
                hamburgers[1].style.opacity = '1';
                hamburgers[2].style.transform = 'none';
            });
        });
    }
    
    // ==========================================
    // EFEITO DE SCROLL NO HEADER
    // ==========================================
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    });
    
    // ==========================================
    // FILTRO DE PROJETOS (Página de Projetos)
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona classe active ao botão clicado
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filtra os projetos com animação
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
    
    // ==========================================
    // VALIDAÇÃO DO FORMULÁRIO DE CONTATO
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reseta erros anteriores
            clearErrors();
            
            // Coleta os valores dos campos
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            // Validação do nome
            if (!validateName(name.value)) {
                showError(name, 'nameError', 'Por favor, insira seu nome completo (mínimo 3 caracteres)');
                isValid = false;
            }
            
            // Validação do email
            if (!validateEmail(email.value)) {
                showError(email, 'emailError', 'Por favor, insira um email válido');
                isValid = false;
            }
            
            // Validação do assunto
            if (!validateSubject(subject.value)) {
                showError(subject, 'subjectError', 'Por favor, selecione um assunto');
                isValid = false;
            }
            
            // Validação da mensagem
            if (!validateMessage(message.value)) {
                showError(message, 'messageError', 'Por favor, insira uma mensagem (mínimo 10 caracteres)');
                isValid = false;
            }
            
            // Se todos os campos são válidos
            if (isValid) {
                // Simula envio do formulário
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
                
                // Simula delay de envio (em produção, seria uma requisição AJAX)
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    // Mostra mensagem de sucesso
                    formSuccess.classList.add('show');
                    
                    // Limpa o formulário
                    contactForm.reset();
                    
                    // Esconde mensagem de sucesso após 5 segundos
                    setTimeout(() => {
                        formSuccess.classList.remove('show');
                    }, 5000);
                }, 1500);
            }
        });
        
        // Validação em tempo real (ao perder o foco)
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            // Remove erro ao começar a digitar
            input.addEventListener('input', function() {
                this.classList.remove('error');
                const errorSpan = document.getElementById(this.id + 'Error');
                if (errorSpan) {
                    errorSpan.textContent = '';
                }
            });
        });
    }
    
    // Funções de validação
    function validateName(value) {
        return value.trim().length >= 3;
    }
    
    function validateEmail(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value.trim());
    }
    
    function validateSubject(value) {
        return value.trim() !== '';
    }
    
    function validateMessage(value) {
        return value.trim().length >= 10;
    }
    
    function validateField(field) {
        const fieldId = field.id;
        
        switch(fieldId) {
            case 'name':
                if (!validateName(field.value)) {
                    showError(field, 'nameError', 'Por favor, insira seu nome completo (mínimo 3 caracteres)');
                }
                break;
            case 'email':
                if (!validateEmail(field.value)) {
                    showError(field, 'emailError', 'Por favor, insira um email válido');
                }
                break;
            case 'subject':
                if (!validateSubject(field.value)) {
                    showError(field, 'subjectError', 'Por favor, selecione um assunto');
                }
                break;
            case 'message':
                if (!validateMessage(field.value)) {
                    showError(field, 'messageError', 'Por favor, insira uma mensagem (mínimo 10 caracteres)');
                }
                break;
        }
    }
    
    function showError(field, errorId, message) {
        field.classList.add('error');
        const errorSpan = document.getElementById(errorId);
        if (errorSpan) {
            errorSpan.textContent = message;
        }
    }
    
    function clearErrors() {
        const errorFields = document.querySelectorAll('.error');
        errorFields.forEach(field => {
            field.classList.remove('error');
        });
        
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(span => {
            span.textContent = '';
        });
    }
    
    // ==========================================
    // ANIMAÇÕES AO SCROLL (Intersection Observer)
    // ==========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa elementos para animação
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .education-card, .info-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ==========================================
    // SMOOTH SCROLL PARA LINKS INTERNOS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ==========================================
    // EFEITO PARALLAX NAS FORMAS FLUTUANTES
    // ==========================================
    const shapes = document.querySelectorAll('.shape');
    
    if (shapes.length > 0) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.05;
                shape.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
    
    // ==========================================
    // CONTADOR DE VISITAS (SIMULAÇÃO)
    // ==========================================
    // Em produção, isso seria integrado com um backend ou localStorage
    const visitCount = localStorage.getItem('visitCount') || 0;
    localStorage.setItem('visitCount', parseInt(visitCount) + 1);
    
    console.log(`Bem-vindo ao RafayujiDev! Visitas: ${parseInt(visitCount) + 1}`);
    
    // ==========================================
    // LAZY LOADING PARA IMAGENS (se houver)
    // ==========================================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback para navegadores mais antigos
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Mensagem de boas-vindas no console
    console.log('%c👋 Olá, desenvolvedor!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
    console.log('%cGostou do código? Sinta-se à vontade para explorar!', 'color: #0ea5e9; font-size: 12px;');
    
});

// ==========================================
// FUNÇÃO GLOBAL PARA SCROLL TO TOP
// ==========================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Adiciona botão de scroll to top dinamicamente
window.addEventListener('scroll', function() {
    let scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (!scrollTopBtn) {
        scrollTopBtn = document.createElement('button');
        scrollTopBtn.id = 'scrollTopBtn';
        scrollTopBtn.innerHTML = '↑';
        scrollTopBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #6366f1, #4f46e5);
            color: white;
            border: none;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        `;
        document.body.appendChild(scrollTopBtn);
        
        scrollTopBtn.addEventListener('click', scrollToTop);
    }
    
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});
