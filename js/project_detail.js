// Toggle Navigation for Mobile View
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav ul');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Menu';
    toggleButton.style.display = 'none';
    toggleButton.style.margin = '10px';
    toggleButton.style.padding = '10px';
    toggleButton.style.backgroundColor = '#005959';
    toggleButton.style.color = '#fff';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';

    nav.parentElement.insertBefore(toggleButton, nav);

    toggleButton.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Responsive behavior
    const handleResize = () => {
        if (window.innerWidth > 768) {
            nav.style.display = 'flex';
            toggleButton.style.display = 'none';
        } else {
            nav.style.display = 'none';
            toggleButton.style.display = 'block';
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
});
