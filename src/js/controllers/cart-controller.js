import cartView from '../views/cart-view.js';
import cartModel from '../models/cart-model.js';

const cartController = function () {
    const init = () => {
        eventListeners();
    };

    const eventListeners = () => {
        const cartContainer = document.querySelector('.header__actions');
        const profileContainer = document.querySelector('.actions__profile');

        // Cart button to toggle cart visibility
        cartContainer.addEventListener('click', e => {
            const cartButton = e.target.closest('.actions__cart');
            if (!cartButton) return;

            const cartEmpty = document.querySelector('.cart__empty');
            const cartFilled = document.querySelector('.cart__filled');

            const cart = cartModel.cartItems.length;
            console.log(cart);

            // Toggle cart visibility
            if (cartModel.cartItems.length === 0) {
                console.log('=== 0', cart);

                cartEmpty.hidden = false;
                cartEmpty.classList.toggle('cart--active');
                console.log('=== 0', cartModel.cartItems.length);
            } else {
                console.log('else === 0', cart);

                cartEmpty.hidden = true;
                cartEmpty.classList.remove('cart--active');
                console.log(cartModel.cartItems.length);
            }

            if (cartModel.cartItems.length !== 0) {
                console.log(cartModel.cartItems.length);
                cartFilled.hidden = false;
                cartFilled.classList.toggle('cart--active');
                cartView.renderFilledCart(cartModel.cartItems);

                console.log('!== 0', cart);
            } else {
                console.log(cartModel.cartItems.length);
                cartFilled.hidden = true;
                cartFilled.classList.remove('cart--active');

                console.log('else !==', cart);
            }
        });

        profileContainer.addEventListener('click', () => {
            profileContainer.classList.toggle('profile--open');
        });
    };

    const addToCart = product => {
        cartModel.addItem(product);
    };

    const updateCartItem = product => {
        cartModel.updateItem(product);
    };

    const updateCartIconView = () => {
        cartView.updateCartIcon(cartModel.getTotalQuantity());
    };

    const updateCartView = () => {
        cartView.renderFilledCart(cartModel.cartItems);
    };

    return { init, addToCart, updateCartItem, updateCartView, updateCartIconView };
};

export default cartController();
