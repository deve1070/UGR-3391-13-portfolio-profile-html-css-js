const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');


hamburgerMenu.addEventListener('click', () => {
    // Toggle the 'active' class on the mobile navigation menu
    mobileNav.classList.toggle('active');

    // Add animation to the hamburger menu
    hamburgerMenu.classList.toggle('open');
});
