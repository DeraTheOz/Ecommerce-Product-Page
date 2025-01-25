import productActions from '../utils/product-actions.js';
import * as Header from '../utils/nav-actions.js';

import productModel from '../models/product-model.js';
import productView from '../views/product-view.js';

import cartModel from '../models/cart-model.js';
import cartController from './cart-controller.js';

const productController = function () {
    // Get Product Data
    const productData = productModel.getProductData();
    console.log(productData);

    const init = () => {
        eventListeners();
        Header.handleMenuButtonClicks();
        Header.handleNavLinksClick();
        productActions.handleLargeImageSwitch();
        productActions.handleThumbnailClicks();
    };

    const eventListeners = () => {
        const productEl = document.querySelector('.product__details');
        const productName = document.querySelector('.product__name')?.textContent;
        const productPrice = parseFloat(document.querySelector('.product__price')?.textContent.replace('$', ''));
        const productQuantityEl = document.querySelector('.product__quantity');
        const productQuantity = parseInt(productQuantityEl.textContent, 10);

        const decrementBtn = document.querySelector('.button__decrement');
        const incrementBtn = document.querySelector('.button__increment');
        const addToCartButton = document.querySelector('.button__cart');

        if (!productName && !productPrice && !productQuantityEl) return;

        productData.name = productName;
        productData.price = productPrice;
        productData.quantity = productQuantity;

        addToCartButton.addEventListener('click', () => {
            console.log('Product Data', productData);
            // if (productData.quantity <= 0) return;
            console.log('Product Data', productData);
            cartController.updateCartIconView();

            // WHEN THE BUTTON IS CLICKED, REMOVE THE EMPTY CART AND DISPLAY THE FILLED CART
        });

        incrementBtn.addEventListener('click', () => {
            console.log('PRODUCT DATA', productData);

            // Add Product to cart
            cartController.addToCart(productData);

            // Update Product Quantity
            const updatedProduct = productModel.increaseItemQuantity(productData);
            console.log('INCREASED QUANTITY', updatedProduct);

            // Update Product Quantity in the View
            productView.updateQuantityDisplay(productEl, updatedProduct.quantity);

            // Update product in the cart
            cartController.updateCartItem(updatedProduct);

            console.log('NEW PRODUCT DATA', productData);
        });

        decrementBtn.addEventListener('click', () => {
            console.log('PRODUCT DATA', productData);

            // Add Product to cart
            cartController.addToCart(productData);

            // Update Product Quantity
            const updatedProduct = productModel.decreaseItemQuantity(productData);
            console.log('DECREASED QUANTITY', updatedProduct);

            // Update Product Quantity in the View
            productView.updateQuantityDisplay(productEl, updatedProduct.quantity);

            // Update product in the cart
            cartController.updateCartItem(updatedProduct);

            console.log('NEW PRODUCT DATA', productData);
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
