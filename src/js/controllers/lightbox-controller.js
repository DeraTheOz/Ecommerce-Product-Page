const lightBoxController = function () {
    const lightBox = document.querySelector('.lightbox');
    const slides = document.querySelectorAll('.slide');
    const lightBoxThumbnails = document.querySelectorAll('.lightbox__thumbnail');
    const lightBoxThumbnailImages = document.querySelectorAll('.lightbox__thumbnail--image');
    const lightBoxThumbnailContainer = document.querySelector('.lightbox__thumbnails');

    let currentSlide = 0;
    const maxSlide = slides.length - 1;

    const init = () => {
        eventListeners();
        lightBoxThumbnailSlides();
        activateSlide(0);
    };

    const eventListeners = () => {
        const previousBtn = document.getElementById('btn-prev');
        const nextBtn = document.getElementById('btn-next');
        const closeBtn = document.getElementById('close-lighbox');

        closeBtn.addEventListener('click', removeLightBox);
        previousBtn.addEventListener('click', moveToPrevImage);
        nextBtn.addEventListener('click', moveToNextImage);

        document.addEventListener('keydown', e => {
            e.key === 'ArrowLeft' && moveToPrevImage();
            e.key === 'ArrowRight' && moveToNextImage();
        });

        lightBoxThumbnailContainer.addEventListener('click', e => {
            if (e.target.classList.contains('lightbox__thumbnail--image')) {
                const { slide } = e.target.dataset;
                activateSlide(slide);
            }
        });
    };

    const activateSlide = currentSlide => {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
        });
    };

    const moveToNextImage = () => {
        if (currentSlide === maxSlide) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }

        activateSlide(currentSlide);
    };

    const moveToPrevImage = () => {
        if (currentSlide === 0) {
            currentSlide = maxSlide;
        } else {
            currentSlide--;
        }

        activateSlide(currentSlide);
    };

    const lightBoxThumbnailSlides = () => {
        lightBoxThumbnails[0].classList.add('thumbnail--active');

        lightBoxThumbnailImages.forEach((thumbnail, i) => {
            thumbnail.dataset.slide = `${i}`;
        });

        lightBoxThumbnails.forEach((thumbnailImage, i) => {
            thumbnailImage.addEventListener('click', () => {
                lightBoxThumbnails.forEach(thumbnail => thumbnail.classList.remove('thumbnail--active'));
                thumbnailImage.classList.add('thumbnail--active');
            });
        });
    };

    const removeLightBox = () => {
        lightBox.style.display = 'none';
        lightBox.hidden = true;
        currentSlide = 0;
        activateSlide(0);
    };

    return { init };
};

export default lightBoxController();
