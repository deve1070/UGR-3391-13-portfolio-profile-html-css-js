document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.createElement('div');
    const header = document.querySelector('header');
    const body = document.querySelector('body');

    // Add Hamburger Menu
    hamburgerMenu.classList.add('hamburger-menu');
    hamburgerMenu.innerHTML = `<span></span><span></span><span></span>`;
    header.appendChild(hamburgerMenu);

    // Create Mobile Navigation
    const mobileNav = document.createElement('div');
    mobileNav.id = 'mobile-nav';
    const navContent = document.querySelector('nav ul').cloneNode(true);
    mobileNav.appendChild(navContent);
    body.appendChild(mobileNav);

    // Toggle Mobile Navigation
    hamburgerMenu.addEventListener('click', () => {
        body.classList.toggle('active'); // Toggle active class on body
    });
});
