/**
 * Nahidul Islam - Front-End Engineer Portfolio
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ==========================================
    // 1. Theme Management
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    const setTheme = (themeName) => {
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('theme', themeName);
        if(themeName === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    };

    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (systemPrefersDark) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    initTheme();

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    // ==========================================
    // 2. Mobile Navigation
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const toggleMenu = () => {
        mobileMenuBtn.classList.toggle('active');
        navbar.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navbar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navbar.classList.contains('active')) {
            toggleMenu();
        }
    });

    // ==========================================
    // 3. Scroll Interactions (Header, Reveal & Back-to-Top)
    // ==========================================
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 4. Projects Rendering & Filtering
    // ==========================================
    const projects = [
        {
            title: "E-Commerce Interface",
            category: "UI",
            filter: "ui",
            description: "A responsive shopping interface focused on clean navigation, product discovery and mobile usability.",
            image: "assets/images/project-01.webp",
            technologies: ["HTML", "CSS", "JavaScript"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "SaaS Dashboard",
            category: "JavaScript",
            filter: "javascript",
            description: "An interactive analytics dashboard built with modern DOM manipulation and charting libraries.",
            image: "assets/images/project-02.webp",
            technologies: ["JavaScript", "CSS Grid", "Chart.js"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Startup Landing Page",
            category: "Landing Pages",
            filter: "landing",
            description: "A high-conversion landing page optimized for performance and accessibility.",
            image: "assets/images/project-03.webp",
            technologies: ["HTML5", "CSS3", "Animations"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    const renderProjects = (projectsToRender) => {
        if (!projectsGrid) return;
        projectsGrid.innerHTML = '';
        
        projectsToRender.forEach(project => {
            const card = document.createElement('div');
            card.className = 'glass project-card';
            card.innerHTML = `
                <div class="project-image">
                    <div style="width:100%; height:100%; background:var(--primary); opacity:0.1; display:flex; align-items:center; justify-content:center;">
                        <!-- Placeholder for actual images -->
                        <span style="color:var(--primary); font-weight:600; font-size:0.875rem;">Project Image</span>
                    </div>
                </div>
                <div class="project-content">
                    <span class="project-category">${project.category}</span>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.liveUrl}" class="project-link" aria-label="Live Demo for ${project.title}">Live Demo <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                        <a href="${project.githubUrl}" class="project-link" aria-label="GitHub Repository for ${project.title}">GitHub <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    };

    renderProjects(projects);

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                if (filterValue === 'all') {
                    renderProjects(projects);
                } else {
                    const filteredProjects = projects.filter(project => project.filter === filterValue);
                    renderProjects(filteredProjects);
                }
            });
        });
    }

    // ==========================================
    // 5. Form Validation
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Name validation
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Please enter your name.';
                isValid = false;
            } else {
                nameError.textContent = '';
            }
            
            // Email validation
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email format.';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Message validation
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('message-error');
            if (!messageInput.value.trim()) {
                messageError.textContent = 'Please enter your message.';
                isValid = false;
            } else {
                messageError.textContent = '';
            }
            
            if (isValid) {
                // Here you would typically send the data to a backend
                // Placeholder success message
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = 'Sent Successfully &check;';
                submitBtn.style.backgroundColor = 'var(--primary-dark)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.backgroundColor = '';
                    contactForm.reset();
                }, 3000);
            }
        });
    }

    // ==========================================
    // 6. Scroll Reveal Animations & Back to Top
    // ==========================================
    const backToTopBtn = document.getElementById('back-to-top');
    
    // Back to top & Active Link logic added to scroll listener
    window.addEventListener('scroll', () => {
        // Back to Top visibility
        if (window.scrollY > 500) {
            backToTopBtn?.classList.add('visible');
        } else {
            backToTopBtn?.classList.remove('visible');
        }
        
        // Active Nav Link highlighting
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Scroll to top click
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Scroll Reveal with IntersectionObserver
    const revealElements = document.querySelectorAll('.glass, .section-header, .hero-content');
    
    // Initial state
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
