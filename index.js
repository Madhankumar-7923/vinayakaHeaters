/* ODOMETER FOR NUMBER ANIMATION WITH PLUS SIGN */

// Helper function to format number with + at the end
function formatNumber(value) {
    return value.toLocaleString('en-US') + "+";
}

// Function to animate the number change
function animateValue(id, start, end, duration) {

    const element = document.getElementById(id);
    if (!element) return;

    const range = end - start;
    let startTime = null;

    function step(timestamp) {

        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentValue = Math.floor(progress * range + start);
        element.textContent = formatNumber(currentValue);

        if (progress < 1) {
            requestAnimationFrame(step);
        }

    }

    requestAnimationFrame(step);
}

// Callback function for Intersection Observer
function handleIntersection(entries, observer) {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateValue("year", 0, 25, 2000);
            animateValue("manufactured", 0, 3000, 2000);
            animateValue("clients", 0, 45, 2000);
            observer.unobserve(entry.target);
        }

    });
}

// Create Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.3
});

// Start observing the container
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('count_Box');
    if (container) {
        observer.observe(container);
    }
});
