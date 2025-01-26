import productActions from '../utils/product-actions.js';
import * as Header from '../utils/nav-actions.js';
import productModel from '../models/product-model.js';
import productView from '../views/product-view.js';
import cartController from './cart-controller.js';

const productController = function () {
    // Get Product Data
    const productData = productModel.getProductData();

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

            // If empty cart is visible when item is added to cart, remove and render filled cart
            cartController.updateFilledCartState();
        });

        incrementBtn.addEventListener('click', () => {
            // Add Product to cart
            cartController.addToCart(productData);

            // Update Product Quantity
            const updatedProduct = productModel.increaseItemQuantity(productData);

            // Update Product Quantity in the View
            productView.updateQuantityDisplay(productEl, updatedProduct.quantity);

            // Update product in the cart
            cartController.updateCartItem(updatedProduct);
        });

        decrementBtn.addEventListener('click', () => {
            // Add Product to cart
            cartController.addToCart(productData);

            // Update Product Quantity
            const updatedProduct = productModel.decreaseItemQuantity(productData);

            // Update Product Quantity in the View
            productView.updateQuantityDisplay(productEl, updatedProduct.quantity);

            // Update product in the cart
            cartController.updateCartItem(updatedProduct);

            // Remove item from cart if quantity reaches 0
            if (updatedProduct.quantity === 0) {
                cartController.handleRemoveCartItem(productName);
                cartController.updateCartIconView();

                // If filled cart is visible when cart quantity reaches zero, remove and render empty cart
                cartController.updateEmptyCartState();
            }
        });
    };

    return { init };
};

export default productController();
