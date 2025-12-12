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

// Simple carousel behavior for elements with `.carousel`
document.addEventListener('DOMContentLoaded', function(){
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(car => {
    const track = car.querySelector('.carousel__track');
    const slides = Array.from(car.querySelectorAll('.carousel__slide'));
    const btnPrev = car.querySelector('.carousel__btn--prev');
    const btnNext = car.querySelector('.carousel__btn--next');
    let index = 0;

    const update = () => {
      if (!slides.length) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 8;
      const slideW = slides[0].getBoundingClientRect().width + gap;
      track.style.transform = `translateX(${ -index * slideW }px)`;
    };

    btnPrev && btnPrev.addEventListener('click', ()=>{
      index = Math.max(0, index - 1);
      update();
    });
    btnNext && btnNext.addEventListener('click', ()=>{
      index = Math.min(slides.length - 1, index + 1);
      update();
    });

    // make it responsive on resize
    window.addEventListener('resize', update);
    // initial
    setTimeout(update,50);
  });
});
