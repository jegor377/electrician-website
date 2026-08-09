// ── Hamburger menu ──────────────────────
(function () {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('mobile-menu');
  const bars   = toggle.querySelectorAll('.ham-bar');
  let open = false;

  function setOpen(state) {
    open = state;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) {
      menu.style.maxHeight = menu.scrollHeight + 'px';
      bars[0].style.transform = 'translateY(8px) rotate(45deg)';
      bars[1].style.opacity   = '0';
      bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
      menu.style.maxHeight = '0';
      bars[0].style.transform = '';
      bars[1].style.opacity   = '1';
      bars[2].style.transform = '';
    }
  }

  toggle.addEventListener('click', () => setOpen(!open));
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });
})();

// ── Language switcher ───────────────────
(function () {
  const translations = {
    pl: {
      nav_about:    'O nas',
      nav_work:     'Realizacje',
      nav_reviews:  'Opinie',
      nav_contact:  'Kontakt',
      hero_watermark: 'ELEKTRYK',
      hero_label:   'Elektryk · Poznań i okolice',
      hero_desc:    'Instalacje elektryczne dla domu i firm — kompleksowe okablowanie, szukanie usterek i inteligentne instalacje. Żadna praca nie jest zbyt mała. Solidna robota. Uczciwa cena.',
      hero_cta:     'Bezpłatna wycena',
      hero_cta2:    'Zobacz realizacje',
      badge1:       '15+ lat doświadczenia',
      badge2:       'W pełni ubezpieczony',
      badge3:       'Ocena 5 gwiazdek',
      about_label:  'O nas',
      about_heading:'Precyzyjna robota.<br/>Bez bałaganu. Bez zgadywania.',
      about_p1:     'Pracuję jako elektryk od ponad 15 lat — od kompleksowego okablowania starych bloków po montaż ładowarek do samochodów elektrycznych i inteligentne oświetlenie w nowoczesnych domach.',
      about_p2:     'Każda praca jest wyceniana transparentnie, zanim zacznę. Przyjeżdżam punktualnie, sprzątam po sobie i nie idę na skróty — bo błędy w instalacji elektrycznej wychodzą w najgorszym możliwym momencie.',
      services_label:'Usługi',
      svc1: 'Okablowanie mieszkań i domów',
      svc2: 'Wymiana rozdzielnicy',
      svc3: 'Szukanie i naprawa usterek',
      svc4: 'Montaż ładowarek EV',
      svc5: 'Inteligentny dom i oświetlenie',
      svc6: 'Instalacje komercyjne',
      gallery_label:   'Realizacje',
      gallery_heading: 'Ostatnie zlecenia',
      cap1: 'Modernizacja kuchni · Blok, Poznań',
      cap2: 'Modernizacja kuchni · Blok, Poznań',
      cap3: 'Inteligentne oświetlenie · Willa prywatna',
      gallery_note: 'Zamień powyższe zdjęcia na własne — patrz komentarz w kodzie HTML.',
      reviews_label:   'Opinie',
      reviews_heading: 'Co mówią klienci',
      reviews_sub:     'Opinie z Google',
      reviews_link:    'Zobacz wszystkie na Google',
      rev1: '„Zleciłem wymianę instalacji elektrycznej i wszystko poszło bardzo sprawnie. Robota wykonana szybko, solidnie i bez żadnych problemów. Na każdym etapie był dobry kontakt, wszystko zostało jasno wytłumaczone, a po skończonej pracy został porządek. Widać doświadczenie i profesjonalne podejście. Z czystym sumieniem polecam."',
      rev2: '„Fachowo, solidnie, dokładnie i w dobrych cenach. Czego chcieć więcej od specjalisty? Polecam i pozdrawiam"',
      rev3: '„Dziękuję bardzo za zrobienie protokołu elektrycznego w lokalu gastronomicznym 🙏🙋‍♂️ good job polecam szybko sprawnie i w dobrej cenie …"',
      rev4: '„Serdecznie polecam usługi elektryczne świadczone przez Pana Daniela. Prace zostały wykonane profesjonalnie, terminowo i z dużą dbałością o szczegóły. Elektryk wykazał się wysoką wiedzą techniczną. Wszystkie prace zostały przeprowadzone zgodnie z obowiązującymi normami bezpieczeństwa. Dodatkowo na uwagę zasługuje bardzo dobry kontakt a także uczciwe podejście do wyceny! ...No i cierpliwość, cierpliwość to Jego drugie imię 😁. Zdecydowanie polecam każdemu, kto szuka sprawdzonego i solidnego elektryka."',
      footer_desc:          'Licencjonowany elektryk.<br/>Obsługuję Poznań i okolice.',
      footer_contact_label: 'Kontakt',
      footer_location:      'Poznań i okolice',
      footer_hours_label:   'Godziny pracy',
      hours_mf:      'Pon – Sob',
      hours_sun:     'Niedziela',
      hours_closed:  'Nieczynne',
      hours_emergency: 'Awarie: dostępny całą dobę.',
      footer_copy:   '© 2025 Instalacje Winiarczyk. Wszystkie prawa zastrzeżone.',
    },
    en: {
      nav_about:    'About',
      nav_work:     'Work',
      nav_reviews:  'Reviews',
      nav_contact:  'Contact',
      hero_watermark: 'ELECTRICIAN',
      hero_label:   'Electrician · Poznań & surroundings',
      hero_desc:    'Residential and commercial electrical work done right — installations, rewiring, fault-finding, and smart home setups. No job too small. Neat work. Fair price.',
      hero_cta:     'Get a free quote',
      hero_cta2:    'See the work',
      badge1:       '15+ years experience',
      badge2:       'Fully insured',
      badge3:       '5-star rated',
      about_label:  'About',
      about_heading:'Precise work.<br/>No mess. No guessing.',
      about_p1:     "I've been working as an electrician for over 15 years, handling everything from full rewires in old apartment blocks to EV charger installations and smart lighting in modern homes.",
      about_p2:     "Every job is quoted transparently before I start. I show up on time, I clean up when I'm done, and I don't cut corners — because electrical work that's done wrong shows up later at the worst possible moment.",
      services_label:'Services',
      svc1: 'Residential Rewiring',
      svc2: 'Fuse Board Upgrades',
      svc3: 'Fault Finding & Repair',
      svc4: 'EV Charger Installation',
      svc5: 'Smart Home & Lighting',
      svc6: 'Commercial Installations',
      gallery_label:   'Work',
      gallery_heading: 'Recent jobs',
      cap1: 'Fuse board upgrade · Apartment block, Poznań',
      cap2: 'Conduit installation · New build',
      cap3: 'Smart lighting setup · Private villa',
      gallery_note: 'Replace placeholder images above with your own photos — see the comment in the HTML.',
      reviews_label:   'Reviews',
      reviews_heading: 'What clients say',
      reviews_sub:     'Powered by Google Reviews',
      reviews_link:    'View all on Google',
      rev1: '"I had the electrical system replaced, and everything went very smoothly. The work was done quickly, thoroughly, and without any problems. Communication was excellent at every stage, everything was clearly explained, and the job was left tidy afterward. Their experience and professional approach are evident. I wholeheartedly recommend them."',
      rev2: '"Professional, reliable, thorough, and at a good price. What more could you want from a specialist? I highly recommend and salute you."',
      rev3: '"Thank you very much for making the electrical protocol in the restaurant 🙏🙋‍♂️ good job, I recommend it quickly, efficiently and at a good price …"',
      rev4: '"I highly recommend the electrical services provided by Mr. Daniel. The work was completed professionally, on time, and with great attention to detail. The electrician demonstrated excellent technical knowledge. All work was carried out in accordance with applicable safety standards. Additionally, his excellent communication skills and honest approach to pricing are noteworthy! ...And patience, patience is his middle name 😁. I highly recommend him to anyone looking for a reliable and trustworthy electrician."',
      footer_desc:          'Licensed electrician.<br/>Serving Poznań and Greater Poland region.',
      footer_contact_label: 'Contact',
      footer_location:      'Poznań & surroundings',
      footer_hours_label:   'Hours',
      hours_mf:      'Mon – Sat',
      hours_sun:     'Sunday',
      hours_closed:  'Closed',
      hours_emergency: 'Emergencies: call anytime.',
      footer_copy:   '© 2025 Instalacje Winiarczyk. All rights reserved.',
    }
  };

  let currentLang = 'pl';

  function applyLang(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Update all lang button states (desktop + mobile)
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.replace('inactive', 'active');
      } else {
        btn.classList.replace('active', 'inactive');
      }
    });
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Start in Polish
  applyLang('pl');
})();