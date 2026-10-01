const menuButton = document.querySelector('[data-menu-button]');
const siteNav = document.querySelector('[data-site-nav]');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.dataset.open === 'true';
    siteNav.dataset.open = String(!isOpen);
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

