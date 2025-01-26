import productActions from '../utils/product-actions.js';
import * as Header from '../utils/nav-actions.js';
import productModel from '../models/product-model.js';
import productView from '../views/product-view.js';
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
            cartController.updateCartIconView();
            cartController.updateCartView();
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
            
            //////////////////
            if(updatedProduct.quantity === 0) {
                cartController.updateCartIconView();
            }
            //////////////////

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
