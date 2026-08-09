document.addEventListener('DOMContentLoaded', () => {
  const items = Array.from(document.querySelectorAll('#gallery-grid .gallery-item'));
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const btnClose = document.getElementById('lightbox-close');
  const btnPrev = document.getElementById('lightbox-prev');
  const btnNext = document.getElementById('lightbox-next');

  let currentIndex = 0;

  function show(index) {
    currentIndex = (index + items.length) % items.length;
    const item = items[currentIndex];
    const img = item.querySelector('img');
    const caption = item.querySelector('.caption');
    lbImg.src = img.src;
    lbImg.alt = img.alt || '';
    lbCaption.textContent = caption ? caption.textContent.trim() : '';
  }

  function open(index) {
    show(index);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => open(i));
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', () => show(currentIndex - 1));
  btnNext.addEventListener('click', () => show(currentIndex + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.getElementById('gallery-wrap');
  const toggleBtn = document.getElementById('gallery-toggle');
  if (!wrap || !toggleBtn) return;

  const labels = {
    more: toggleBtn.textContent.trim(),
    less: 'Pokaż mniej'
  };

  toggleBtn.addEventListener('click', () => {
    const collapsed = wrap.classList.toggle('collapsed');
    toggleBtn.textContent = collapsed ? labels.more : labels.less;

    if (!collapsed) {
      // scroll so the newly revealed images are visible
      wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});