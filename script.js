// Menu mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('header nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
  });
}

// Scroll doux sur les ancres (#offres, #matieres, etc.)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (nav) nav.classList.remove('open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  });
});

// Year footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();