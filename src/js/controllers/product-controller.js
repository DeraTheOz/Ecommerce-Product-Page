import productActions from '../utils/product-actions.js';
import { handleNavClicks } from '../utils/nav-actions.js';

const productController = function () {
    const init = () => {
        handleNavClicks();
        productActions.handleLargeImageSwitch();
        productActions.handleThumbnailClicks();
    };

    return { init };
};

export default productController();
