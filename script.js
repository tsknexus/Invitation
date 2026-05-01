function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

// Ensure first reveal happens immediately on load
document.addEventListener("DOMContentLoaded", () => {
    reveal();
});

// Reveal elements as user scrolls
window.addEventListener("scroll", reveal);
