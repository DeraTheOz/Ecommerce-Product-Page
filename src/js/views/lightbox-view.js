const lightBoxView = function () {
    const lightBox = document.querySelector('.lightbox');
    const slides = document.querySelectorAll('.slide');
    const lightBoxThumbnails = document.querySelectorAll('.lightbox__thumbnail');
    const lightBoxThumbnailImages = document.querySelectorAll('.lightbox__thumbnail--image');

    const activateSlide = currentSlide => {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
        });
    };

    const updateThumbnails = currentSlide => {
        lightBoxThumbnails.forEach((thumbnail, index) => {
            thumbnail.classList.toggle('thumbnail--active', index === currentSlide);
        });
    };

    const lightBoxThumbnailSlides = () => {
        // Set active state on first thumbnail
        lightBoxThumbnails[0].classList.add('thumbnail--active');

        // Set 'slide' dataset on each thumbnail image
        lightBoxThumbnailImages.forEach((thumbnail, i) => {
            thumbnail.dataset.slide = `${i}`;
        });

        // Add / Remove active state on thumbnail images
        lightBoxThumbnails.forEach(thumbnailImage => {
            thumbnailImage.addEventListener('click', () => {
                lightBoxThumbnails.forEach(thumbnail => thumbnail.classList.remove('thumbnail--active'));
                thumbnailImage.classList.add('thumbnail--active');
            });
        });
    };

    const resetLightBoxThumbnailSlides = () => {
        lightBoxThumbnails.forEach(thumbnail => thumbnail.classList.remove('thumbnail--active'));
        lightBoxThumbnails[0].classList.add('thumbnail--active');
    };

    const showLightBox = () => {
        lightBox.style.display = 'flex';
        lightBox.hidden = false;
    };

    const hideLightBox = () => {
        lightBox.style.display = 'none';
        lightBox.hidden = true;
    };

    return {
        activateSlide,
        updateThumbnails,
        lightBoxThumbnailSlides,
        resetLightBoxThumbnailSlides,
        showLightBox,
        hideLightBox
    };
};

export default lightBoxView();
