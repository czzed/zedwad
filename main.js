// Mobile Menu Toggle
const menuBtn = document.getElementById("menubtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active");
});

// Smooth Section Switching - Only for anchor links (#)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Only prevent default for anchor links (starting with #)
        if (link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu after clicking any link
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            menuBtn.classList.remove("active");
        }
    });
});