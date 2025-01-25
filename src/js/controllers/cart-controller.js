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

    return { init, addToCart, updateCartItem, updateCartIconView };
};

export default cartController();

