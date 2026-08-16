// ── Contact form ─────────────────────────
function handleContactSubmit() {
  const name    = document.getElementById('cf-name').value.trim();
  const email   = document.getElementById('cf-email').value.trim();
  const phone   = document.getElementById('cf-phone').value.trim();
  const msg     = document.getElementById('cf-msg').value.trim();
  const errEl   = document.getElementById('cf-error');
  const targetEmailAddress = 'dwiniarczyk2@gmail.com';

  // Simple validation
  if (!name) { showError(errEl, currentLang === 'en' ? 'Please enter your name.' : 'Proszę podać imię i nazwisko.'); return; }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError(errEl, currentLang === 'en' ? 'Please enter a valid email.' : 'Proszę podać poprawny adres e-mail.'); return; }
  if (!phone) { showError(errEl, currentLang === 'en' ? 'Please enter your phone.' : 'Proszę podać numer telefonu.'); return; }
  if (!msg) { showError(errEl, currentLang === 'en' ? 'Please write a message.' : 'Proszę napisać wiadomość.'); return; }
  errEl.classList.add('hidden');

  const btn = document.getElementById('cf-submit');
  btn.textContent = currentLang === 'en' ? 'Sending…' : 'Wysyłanie…';
  btn.style.opacity = '0.6';
  btn.style.pointerEvents = 'none';

  // Build mailto link and open it
  const subject = encodeURIComponent((currentLang === 'en' ? 'Website enquiry from ' : 'Wiadomość ze strony od ') + name);
  const body    = encodeURIComponent(
    (currentLang === 'en' ? 'Name: ' : 'Imię: ') + name + '\n' +
    (email ? 'Email: ' + email + '\n' : '') +
    (phone ? (currentLang === 'en' ? 'Phone: ' : 'Telefon: ') + phone + '\n' : '') +
    '\n' + msg
  );
  window.location.href = `mailto:${targetEmailAddress}?subject=` + subject + '&body=' + body;

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