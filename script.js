
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

AOS.init();