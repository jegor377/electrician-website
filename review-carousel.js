// ── Review carousel navigation ───────────────
(function () {
  const track   = document.getElementById('review-track');
  const btnPrev = document.getElementById('review-prev');
  const btnNext = document.getElementById('review-next');

  // One card width + gap (matches CSS: flex: 0 0 300px; gap: 20px)
  const STEP = 300 + 20;

  function updateButtons() {
    const atStart = track.scrollLeft <= 4;
    const atEnd   = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
    btnPrev.disabled = atStart;
    btnNext.disabled = atEnd;
  }

  btnPrev.addEventListener('click', () => {
    track.scrollBy({ left: -STEP, behavior: 'smooth' });
  });

  btnNext.addEventListener('click', () => {
    track.scrollBy({ left: STEP, behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateButtons, { passive: true });

  // Initial check (next enabled, prev disabled)
  updateButtons();
})();