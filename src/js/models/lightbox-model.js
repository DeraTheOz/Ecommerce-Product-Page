const lightBoxModel = function () {
    const slides = document.querySelectorAll('.slide');

    let currentSlide = 0;
    const maxSlide = slides.length - 1;

    const getCurrentSlide = () => {
        return currentSlide;
    };

    const setCurrentSlide = slide => {
        return (currentSlide = slide);
    };

    const getMaxSlide = () => {
        return maxSlide;
    };

    const moveToNextImage = () => {
        currentSlide = currentSlide === maxSlide ? 0 : currentSlide + 1;
        return setCurrentSlide(currentSlide);
    };

    const moveToPrevImage = () => {
        currentSlide = currentSlide === 0 ? maxSlide : currentSlide - 1;
        return setCurrentSlide(currentSlide);
    };

    const resetSlide = () => {
        return (currentSlide = 0);
    };

    return {
        getCurrentSlide,
        setCurrentSlide,
        getMaxSlide,
        moveToNextImage,
        moveToPrevImage,
        resetSlide
    };
};

export default lightBoxModel();
