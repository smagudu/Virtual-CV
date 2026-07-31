// Display a welcome message when the page loads
window.addEventListener("load", () => {
    console.log("Welcome to Sanelisiwe Magudu's Portfolio!");
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});