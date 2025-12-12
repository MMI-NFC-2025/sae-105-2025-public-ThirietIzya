document.addEventListener('DOMContentLoaded', function() {
  // 1. On sélectionne les éléments importants
  const menuButton = document.querySelector('.header__menu-button');
  const menu = document.querySelector('.menu');
  const header = document.querySelector('.header'); // <-- AJOUT : On sélectionne le header

  // On vérifie que tout a bien été trouvé
  if (menuButton && menu && header) { // <-- AJOUT : On vérifie aussi le header
    
    menuButton.addEventListener('click', function() {
      const isMenuHidden = menu.hasAttribute('hidden');

      if (isMenuHidden) {
        // --- Quand on ouvre le menu ---
        menu.removeAttribute('hidden');
        menuButton.setAttribute('aria-expanded', 'true');
        header.classList.add('menu-ouvert'); // <-- AJOUT : On ajoute la classe au header

      } else {
        // --- Quand on ferme le menu ---
        menu.setAttribute('hidden', '');
        menuButton.setAttribute('aria-expanded', 'false');
        header.classList.remove('menu-ouvert'); // <-- AJOUT : On retire la classe du header
      }
    });
  }
});
