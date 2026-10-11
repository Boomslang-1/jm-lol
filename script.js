

// Subtle entrance animation
document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card');
  if (card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = 'opacity 0.55s ease, transform 0.55s ease';

    requestAnimationFrame(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });
  }
});
