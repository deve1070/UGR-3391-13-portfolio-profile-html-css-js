document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            navLinks.forEach(l => l.classList.remove('active'));
            event.target.classList.add('active');
        });
    });

    const socialLinks = document.querySelectorAll('footer a, header a');
    socialLinks.forEach(link => {
        link.setAttribute('aria-label', link.querySelector('img').alt);
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#0056b3';
        } else {
            header.style.backgroundColor = '#007bff';
        }
    });
});