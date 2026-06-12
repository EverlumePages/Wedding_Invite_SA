document.addEventListener("DOMContentLoaded", () => {
    // Animation sequence for Hero section
    const phase2 = document.querySelector('.phase-2');
    const lightFlare = document.querySelector('.light-flare');

    // Start sequence after initial load
    setTimeout(() => {
        // Step 1: Flare flashes quickly to mask the video start, then fades out
        lightFlare.style.transition = 'opacity 1s ease-in';
        lightFlare.style.opacity = '1';
        
        setTimeout(() => {
            lightFlare.style.transition = 'opacity 2s ease-out';
            lightFlare.style.opacity = '0';
        }, 1000); // Wait for flare to peak
        
    }, 500); // Initial delay before animation starts

    // Scroll animation for details section
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const eventCards = document.querySelectorAll('.event-card, .invitation-text, .rsvp-section');
    eventCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(card);
    });
});
