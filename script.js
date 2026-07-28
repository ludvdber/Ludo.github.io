/* =============================================================
   Interactions de la page.
   Règle générale : tout ce qui bouge est conditionné à
   prefers-reduced-motion, et aucun écouteur de scroll ne fait de
   calcul de mise en page — c'est IntersectionObserver qui s'en charge.
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* Les traductions doivent être posées avant tout le reste :
     l'effet machine à écrire et les compteurs lisent des attributs
     que le moteur i18n renseigne. */
  if (window.I18n) window.I18n.init();

  /* ===== Révélation au scroll ===== */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger');

  if (reducedMotion.matches) {
    revealElements.forEach(el => el.classList.add('visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);   // une seule fois : rien ne réapparaît en remontant
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ===== Barre de navigation : état « scrolled » ===== */
  const navbar = document.querySelector('.navbar');
  const scrollSentinel = document.createElement('div');
  scrollSentinel.setAttribute('aria-hidden', 'true');
  scrollSentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:60px;pointer-events:none;';
  document.body.prepend(scrollSentinel);

  new IntersectionObserver(([entry]) => {
    navbar.classList.toggle('scrolled', !entry.isIntersecting);
  }).observe(scrollSentinel);

  /* ===== Lien de navigation actif =====
     IntersectionObserver plutôt qu'un écouteur de scroll : on ne
     recalcule plus la position de chaque section à chaque frame. */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const visibleSections = new Set();

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visibleSections.add(entry.target.id);
      else visibleSections.delete(entry.target.id);
    });

    /* La section active est la première visible dans l'ordre du document. */
    let activeId = null;
    for (const section of sections) {
      if (visibleSections.has(section.id)) { activeId = section.id; break; }
    }

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
    });
  }, { rootMargin: '-30% 0px -55% 0px' });

  sections.forEach(section => sectionObserver.observe(section));

  /* ===== Menu mobile ===== */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  function closeMenu() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', () => {
    const willOpen = !navMenu.classList.contains('open');
    navMenu.classList.toggle('open', willOpen);
    navToggle.classList.toggle('open', willOpen);
    navToggle.setAttribute('aria-expanded', String(willOpen));
  });

  navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
      navToggle.focus();
    }
  });

  document.addEventListener('click', e => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      closeMenu();
    }
  });

  /* ===== Effet machine à écrire ===== */
  const typedEl = document.querySelector('.typed-text');
  let typingTimer = null;

  function parseWords() {
    const raw = typedEl.getAttribute('data-words-active') || typedEl.getAttribute('data-words') || '[]';
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) && parsed.length ? parsed : ['Développeur Full-Stack'];
    } catch (e) {
      return ['Développeur Full-Stack'];
    }
  }

  function startTyping() {
    if (!typedEl) return;
    clearTimeout(typingTimer);

    const words = parseWords();

    /* En mouvement réduit, on affiche simplement le premier libellé. */
    if (reducedMotion.matches) {
      typedEl.textContent = words[0];
      document.querySelector('.typed-cursor')?.classList.add('static');
      return;
    }

    let wordIndex = 0, charIndex = 0, deleting = false;

    (function step() {
      const word = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      typedEl.textContent = word.substring(0, charIndex);

      let delay = deleting ? 40 : 80;

      if (!deleting && charIndex === word.length) {
        delay = 2000;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }

      typingTimer = setTimeout(step, delay);
    })();
  }

  startTyping();

  /* ===== Compteurs animés ===== */
  const counters = document.querySelectorAll('.stat-number[data-target]');

  function render(el, value) {
    el.textContent = value + (el.getAttribute('data-suffix') || '');
  }

  function runCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    if (Number.isNaN(target)) return;

    if (reducedMotion.matches) { render(el, target); el.dataset.done = '1'; return; }

    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 60));
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      render(el, current);
      if (current === target) { clearInterval(timer); el.dataset.done = '1'; }
    }, 25);
  }

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { runCounter(entry.target); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  /* ===== Particules d'arrière-plan ===== */
  const particleContainer = document.querySelector('.particles');
  if (particleContainer && !reducedMotion.matches) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 18; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = (Math.random() * 2 + 1).toFixed(1) + 'px';
      particle.style.left = (Math.random() * 100).toFixed(2) + '%';
      particle.style.width = size;
      particle.style.height = size;
      particle.style.animationDuration = (Math.random() * 15 + 14).toFixed(1) + 's';
      particle.style.animationDelay = '-' + (Math.random() * 20).toFixed(1) + 's';
      fragment.appendChild(particle);
    }
    particleContainer.appendChild(fragment);
  }

  /* ===== Inclinaison 3D =====
     Uniquement sur les grandes cartes — l'appliquer aux dizaines de
     petits tags coûtait cher pour rien. On écrit dans des variables
     CSS au lieu de la propriété transform, pour ne pas écraser
     l'effet de survol défini en CSS. */
  if (!reducedMotion.matches && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.project-card, .about-aside, .contact-card, .extras-block').forEach(card => {
      let frame = null;

      card.addEventListener('mousemove', e => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = null;
          const rect = card.getBoundingClientRect();
          const rotateX = ((e.clientY - rect.top) - rect.height / 2) / 40;
          const rotateY = (rect.width / 2 - (e.clientX - rect.left)) / 40;
          card.style.setProperty('--rx', rotateX.toFixed(2) + 'deg');
          card.style.setProperty('--ry', rotateY.toFixed(2) + 'deg');
        });
      });

      card.addEventListener('mouseleave', () => {
        if (frame) { cancelAnimationFrame(frame); frame = null; }
        card.style.removeProperty('--rx');
        card.style.removeProperty('--ry');
      });
    });
  }

  /* ===== Réactions au changement de langue ===== */
  document.addEventListener('languagechange', () => {
    startTyping();
    /* Les compteurs déjà terminés doivent reprendre le bon suffixe. */
    counters.forEach(el => {
      if (el.dataset.done) render(el, parseInt(el.getAttribute('data-target'), 10));
    });
  });

  /* Si l'utilisateur bascule sa préférence système en cours de route. */
  reducedMotion.addEventListener('change', () => {
    revealElements.forEach(el => el.classList.add('visible'));
    startTyping();
  });
});
