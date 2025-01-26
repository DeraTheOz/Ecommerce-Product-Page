import cartView from '../views/cart-view.js';
import cartModel from '../models/cart-model.js';

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

        // Cart button to toggle cart visibility
        cartContainer.addEventListener('click', e => {
            const cartButton = e.target.closest('.actions__cart');
            if (!cartButton) return;

            // Toggle cart visibility
            if (cartItems.length === 0 || cartItems[0].quantity === 0) {
                console.log(cartItems.length);
                cartEmpty.hidden = false;
                cartEmpty.classList.toggle('cart--active');
                return;
            }

            cartFilled.hidden = false;
            updateCartView();
            cartFilled.classList.toggle('cart--active');
        });

        profileContainer.addEventListener('click', () => {
            profileContainer.classList.toggle('profile--open');
        });
    };

    const handleRemoveCartItem = productName => {
        // Find matching product
        const item = cartItems.find(item => item.name === productName);
        

        // Remove item from cart
        const { removedItem, isCartEmpty } = cartModel.removeCartItem(productName);
        if (!removedItem) return;

        // Find cart item using it's data-name and remove from cart
        const cartItemEl = document.querySelector(`.cart__item[data-name="${productName}"]`);
        if (cartItemEl) cartItemEl.remove();

        console.log(removedItem, isCartEmpty);
    };

    const checkCartState = () => {
        // if (cartItems[0].quantity === 0) {
        //     cartFilled.hidden = true;
        //     cartFilled.classList.remove('cart--active');
        //     cartFilled.remove();

        //     cartEmpty.hidden = false;
        //     cartEmpty.classList.toggle('cart--active');
        // }

        console.log(cartItems);
        if (cartItems[0].quantity !== 0) {
            console.log(cartItems);
            cartEmpty.hidden = true;
            cartEmpty.classList.remove('cart--active');
            cartEmpty.remove();

            cartFilled.hidden = false;
            updateCartView();
            cartFilled.classList.toggle('cart--active');
        }
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
        cartView.renderFilledCart(cartItems);
    };

    return {
        init,
        handleRemoveCartItem,
        addToCart,
        checkCartState,
        updateCartItem,
        updateCartView,
        updateCartIconView
    };
};

export default cartController();
