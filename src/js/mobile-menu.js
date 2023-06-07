(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menuItems = document.querySelectorAll('.js-menu-item');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open-mob');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const closeMenu = () => {
    openMenuBtn.setAttribute('aria-expanded', false);
    mobileMenu.classList.remove('is-open-mob');
    bodyScrollLock.enableBodyScroll(document.body);
  };

  const handleOutsideClick = (event) => {
    if (!mobileMenu.contains(event.target) && !openMenuBtn.contains(event.target)) {
      closeMenu();
    }
  };

  const handleEscKey = (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  menuItems.forEach((item) => {
    item.addEventListener('click', toggleMenu);
  });

  document.addEventListener('click', handleOutsideClick);
  document.addEventListener('keydown', handleEscKey);

  // Закрытие мобильного меню на широких экранах при изменении ориентации устройства
  window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
    if (!e.matches) return;
    closeMenu();
  });
})();