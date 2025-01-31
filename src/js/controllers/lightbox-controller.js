import lightBoxModel from '../models/lightbox-model.js';
import lightBoxView from '../views/lightbox-view.js';

const lightBoxController = function () {
    const lightBoxThumbnailContainer = document.querySelector('.lightbox__thumbnails');
    let currentSlide = lightBoxModel.getCurrentSlide();
    const maxSlide = lightBoxModel.getMaxSlide();

    const init = () => {
        eventListeners();
        lightBoxView.lightBoxThumbnailSlides();
        lightBoxView.activateSlide(currentSlide);
    };

    const eventListeners = () => {
        const previousBtn = document.getElementById('btn-prev');
        const nextBtn = document.getElementById('btn-next');
        const closeBtn = document.getElementById('close-lighbox');

        closeBtn.addEventListener('click', removeLightBox);
        previousBtn.addEventListener('click', moveToPrevImage);
        nextBtn.addEventListener('click', moveToNextImage);

        document.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft') moveToPrevImage();
            if (e.key === 'ArrowRight') moveToNextImage();
        });

        // Set and update slides of Thumbnail images on click
        lightBoxThumbnailContainer.addEventListener('click', e => {
            if (e.target.classList.contains('lightbox__thumbnail--image')) {
                const { slide } = e.target.dataset;
                currentSlide = parseInt(slide);

                lightBoxView.activateSlide(currentSlide);
                lightBoxView.updateThumbnails(currentSlide);
                lightBoxModel.setCurrentSlide(currentSlide);
            }
        });
    };

    const moveToNextImage = () => {
        currentSlide = lightBoxModel.moveToNextImage();

        lightBoxView.activateSlide(currentSlide);
        lightBoxView.updateThumbnails(currentSlide);
    };

    const moveToPrevImage = () => {
        currentSlide = lightBoxModel.moveToPrevImage();

        lightBoxView.activateSlide(currentSlide);
        lightBoxView.updateThumbnails(currentSlide);
    };

    const removeLightBox = () => {
        currentSlide = 0;
        lightBoxModel.resetSlide();
        lightBoxView.hideLightBox();
        lightBoxView.activateSlide(0);
        lightBoxView.resetLightBoxThumbnailSlides();
    };

    return { init };
};

export default lightBoxController();
