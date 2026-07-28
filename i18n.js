/* =============================================================
   i18n — bascule FR / EN
   Le français est la source de vérité : il vit directement dans
   index.html (bon pour le SEO et fonctionne sans JavaScript).
   Ce fichier ne contient que les traductions anglaises, plus un
   petit moteur qui mémorise le texte original pour pouvoir y
   revenir sans le dupliquer.
   ============================================================= */

const EN = {
  'a11y.skip': 'Skip to main content',

  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
  'nav.experience': 'Background',
  'nav.contact': 'Contact',

  'hero.h1': "Hi, I'm <span class=\"gradient-text\">Ludovic</span>",
  'hero.badge': 'Belgium · open to remote work',
  'hero.subtitle': 'Full-stack developer and system administrator. I build Java / Spring Boot and React applications, and I have been running my own Linux infrastructure since 2016.',
  'hero.degree.title': "Bachelor's degree in Application Development",
  'hero.degree.detail': '— ISFCE Brussels, June 2026, <em>Highest Distinction</em>',
  'hero.role.sr': 'Full-stack developer and system administrator',
  'hero.cta.projects': 'See my projects',
  'hero.stat.downloads': 'Downloads',
  'hero.stat.selfhosting': 'Self-hosting',
  'hero.stat.helped': 'People helped',
  'hero.stat.years': ' years',

  'about.title': 'About',
  'about.subtitle': 'A dual profile: application development and infrastructure',
  'about.p1': "I have just earned my <strong>Bachelor's degree in Application Development</strong> at <strong>ISFCE Brussels</strong> with <strong>Highest Distinction</strong>, after three years of study. I also hold a <strong>PC &amp; Network Technician certificate</strong>, obtained with distinction at IFAPME.",
  'about.p2': 'My final-year thesis, a direct continuation of my internship at the <strong>Royal Belgian Institute for Space Aeronomy (BIRA-IASB)</strong>, is a web platform for visualising Martian atmospheric data from the GEM-Mars model — Spring Boot, React and partial reading of NetCDF files.',
  'about.p3': 'What defines me is that I do not stop at the code: I have been running my own Proxmox infrastructure since 2016, from networking to reverse proxy and deployment. That dual skill set lets me understand an application end to end, from the database schema to the TLS certificate.',
  'about.aside.dev': 'On the development side',
  'about.aside.dev.last': 'Python · PHP · C++',
  'about.aside.infra': 'On the infrastructure side',
  'about.aside.infra.proxy': 'Nginx · reverse proxy',
  'about.aside.infra.net': 'DNS · VLAN · firewall',
  'about.aside.infra.last': 'Deployment · backups',
  'about.aside.note': 'The two live demos linked below run on this infrastructure.',

  'skills.title': 'Technical skills',
  'skills.subtitle': 'Technologies used on real projects, not just in class',
  'skills.languages': '💻 Languages',
  'skills.backend': '⚙️ Backend',
  'skills.frontend': '🎨 Frontend',
  'skills.data': '🗄️ Data &amp; storage',
  'skills.infra': '🏗️ Infrastructure &amp; tooling',
  'skills.network': '🌐 Networking &amp; systems',
  'skills.tag.firewall': 'Firewall',
  'skills.tag.proxy': 'Reverse proxy',

  'projects.title': 'Projects',
  'projects.subtitle': 'Two flagship projects, then a selection of other work',
  'projects.link.demo': 'View live demo',
  'projects.link.code': 'Source code',
  'projects.link.github': 'View on GitHub',
  'projects.link.thunderstore': 'View on Thunderstore',
  'projects.link.site': 'Visit the site',

  'projects.mcv.kicker': 'Final-year thesis — ISFCE 2026',
  'projects.mcv.desc': 'A web platform for visualising GEM-Mars atmospheric data: interactive exploration of simulation outputs converted to NetCDF. The server reads only the requested subsets — never whole files — which keeps large simulations server-side while staying responsive. Eleven visualisation types (2D maps, animations, vertical profiles, cross-sections, zonal means, Hovmöller diagrams, wind roses), shareable permalinks, CSV/NetCDF export and a five-language interface.',

  'projects.freenote.kicker': 'Personal project — in production',
  'projects.freenote.desc': 'A document-sharing platform restricted to verified ISFCE students: Discord OAuth2 authentication, @isfce.be address verification, PDF uploads with in-app preview, full-text search, favourites, XP-based leaderboards, real-time notifications over SSE and a moderation dashboard. The whole thing builds into a single self-contained JAR with the React frontend embedded.',

  'projects.gem.desc': 'Command-line tools that convert GEM-Mars atmospheric model outputs into CF-compliant NetCDF-4. Built during my internship at BIRA-IASB; it is the foundation Mars Climate Viewer is built on.',

  'projects.infra.title': 'Personal infrastructure',
  'projects.infra.desc': 'A Proxmox homelab running since 2016: virtualisation, websites, private cloud and game servers hosting up to 50 concurrent players. Nginx reverse proxy, TLS certificates, DNS, VLANs and backups. It is also what hosts the live demos linked on this page.',

  'projects.accio.desc': 'A desktop application that downloads, installs and launches six Harry Potter PC games from 2001 to 2009. Polished PyQt6 interface, streaming HTTPS downloads, path-traversal protection, and distribution as a standalone Windows executable.',

  'projects.modpacks.title': 'Lethal Reloaded — 48K downloads',
  'projects.modpacks.desc': 'A performance-focused modpack for Lethal Company, distributed on Thunderstore. It assembles and balances 146 mods — more than 50 moons and 20 enemies — while keeping the framerate stable. Maintained release after release to keep up with game and mod updates.',

  'projects.actuscope.desc': 'A news website built on a PHP MVC architecture, with two rendering modes: classic multi-page navigation or a single-page application via AJAX. Authentication, favourites and advanced search.',

  'projects.dispenses.title': 'Course exemption requests',
  'projects.dispenses.desc': 'A Java application for handling course exemption requests on the student side: submitting a case, attaching supporting documents and tracking the request status.',

  'projects.more.title': 'Also on my GitHub',
  'projects.more.d3d9': 'A C++ Direct3D 9 wrapper that fixes the game rendering on modern Windows',
  'projects.more.proxytech': 'A pure PHP MVC template, framework-free, to master routing and separation of concerns',
  'projects.more.acciosite': 'Showcase site and distribution channel for Accio Launcher, hosted on my own infrastructure',

  'exp.title': 'Background',
  'exp.subtitle': 'Education, professional experience and personal practice',
  'exp.type.education': 'Education',
  'exp.type.work': 'Experience',
  'exp.type.personal': 'Personal',

  'exp.bachelor.date': 'September 2023 — June 2026',
  'exp.bachelor.title': "Bachelor's degree in Application Development",
  'exp.bachelor.honours': 'Highest Distinction',
  'exp.bachelor.desc': 'A three-year software development programme: Java, PHP, JavaScript, databases, networking and project methodology. Final-year thesis: "A web platform for visualising GEM-Mars atmospheric data — interactive exploration of simulation outputs converted to NetCDF".',

  'exp.internship.date': 'October — December 2025',
  'exp.internship.title': 'Internship — Martian data processing',
  'exp.internship.desc': 'Developed Python command-line tools converting GEM-Mars atmospheric model outputs to CF-compliant NetCDF-4, working with real scientific simulation data. This internship is what my final-year thesis grew out of.',

  'exp.ifapme.date': 'September 2020 — June 2022',
  'exp.ifapme.title': 'PC &amp; Network Technician',
  'exp.ifapme.honours': 'with distinction',
  'exp.ifapme.desc': 'Certification in IT support and network administration. Final project: designing a secure network for a streaming company — VLAN segmentation, firewall, DNS and monitoring.',

  'exp.selfhost.date': 'Since 2016',
  'exp.selfhost.title': 'Self-hosting &amp; IT support',
  'exp.selfhost.place': 'Personal infrastructure &amp; Discord community',
  'exp.selfhost.desc': 'Ten years of continuously administering Proxmox and Linux infrastructure, plus volunteer technical support for more than 500 people within a Discord community.',

  'extras.title': 'Languages &amp; interests',
  'extras.languages': '🗣️ Languages',
  'extras.fr': 'French',
  'extras.fr.level': 'Native language',
  'extras.en': 'English',
  'extras.en.level': 'B1-B2 — solid reading and listening comprehension, speaking and writing improving',
  'extras.interests': '✨ Interests',
  'extras.space': '🌌 Space &amp; astronomy',
  'extras.chess': '♟️ Chess',
  'extras.japan': '🎌 Japanese culture',
  'extras.fitness': '💪 Fitness',
  'extras.milkshakes': '🍨 Milkshakes',

  'contact.title': 'Contact',
  'contact.subtitle': 'Based in Belgium, open to remote work — feel free to get in touch',
  'contact.linkedin': 'Professional profile'
};

