import largeImage1 from '../../../images/image-product-1.jpg';
import largeImage2 from '../../../images/image-product-2.jpg';
import largeImage3 from '../../../images/image-product-3.jpg';
import largeImage4 from '../../../images/image-product-4.jpg';

const productActions = function () {
    const productImage = document.querySelector('.product__image');
    const lightBoxImage = document.querySelector('.lightbox__image');

    const productThumbnails = document.querySelectorAll('.product__thumbnail');
    const lightBoxThumbnails = document.querySelectorAll('.lightbox__thumbnail');

    const thumbnailImages = document.querySelectorAll('.thumbnail__image');
    const lightBoxThumbnailImages = document.querySelectorAll('.lightbox__thumbnail--image');

    const largeImages = [largeImage1, largeImage2, largeImage3, largeImage4];

    const handleThumbnailClicks = () => {
        productThumbnails.forEach((thumbnailImage, i) => {
            thumbnailImage.addEventListener('click', () => {
                productThumbnails.forEach(thumbnail => thumbnail.classList.remove('thumbnail--active'));
                thumbnailImage.classList.add('thumbnail--active');
            });
        });
    };

    const handleLargeImageSwitch = () => {
        productThumbnails[0].classList.add('thumbnail--active');

        thumbnailImages.forEach((thumbnailImage, index) => {
            thumbnailImage.addEventListener('click', () => {
                thumbnailImage.dataset.large = largeImages[index];
                productImage.src = thumbnailImage.dataset.large;
            });
        });
    };

    return { handleThumbnailClicks, handleLargeImageSwitch };
};

export default productActions();
