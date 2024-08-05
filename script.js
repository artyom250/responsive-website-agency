
// FAQ section
document.querySelectorAll('.quest').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.ans');
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});

// Sidebar
function sidebarFunc() {
    const sidebar = document.querySelector(".nav-links");
    sidebar.classList.toggle("active");
}

window.addEventListener('scroll', () => {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", (window.innerHeight + window.scrollY) >= document.body.offsetHeight);
});

AOS.init();