/* Métadonnées de page, traduites elles aussi. */
const PAGE_META = {
  fr: {
    lang: 'fr',
    ogLocale: 'fr_BE',
    title: 'Ludovic — Développeur Full-Stack & Infrastructure',
    description: "Ludovic — Développeur Full-Stack & Infrastructure en Belgique. Bachelier en Développement d'Applications (ISFCE, La Plus Grande Distinction). Java / Spring Boot, React, Linux & self-hosting.",
    toggleLabel: 'EN',
    toggleAria: 'Switch to English'
  },
  en: {
    lang: 'en',
    ogLocale: 'en_GB',
    title: 'Ludovic — Full-Stack Developer & Infrastructure',
    description: "Ludovic — Full-Stack Developer & Infrastructure, based in Belgium. Bachelor's in Application Development (ISFCE, Highest Distinction). Java / Spring Boot, React, Linux & self-hosting.",
    toggleLabel: 'FR',
    toggleAria: 'Passer en français'
  }
};

const I18n = (() => {
  const STORAGE_KEY = 'lvb-lang';
  const originals = new Map();   // élément -> HTML français d'origine
  let current = 'fr';

  /* Mémorise le français tel qu'il est écrit dans le HTML, une seule fois. */
  function captureOriginals() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      originals.set(el, el.innerHTML);
    });
    document.querySelectorAll('[data-suffix-i18n]').forEach(el => {
      originals.set(el, el.getAttribute('data-suffix') || '');
    });
    const typed = document.querySelector('.typed-text');
    if (typed) originals.set(typed, typed.getAttribute('data-words') || '[]');
  }

  function apply(lang) {
    const toEnglish = lang === 'en';
    current = toEnglish ? 'en' : 'fr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (toEnglish && EN[key] !== undefined) {
        el.innerHTML = EN[key];
      } else if (originals.has(el)) {
        el.innerHTML = originals.get(el);
      }
    });

    /* Suffixes des compteurs (« 10 ans » / « 10 years »). */
    document.querySelectorAll('[data-suffix-i18n]').forEach(el => {
      const key = el.getAttribute('data-suffix-i18n');
      const suffix = toEnglish && EN[key] !== undefined ? EN[key] : originals.get(el);
      el.setAttribute('data-suffix', suffix);
    });

    /* Mots de l'effet machine à écrire. */
    const typed = document.querySelector('.typed-text');
    if (typed) {
      const words = toEnglish
        ? (typed.getAttribute('data-words-en') || originals.get(typed))
        : originals.get(typed);
      typed.setAttribute('data-words-active', words);
    }

    const meta = PAGE_META[current];
    document.documentElement.lang = meta.lang;
    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:locale', meta.ogLocale);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);

    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.textContent = meta.toggleLabel;
      toggle.setAttribute('aria-label', meta.toggleAria);
    }

    try { localStorage.setItem(STORAGE_KEY, current); } catch (e) { /* mode privé */ }

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: current } }));
  }

  function setMeta(attr, name, value) {
    const el = document.querySelector(`meta[${attr}="${name}"]`);
    if (el) el.setAttribute('content', value);
  }

  function detect() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'fr' || stored === 'en') return stored;
    } catch (e) { /* mode privé */ }
    return (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en';
  }

  function init() {
    captureOriginals();
    apply(detect());

    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => apply(current === 'fr' ? 'en' : 'fr'));
    }
  }

  return { init, apply, get current() { return current; } };
})();

window.I18n = I18n;
