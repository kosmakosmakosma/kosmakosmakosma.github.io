// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.setAttribute('aria-expanded', String(!expanded));
    nav.dataset.collapsible = '';
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
