document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.nav-links');

    hamburgerButton.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });
});