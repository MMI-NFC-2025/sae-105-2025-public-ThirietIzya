document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.header__menu-button');
  const menu = document.querySelector('.menu');

  if (menuButton && menu) {
    menuButton.addEventListener('click', function() {
      const isMenuHidden = menu.hasAttribute('hidden');

      if (isMenuHidden) {
        menu.removeAttribute('hidden');
        menuButton.setAttribute('aria-expanded', 'true');
      } else {
        menu.setAttribute('hidden', '');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

