const navbar = document.getElementById('navbar');
const scrollOffset = 100;

function updateNavbarStyle() {
    if (window.scrollY > scrollOffset) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateNavbarStyle);
updateNavbarStyle();
