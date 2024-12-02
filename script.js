document.addEventListener("DOMContentLoaded", function() {
    // Function to add class when section is in view
    const fadeInSections = () => {
        const sections = document.querySelectorAll('.fade-heading');
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add 'fade-in' class when section comes into view
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                } else {
                    // Optionally, remove 'fade-in' class when section is out of view
                    entry.target.classList.remove('fade-in');
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            observer.observe(section);
        });
    };

    fadeInSections();
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
