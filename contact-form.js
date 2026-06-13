// ── Contact form ─────────────────────────
function handleContactSubmit() {
  const name    = document.getElementById('cf-name').value.trim();
  const email   = document.getElementById('cf-email').value.trim();
  const phone   = document.getElementById('cf-phone').value.trim();
  const msg     = document.getElementById('cf-msg').value.trim();
  const errEl   = document.getElementById('cf-error');

  // Simple validation
  if (!name) { showError(errEl, currentContactLang === 'en' ? 'Please enter your name.' : 'Proszę podać imię i nazwisko.'); return; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError(errEl, currentContactLang === 'en' ? 'Please enter a valid email.' : 'Proszę podać poprawny adres e-mail.'); return; }
  if (!msg) { showError(errEl, currentContactLang === 'en' ? 'Please write a message.' : 'Proszę napisać wiadomość.'); return; }
  errEl.classList.add('hidden');

  const btn = document.getElementById('cf-submit');
  btn.textContent = currentContactLang === 'en' ? 'Sending…' : 'Wysyłanie…';
  btn.style.opacity = '0.6';
  btn.style.pointerEvents = 'none';

  // Build mailto link and open it
  const subject = encodeURIComponent((currentContactLang === 'en' ? 'Website enquiry from ' : 'Wiadomość ze strony od ') + name);
  const body    = encodeURIComponent(
    (currentContactLang === 'en' ? 'Name: ' : 'Imię: ') + name + '\n' +
    'Email: ' + email + '\n' +
    (phone ? (currentContactLang === 'en' ? 'Phone: ' : 'Telefon: ') + phone + '\n' : '') +
    '\n' + msg
  );
  window.location.href = 'mailto:kontakt@example.com?subject=' + subject + '&body=' + body;

  // Show success after short delay
  setTimeout(function() {
    document.getElementById('contact-form-wrap').classList.add('hidden');
    document.getElementById('contact-success').classList.remove('hidden');
  }, 800);
}

function showError(el, msg) {
  el.textContent = msg;
  el.classList.remove('hidden');
}

let currentContactLang = 'pl';

// Hook into the existing language switcher to update contact form labels
(function() {
  const contactI18n = {
    pl: {
      'contact-form-label':   'Kontakt',
      'contact-form-heading': 'Napisz do nas',
      'contact-form-sub':     'Opisz swoją sprawę, a odpiszę tak szybko jak to możliwe. Możesz też zadzwonić lub napisać maila bezpośrednio.',
      'label-name':  'Imię i nazwisko',
      'label-email': 'Adres e-mail',
      'label-phone': 'Telefon',
      'label-msg':   'Wiadomość',
      'label-send':  'Wyślij wiadomość',
      'cf-name-ph':  'Jan Kowalski',
      'cf-email-ph': 'jan@example.com',
      'cf-phone-ph': '+48 000 000 000',
      'cf-msg-ph':   'Opisz czego potrzebujesz…',
      'success-title': 'Wiadomość wysłana!',
      'success-sub':   'Odezwę się tak szybko jak to możliwe.',
    },
    en: {
      'contact-form-label':   'Contact',
      'contact-form-heading': 'Send us a message',
      'contact-form-sub':     "Describe what you need and I'll get back to you as soon as possible. You can also call or email directly.",
      'label-name':  'Full name',
      'label-email': 'Email address',
      'label-phone': 'Phone',
      'label-msg':   'Message',
      'label-send':  'Send message',
      'cf-name-ph':  'John Smith',
      'cf-email-ph': 'john@example.com',
      'cf-phone-ph': '+48 000 000 000',
      'cf-msg-ph':   'Describe what you need…',
      'success-title': 'Message sent!',
      'success-sub':   "I'll get back to you as soon as possible.",
    }
  };

  // Observe language button clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = btn.dataset.lang;
      currentContactLang = lang;
      const t = contactI18n[lang];

      ['contact-form-label','contact-form-heading','contact-form-sub',
       'success-title','success-sub'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t[id];
      });

      // Labels (first text node before the optional span)
      ['label-name','label-email','label-phone','label-msg'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const span = el.querySelector('span');
          el.textContent = t[id];
          if (id === 'label-phone') {
            const opt = document.createElement('span');
            opt.className = 'normal-case tracking-normal font-body font-400 text-muted/60';
            opt.textContent = lang === 'en' ? ' (optional)' : ' (opcjonalnie)';
            el.appendChild(opt);
          }
        }
      });

      const submitBtn = document.getElementById('cf-submit');
      if (submitBtn) submitBtn.textContent = t['label-send'];

      document.getElementById('cf-name').placeholder  = t['cf-name-ph'];
      document.getElementById('cf-email').placeholder = t['cf-email-ph'];
      document.getElementById('cf-phone').placeholder = t['cf-phone-ph'];
      document.getElementById('cf-msg').placeholder   = t['cf-msg-ph'];
    });
  });
})();