import cartView from '../views/cart-view.js';
import cartModel from '../models/cart-model.js';
import productView from '../views/product-view.js';
import productModel from '../models/product-model.js';

const cartController = function () {
    const cartItems = cartModel.getCartItems();
    const cartEmpty = document.querySelector('.cart__empty');
    const cartFilled = document.querySelector('.cart__filled');

    const init = () => {
        eventListeners();
    };

    const eventListeners = () => {
        const cartContainer = document.querySelector('.header__actions');
        const profileContainer = document.querySelector('.actions__profile');
        const addToCartButton = document.querySelector('.button__cart');

        // Cart button to toggle cart visibility
        cartContainer.addEventListener('click', e => {
            const cartButton = e.target.closest('.actions__cart');
            if (!cartButton) return;

            // Toggle Empty cart visibility
            if (cartItems.length === 0 || cartItems[0].quantity === 0) {
                cartEmpty.hidden = false;
                cartEmpty.classList.toggle('cart--active');
                return;
            }

            // Toggle Filled cart visibilty
            updateCartView();
            cartFilled.hidden = false;
            cartFilled.classList.toggle('cart--active');

            const removeBtn = cartContainer.querySelector('.cart__item--btn');

            removeBtn.addEventListener('click', () => {
                if (!removeBtn) return;

                const cartItemEl = removeBtn.closest('.cart__item');
                const itemName = cartItemEl.dataset.name;

                handleRemoveCartItem(itemName);
            });
        });

        profileContainer.addEventListener('click', () => {
            profileContainer.classList.toggle('profile--open');
        });
    };

    const addProductToCart = product => {
        const existingItem = cartItems.find(cartItem => cartItem.name === product.name);

        if (existingItem) {
            existingItem.quantity = product.quantity;
            existingItem.price = product.price;
            updateCartView();
        } else {
            cartModel.addItem(product);
        }
    };

    const updateCartIconView = () => {
        cartView.updateCartIcon(cartModel.getTotalQuantity());
    };

    const updateCartView = () => {
        cartView.renderFilledCart(cartItems);
    };

    const handleRemoveCartItem = productName => {
        const productEl = document.querySelector('.product__details');

        // Check if product already exists in cart
        const item = cartItems.find(item => item.name === productName);
        if (!item) return;

        // Reset menu item's default state
        productModel.resetItemQuantity(productName);

        // Remove product from cart
        const { removedItem, isCartEmpty } = cartModel.removeCartItem(productName);
        if (!removedItem) return;

        // Find cart item using it's data-name and remove it
        const cartItemEl = document.querySelector(`.cart__item[data-name="${productName}"]`);
        if (cartItemEl) cartItemEl.remove();

        if (isCartEmpty) {
            updateCartIconView();
            updateEmptyCartState();
            productView.updateQuantityDisplay(productEl, 0);
        }
    };

    // Personal feature for convenience🙂
    const updateFilledCartState = () => {
        // If empty cart is visible when item is added to cart, remove and render filled cart
        if (!cartEmpty.hidden) {
            cartEmpty.hidden = true;
            cartEmpty.classList.remove('cart--active');

            updateCartView();
            cartFilled.hidden = false;
            return;
        }
    };

    // Personal feature for convenience🙂
    const updateEmptyCartState = () => {
        // If filled cart is visible when cart quantity reaches zero, remove and render empty cart
        if (!cartFilled.hidden) {
            cartFilled.hidden = true;
            cartFilled.classList.remove('cart--active');

            cartEmpty.hidden = false;
            return;
        }
    };

    return {
        init,
        addProductToCart,
        updateCartIconView,
        updateCartView,
        handleRemoveCartItem,
        updateFilledCartState,
        updateEmptyCartState
    };
};

export default cartController();
