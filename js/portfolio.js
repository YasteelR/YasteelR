// Add smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add intersection observer for project animations (optional enhancement)
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Apply animation to projects
document.querySelectorAll('.project').forEach((project, index) => {
    project.style.opacity = '0';
    project.style.transform = 'translateY(20px)';
    project.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    projectObserver.observe(project);
});

// Add click analytics or tracking (placeholder for future implementation)
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Optional: Add analytics tracking here
        const projectName = this.closest('.project').querySelector('h2').textContent;
        const linkType = this.textContent.trim();
        console.log(`Clicked ${linkType} for project: ${projectName}`);
    });
});