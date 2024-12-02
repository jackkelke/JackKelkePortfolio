// Dark Mode
document.addEventListener('DOMContentLoaded', () => {
    // Add a button to toggle dark mode inside the header
    const darkModeToggle = document.querySelector('.header-buttons .dark-mode-toggle');

    // Toggle the dark mode class on the body plus icon switch
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '☀️'; 
        } else {
            darkModeToggle.innerHTML = '🌙'; 
        }
    });
});    
// Add card flipping functionality
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}




