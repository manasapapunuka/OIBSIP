
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.slide-container').forEach(slideContainer => {
        const slider = slideContainer.querySelector('.slider');
        const prevButton = slideContainer.querySelector('.prev');
        const nextButton = slideContainer.querySelector('.next');
        let slideIndex = 0;

        const slides = slider.querySelectorAll('img');
        const totalSlides = slides.length;

        console.log("Total Slides:", totalSlides);

        function showSlide(index) {
            if (index < 0 || index >= totalSlides) return;
            slider.style.transform = `translateX(-${index * 100}%)`;
            slideIndex = index;
        }

        prevButton.addEventListener('click', () => {
            console.log("Previous Clicked");
            showSlide(slideIndex - 1);
        });

        nextButton.addEventListener('click', () => {
            console.log("Next Clicked");
            showSlide(slideIndex + 1);
        });
    });
});

