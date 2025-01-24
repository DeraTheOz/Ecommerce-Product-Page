import productActions from '../utils/product-actions.js';
import * as Header from '../utils/nav-actions.js';
import cartController from './cart-controller.js';

const productController = function () {
    const init = () => {
        eventListeners();
        Header.handleMenuButtonClicks();
        Header.handleNavLinksClick();
        productActions.handleLargeImageSwitch();
        productActions.handleThumbnailClicks();
    };

    const eventListeners = () => {
        const addToCartButton = document.querySelector('.button__cart');
        const productName = document.querySelector('.product__name')?.textContent;
        const productPrice = parseFloat(document.querySelector('.product__price')?.textContent.replace('$', ''));
        const productQuantityEl = document.querySelector('.product__quantity');

        addToCartButton.addEventListener('click', () => {
            if (!productName || !productPrice || !productQuantityEl) return;

            const productQuantity = parseInt(productQuantityEl.textContent, 10);
            // if (isNaN(productQuantity) || productQuantity <= 0) return;
            if (isNaN(productQuantity) ) return;

            const selectedProduct = {
                name: productName,
                price: productPrice,
                quantity: productQuantity
            };

            // Pass the selected product to the cart controller
            cartController.addToCart(selectedProduct);
        });
    };

    return { init };
};

export default productController();

/*import productActions from '../utils/product-actions.js';
import * as Header from '../utils/nav-actions.js';
import cartModel from '../models/cart-model.js';
import cartView from '../views/cart-view.js';

const productController = function () {
    const init = () => {
        eventListeners();
        Header.handleMenuButtonClicks();
        Header.handleNavLinksClick();
        productActions.handleLargeImageSwitch();
        productActions.handleThumbnailClicks();
    };

    const eventListeners = () => {
        const cartButton = document.querySelector('.button__cart');

        cartButton.addEventListener('click', e => {
            const productName = document.querySelector('.product__name')?.textContent;
            const productPrice = parseFloat(document.querySelector('.product__price')?.textContent.replace('$', ''));
            const productQuantity = parseInt(document.querySelector('.product__quantity')?.value);

            if (!productName || !productPrice || !productQuantity) return;

            const product = {
                name: productName,
                price: productPrice,
                quantity: productQuantity
            };

            cartModel.addItem(product);
            cartView.renderCartItems(cartModel.getCart());
        });
    };

    return { init };
};

export default productController();*/

// ORIGINAL
// import productActions from '../utils/product-actions.js';
// import * as Header from '../utils/nav-actions.js';
// import cartView from '../views/cart-view.js';
// import cartController from '../controllers/cart-controller.js';

// const productController = function () {
//     const init = () => {
//         eventListeners();
//         Header.handleMenuButtonClicks();
//         Header.handleNavLinksClick();
//         productActions.handleLargeImageSwitch();
//         productActions.handleThumbnailClicks();
//     };

//     const eventListeners = () => {
//         const cartButton = document.querySelector('.button__cart');
//         const productName = document.querySelector('.product__name')?.textContent;
//         const productPrice = document.querySelector('.product__price')?.textContent.replace('$', '');
//         const productQuantity = document.querySelector('.product__quantity')?.textContent;

//         cartButton.addEventListener('click', e => {
//             if (!e.target) return;

//             const selectedProduct = {
//                 name: productName,
//                 price: productPrice,
//                 quantity: productQuantity
//             };
//         });
//     };

//     return { init };
// };

// export default productController();
