/* ================================================================
   ReWater — Scripts (Theme, Scroll Reveal, Navigation)
   ================================================================ */
(function () {
    'use strict';

    /* ================================================================
       Theme Toggle (dark / light)
       ================================================================ */
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;

    // Determine initial theme: saved preference → OS preference → light
    function getInitialTheme() {
        const saved = localStorage.getItem('rewater-theme');
        if (saved === 'dark' || saved === 'light') return saved;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
        return 'light';
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
        localStorage.setItem('rewater-theme', theme);
    }

    let currentTheme = getInitialTheme();
    applyTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
    });

    // Respect OS changes while tab is open
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('rewater-theme')) {
            currentTheme = e.matches ? 'dark' : 'light';
            applyTheme(currentTheme);
        }
    });

    /* ================================================================
       Scroll Reveal
       ================================================================ */
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));

    /* ================================================================
       Navbar scroll shadow
       ================================================================ */
    const nav = document.getElementById('nav');
    let ticking = false;

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 20) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    /* ================================================================
       Mobile Nav Toggle
       ================================================================ */
    const toggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    /* ================================================================
       Smooth-scroll for anchor links
       ================================================================ */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

})();
