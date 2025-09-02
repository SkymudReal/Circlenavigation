document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close-btn');
  const infoModal = document.querySelector('.info-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');
  const modalGoBtn = document.getElementById('modal-go');
  const slices = document.querySelectorAll('.slice');
  let activeSlice = null;
  let currentHref = '';

  function activateSlice(slice) {
    if (activeSlice) activeSlice.classList.remove('active');
    slice.classList.add('active');
    activeSlice = slice;

    const linkEl = slice.closest('.slice-link');
    currentHref = linkEl.getAttribute('data-href').trim();
    const title = new URL(currentHref).hostname;

    modalTitle.textContent = title;
    modalText.textContent = slice.getAttribute('data-info');

    infoModal.classList.add('visible');
    overlay.classList.add('active');
    container.classList.add('active');
    closeBtn.classList.add('visible');
    document.body.style.backgroundImage = 'linear-gradient(to right, black, #1a1a1a)';
  }

  function deactivateSlice() {
    if (activeSlice) {
      activeSlice.classList.remove('active');
      activeSlice = null;
    }
    overlay.classList.remove('active');
    container.classList.remove('active');
    closeBtn.classList.remove('visible');
    infoModal.classList.remove('visible');
    document.body.style.backgroundImage = 'linear-gradient(to right, #ff0000, white)';
  }

  slices.forEach(slice => {
    slice.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      activateSlice(this);
    });
  });

  // Кнопка "Перейти"
  modalGoBtn.addEventListener('click', function () {
    if (currentHref) {
      window.open(currentHref, '_blank');
    }
  });

  // Закрытие
  overlay.addEventListener('click', e => e.target === overlay && deactivateSlice());
  closeBtn.addEventListener('click', deactivateSlice);
  document.addEventListener('keydown', e => e.key === 'Escape' && activeSlice && deactivateSlice());
});