const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealTargets = document.querySelectorAll(
    '.diwali-copy, .diwali-visual, .intro-aside, .intro-main, .catalog-heading, .catalog-controls, .catalog-note, .product-grid, .wholesale-image, .wholesale-copy, .reviews-copy, .review-note, .values-head, .value-list, .faq-heading, .faq-list, .visit-copy, .map-frame, .contact-top, .contact-details'
  );
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  revealTargets.forEach(target => {
    target.classList.add('reveal-on-scroll');
    revealObserver.observe(target);
  });
}

if (!prefersReducedMotion && 'MutationObserver' in window) {
  const heroLabel = document.querySelector('.hero-slide-label');
  const heroTitle = document.querySelector('.hero h1');
  const heroCopy = document.querySelector('.hero-copy');

  if (heroLabel && heroTitle && heroCopy) {
    const heroObserver = new MutationObserver(() => {
      const progressLine = document.querySelector('.hero-caption .caption-line');
      if (progressLine) {
        progressLine.style.animation = 'none';
        void progressLine.offsetWidth;
        progressLine.style.animation = '';
      }

      [heroTitle, heroCopy].forEach((element, index) => {
        element.animate([
          { opacity: 0, transform: 'translateY(10px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], {
          duration: 420,
          delay: index * 65,
          easing: 'cubic-bezier(.2, .7, .2, 1)'
        });
      });
    });

    heroObserver.observe(heroLabel, { childList: true });
  }
}
