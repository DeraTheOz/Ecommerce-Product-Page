import productActions from '../utils/product-actions.js';
import * as Header from '../utils/nav-actions.js';
import productModel from '../models/product-model.js';
import productView from '../views/product-view.js';
import cartController from './cart-controller.js';

const productController = function () {
    // Product Data
    const productData = productModel.getProductData();

    const cartEmpty = document.querySelector('.cart__empty');
    const cartFilled = document.querySelector('.cart__filled');

    const init = () => {
        eventListeners();
        Header.handleMenuButtonClicks();
        Header.handleNavLinksClick();
        productActions.handleLargeImageSwitch();
        productActions.handleThumbnailClicks();
    };

    const eventListeners = () => {
        const lightBox = document.querySelector('.lightbox');
        const productEl = document.querySelector('.product__details');
        const productImage = document.querySelector('.product__image');
        const productName = document.querySelector('.product__name')?.textContent;
        const productPrice = parseFloat(document.querySelector('.product__price')?.textContent.replace('$', ''));
        const decrementBtn = document.querySelector('.button__decrement');
        const incrementBtn = document.querySelector('.button__increment');
        const addToCartButton = document.querySelector('.button__cart');

        productData.name = productName;
        productData.price = productPrice;

        productImage.addEventListener('click', () => {
            lightBox.style.display = 'flex';
            lightBox.hidden = false;
        });

        incrementBtn.addEventListener('click', () => {
            // Update Product Quantity
            productModel.increaseItemQuantity(productData);

            // Update Product Quantity in the View
            productView.updateQuantityDisplay(productEl, productData.quantity);
        });

        decrementBtn.addEventListener('click', () => {
            // Update Product Quantity
            productModel.decreaseItemQuantity(productData);

            // Update cart view
            cartController.updateCartView();

            // Update Product Quantity in the View
            productView.updateQuantityDisplay(productEl, productData.quantity);

            // Update cart icon view
            if (!cartFilled.hidden) {
                cartController.updateCartIconView();
            }

            // Remove item from cart if quantity reaches 0
            if (productData.quantity === 0) {
                cartController.handleRemoveCartItem(productData.name);
                cartController.updateCartIconView();

                // If filled cart is visible when cart quantity reaches zero, remove and render empty cart
                cartController.updateEmptyCartState();
            }
        });

        // Add to Cart button commits pending state to the cart
        addToCartButton.addEventListener('click', () => {
            if (productData.quantity === 0) return;

            // Add product to cart model
            cartController.addProductToCart(productData);

            // Update cart view icon
            cartController.updateCartIconView();

            // If empty cart is visible when item is added to cart, remove and render filled cart
            cartController.updateFilledCartState();
        });
    };

    return { init };
};

export default productController();
