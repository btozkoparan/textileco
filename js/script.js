function toggleMenu() {
    const nav = document.querySelector('.nav-links')
    nav.classList.toggle('active')
}

// Hero Slider functionality - only runs if slider exists
const slides = document.querySelectorAll('.slide')
if (slides.length > 0) {
    let currentSlide = 0

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index)
        })
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length
        showSlide(currentSlide)
    }, 3000)
}
