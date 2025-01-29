import cartController from './cart-controller.js';
import productController from './product-controller.js';
import lightBoxController from './lightbox-controller.js';

const init = () => {
    cartController.init();
    productController.init();
    lightBoxController.init();
};
init();
