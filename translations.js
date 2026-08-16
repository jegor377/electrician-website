var currentLang = 'pl';

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
      hero_desc:    'Profesjonalne usługi elektryczne dla domów, mieszkań i firm. Od szybkiego usuwania awarii, przez podłączenia AGD i pomiary, po kompleksowy montaż oraz modernizację instalacji. Solidne wykonanie, porządek i uczciwa wycena.',
      hero_cta:     'Bezpłatna wycena',
      hero_cta2:    'Zobacz realizacje',
      badge1:       'UPRAWNIENIA SEP I POMIARY',
      badge2:       'SZYBKA DIAGNOZA AWARII',
      badge3:       'BEZPIECZEŃSTWO I GWARANCJA',
      about_label:  'O mnie',
      about_heading:'Precyzyjna robota.<br/>Bez bałaganu. Bez zgadywania.',
      about_p1:     'Do każdego zlecenia podchodzę z pełnym zaangażowaniem, stawiając na dokładność, czystość i zgodność z normami SEP. Wykonuję zarówno kompleksowe instalacje w mieszkaniach i domach, jak i modernizacje istniejącej instalacji oraz rozdzielnic, wymiany WLZ czy montaż nowoczesnego oświetlenia LED.',
      about_p2:     'Każda praca jest przejrzyście wyceniana przed rozpoczęciem robót. Przyjeżdżam punktualnie, zostawiam po sobie porządek i nie idę na skróty — bo bezpieczna i sprawna instalacja elektryczna to spokój na lata.',
      services_label:'Usługi',
      svc1: 'MONTAŻ I WYMIANA INSTALACJI (DOMY I MIESZKANIA)',
      svc2: 'MODERNIZACJA ROZDZIELNIC I BEZPIECZNIKÓW',
      svc3: 'LOKALIZACJA I NAPRAWA AWARII',
      svc4: 'POMIARY OKRESOWE I ODBIORCZE',
      svc5: 'OŚWIETLENIE LED I BIAŁY MONTAŻ',
      svc6: 'PODŁĄCZANIE PŁYT INDUKCYJNYCH I PIEKARNIKÓW',
      gallery_label:   'Realizacje',
      gallery_heading: 'Ostatnie zlecenia',
      cap1: 'Prefabrykacja rozdzielnicy',
      cap2: 'Modernizacja kuchni',
      cap3: 'Oświetlenie LED w garażu',
      cap4: 'Biały montaż na wymagających powierzchniach',
      cap5: 'Montaż lampy w typie donut',
      cap6: 'Montaż oświetlenia szynowego',
      cap7: 'Montaż gniazd w kamieniu',
      cap8: 'Oświetlenie dekoracyjne w łazience',
      cap9: 'Montaż kryształowego żyrandola',
      cap10: 'Podłączenie i montaż nowoczesnego plafonu LED',
      show_more_text: 'Pokaż więcej zdjęć',
      show_less_text: 'Pokaż mniej zdjęć',
      reviews_label:   'Opinie',
      reviews_heading: 'Co mówią klienci',
      reviews_sub:     'Opinie z Google',
      reviews_link:    'Zobacz wszystkie na Google',
      rev1: '„Zleciłem wymianę instalacji elektrycznej i wszystko poszło bardzo sprawnie. Robota wykonana szybko, solidnie i bez żadnych problemów. Na każdym etapie był dobry kontakt, wszystko zostało jasno wytłumaczone, a po skończonej pracy został porządek. Widać doświadczenie i profesjonalne podejście. Z czystym sumieniem polecam."',
      rev2: '„Fachowo, solidnie, dokładnie i w dobrych cenach. Czego chcieć więcej od specjalisty? Polecam i pozdrawiam"',
      rev3: '„Dziękuję bardzo za zrobienie protokołu elektrycznego w lokalu gastronomicznym 🙏🙋‍♂️ good job polecam szybko sprawnie i w dobrej cenie …"',
      rev4: '„Serdecznie polecam usługi elektryczne świadczone przez Pana Daniela. Prace zostały wykonane profesjonalnie, terminowo i z dużą dbałością o szczegóły. Elektryk wykazał się wysoką wiedzą techniczną. Wszystkie prace zostały przeprowadzone zgodnie z obowiązującymi normami bezpieczeństwa. Dodatkowo na uwagę zasługuje bardzo dobry kontakt a także uczciwe podejście do wyceny! ...No i cierpliwość, cierpliwość to Jego drugie imię 😁. Zdecydowanie polecam każdemu, kto szuka sprawdzonego i solidnego elektryka."',
      contact_form_label:   'Kontakt',
      contact_form_heading: 'Skontaktuj się ze mną',
      contact_form_sub:     'Najszybciej załatwisz sprawę telefonicznie — zadzwoń, a odpowiem od razu. Możesz też opisać sprawę w mailu.',
      label_name:  'Imię i nazwisko',
      label_email: 'Adres e-mail',
      label_phone: 'Telefon',
      label_msg:   'Wiadomość',
      label_send:  'Wyślij wiadomość',
      cf_name_ph:  'Jan Kowalski',
      cf_email_ph: 'jan@example.com',
      cf_phone_ph: '+48 000 000 000',
      cf_msg_ph:   'Opisz czego potrzebujesz…',
      success_title: 'Wiadomość wysłana!',
      success_sub:   'Odezwę się tak szybko jak to możliwe.',
      optional_span: '(opcjonalnie)',
      footer_desc:          'Certyfikowane usługi elektryczne. Kompleksowe instalacje, pomiary i usuwanie awarii na terenie Poznania i okolic.',
      footer_contact_label: 'Kontakt',
      footer_location:      'Poznań i okolice',
      footer_hours_label:   'Godziny pracy',
      hours_mf:      'Pon – Sob',
      hours_sun:     'Niedziela',
      hours_closed:  'Nieczynne',
      hours_emergency: 'Awarie elektryczne: Dostępność 24/7',
      gallery_show_more: 'Pokaż więcej zdjęć',
      gallery_show_less: 'Pokaż mniej',
      footer_copy:   'Instalacje Winiarczyk. Wszystkie prawa zastrzeżone.',
    },
    en: {
    nav_about:    'About',
    nav_work:     'Projects',
    nav_reviews:  'Reviews',
    nav_contact:  'Contact',
    hero_watermark: 'ELECTRICIAN',
    hero_label:   'Electrician · Poznań and surrounding areas',
    hero_desc:    'Professional electrical services for homes, apartments and businesses. From quick fault repairs, through appliance connections and measurements, to complete installation and modernization work. Reliable workmanship, cleanliness and fair pricing.',
    hero_cta:     'Free quote',
    hero_cta2:    'View projects',
    badge1:       'SEP CERTIFICATION & MEASUREMENTS',
    badge2:       'FAST FAULT DIAGNOSIS',
    badge3:       'SAFETY & WARRANTY',
    about_label:  'About me',
    about_heading:'Precise work.<br/>No mess. No guesswork.',
    about_p1:     'I approach every job with full commitment, focusing on accuracy, cleanliness and compliance with SEP standards. I handle both complete installations in apartments and houses, as well as modernization of existing wiring and switchboards, mains cable replacement, and modern LED lighting installation.',
    about_p2:     'Every job is quoted transparently before work begins. I arrive on time, leave things tidy, and never cut corners — because a safe, well-functioning electrical installation means peace of mind for years to come.',
    services_label:'Services',
    svc1: 'INSTALLATION & REWIRING (HOUSES AND APARTMENTS)',
    svc2: 'SWITCHBOARD & FUSE MODERNIZATION',
    svc3: 'FAULT LOCATION & REPAIR',
    svc4: 'PERIODIC & ACCEPTANCE MEASUREMENTS',
    svc5: 'LED LIGHTING & FIXTURE INSTALLATION',
    svc6: 'INDUCTION HOB & OVEN CONNECTIONS',
    gallery_label:   'Projects',
    gallery_heading: 'Recent jobs',
    cap1: 'Switchboard prefabrication',
    cap2: 'Kitchen modernization',
    cap3: 'LED lighting in the garage',
    cap4: 'Fixture installation on demanding surfaces',
    cap5: 'Donut-style lamp installation',
    cap6: 'Track lighting installation',
    cap7: 'Outlet installation in stone',
    cap8: 'Decorative bathroom lighting',
    cap9: 'Crystal chandelier installation',
    cap10: 'Connection and installation of a modern LED ceiling light',
    show_more_text: 'Show more photos',
    show_less_text: 'Show fewer photos',
    reviews_label:   'Reviews',
    reviews_heading: 'What clients say',
    reviews_sub:     'Google reviews',
    reviews_link:    'See all on Google',
    rev1: '"I hired him to replace the electrical wiring and everything went very smoothly. The work was done quickly, reliably and without any issues. Communication was great at every stage, everything was clearly explained, and things were left tidy afterward. You can tell he\'s experienced and professional. I recommend him with a clear conscience."',
    rev2: '"Skilled, reliable, thorough and reasonably priced. What more could you want from a specialist? Highly recommend"',
    rev3: '"Thank you very much for preparing the electrical protocol for my restaurant premises 🙏🙋‍♂️ good job, fast, efficient and reasonably priced …"',
    rev4: '"I wholeheartedly recommend the electrical services provided by Daniel. The work was done professionally, on time and with great attention to detail. He showed strong technical knowledge. All work complied with current safety standards. Also worth noting is the excellent communication and honest approach to pricing! ...And patience — patience is his middle name 😁. Definitely recommend him to anyone looking for a reliable, trustworthy electrician."',
    contact_form_label:   'Contact',
    contact_form_heading: 'Get in touch',
    contact_form_sub:     'Calling is fastest — call and I\'ll answer right away. You can also describe your issue in an email.',
    label_name:  'Full name',
    label_email: 'Email address',
    label_phone: 'Phone',
    label_msg:   'Message',
    label_send:  'Send message',
    cf_name_ph:  'John Smith',
    cf_email_ph: 'john@example.com',
    cf_phone_ph: '+48 000 000 000',
    cf_msg_ph:   'Describe what you need…',
    success_title: 'Message sent!',
    success_sub:   'I\'ll get back to you as soon as possible.',
    optional_span: '(optional)',
    footer_desc:          'Certified electrical services. Complete installations, measurements and fault repairs in Poznań and the surrounding area.',
    footer_contact_label: 'Contact',
    footer_location:      'Poznań and surrounding areas',
    footer_hours_label:   'Working hours',
    hours_mf:      'Mon – Sat',
    hours_sun:     'Sunday',
    hours_closed:  'Closed',
    hours_emergency: 'Electrical emergencies: Available 24/7',
    gallery_show_more: 'Show more photos',
    gallery_show_less: 'Show less',
    footer_copy:   'Instalacje Winiarczyk. All rights reserved.',
},
  };

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

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    })

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