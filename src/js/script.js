// Attend que le contenu de la page (le DOM) soit entièrement chargé avant d'exécuter le script.
document.addEventListener('DOMContentLoaded', function() {
  // 1. Sélectionne les éléments HTML nécessaires pour la gestion du menu.
  const menuButton = document.querySelector('.header__menu-button'); // Le bouton pour ouvrir/fermer le menu.
  const menu = document.querySelector('.menu'); // Le menu de navigation lui-même.
  const header = document.querySelector('.header'); // L'en-tête (header) de la page.

  // Vérifie si tous les éléments ont bien été trouvés dans le document.
  if (menuButton && menu && header) {
    
    // Ajoute un écouteur d'événement sur le bouton du menu, qui se déclenche au clic.
    menuButton.addEventListener('click', function() {
      // Vérifie si le menu est actuellement caché (s'il a l'attribut 'hidden').
      const isMenuHidden = menu.hasAttribute('hidden');

      if (isMenuHidden) {
        // --- Actions à effectuer si le menu est caché (on veut l'ouvrir) ---
        menu.removeAttribute('hidden'); // Affiche le menu en retirant l'attribut 'hidden'.
        menuButton.setAttribute('aria-expanded', 'true'); // Met à jour l'attribut ARIA pour l'accessibilité, indiquant que le menu est déplié.
        header.classList.add('menu-ouvert'); // Ajoute la classe 'menu-ouvert' au header (probablement pour changer son style).

      } else {
        // --- Actions à effectuer si le menu est visible (on veut le fermer) ---
        menu.setAttribute('hidden', ''); // Cache le menu en ajoutant l'attribut 'hidden'.
        menuButton.setAttribute('aria-expanded', 'false'); // Met à jour l'attribut ARIA, indiquant que le menu est replié.
        header.classList.remove('menu-ouvert'); // Retire la classe 'menu-ouvert' du header.
      }
    });
  }
});


// Comportement de carrousel simple pour les éléments avec la classe `.carousel`.
// Attend que le contenu de la page soit entièrement chargé.
document.addEventListener('DOMContentLoaded', function(){
  // Sélectionne tous les éléments qui ont la classe 'carousel'.
  const carousels = document.querySelectorAll('.carousel');
  // Pour chaque carrousel trouvé, on applique la logique suivante.
  carousels.forEach(car => {
    const track = car.querySelector('.carousel__track'); // La "piste" qui contient les diapositives et qui va bouger.
    const slides = Array.from(car.querySelectorAll('.carousel__slide')); // La liste de toutes les diapositives.
    const btnPrev = car.querySelector('.carousel__btn--prev'); // Le bouton "précédent".
    const btnNext = car.querySelector('.carousel__btn--next'); // Le bouton "suivant".
    let index = 0; // Garde en mémoire l'index de la diapositive actuelle.

    // Fonction pour mettre à jour la position du carrousel.
    const update = () => {
      if (!slides.length) return; // S'il n'y a pas de diapositives, on ne fait rien.
      // Calcule l'espacement (gap) entre les diapositives.
      const gap = parseFloat(getComputedStyle(track).gap) || 8;
      // Calcule la largeur d'une diapositive en incluant l'espacement.
      const slideW = slides[0].getBoundingClientRect().width + gap;
      // Déplace la piste horizontalement pour afficher la bonne diapositive.
      track.style.transform = `translateX(${ -index * slideW }px)`;
    };

    // Si le bouton "précédent" existe, on lui ajoute un écouteur de clic.
    btnPrev && btnPrev.addEventListener('click', ()=>{
      // Diminue l'index, sans aller en dessous de 0.
      index = Math.max(0, index - 1);
      update(); // Met à jour l'affichage.
    });
    // Si le bouton "suivant" existe, on lui ajoute un écouteur de clic.
    btnNext && btnNext.addEventListener('click', ()=>{
      // Augmente l'index, sans dépasser le nombre de diapositives.
      index = Math.min(slides.length - 1, index + 1);
      update(); // Met à jour l'affichage.
    });

    // Rend le carrousel réactif : met à jour l'affichage si la fenêtre est redimensionnée.
    window.addEventListener('resize', update);
    // Met à jour l'affichage une première fois au chargement (avec un léger délai).
    setTimeout(update, 50);
  });
});
