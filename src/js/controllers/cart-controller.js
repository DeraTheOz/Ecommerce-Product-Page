import { cartView } from '../views/cart-view.js';

const cartController = function () {
    const init = () => {
        eventListeners();
        handleNavClicks();
    };

    const handleNavClicks = () => {
        const navLinks = document.querySelectorAll('.nav__link');

        navLinks.forEach(navItem => {
            navItem.addEventListener('click', () => {
                navLinks.forEach(item => item.classList.remove('active'));
                navItem.classList.add('active');
            });
        });
    };

    const eventListeners = () => {
        const cartContainer = document.querySelector('.header__actions');
        const profileContainer = document.querySelector('.actions__profile');

        cartContainer.addEventListener('click', e => {
            const cartButton = e.target.closest('.actions__cart');
            const cartEmpty = cartContainer.querySelector('.cart__empty');
            if (!cartButton) return;

            if (cartEmpty) {
                cartEmpty.remove();
                cartButton.classList.remove('cart--active');
            } else {
                cartView().renderEmptyCart();
                cartButton.classList.add('cart--active');
            }
        });

        profileContainer.addEventListener('click', () => {
            profileContainer.classList.toggle('profile--open');
        });
    };

    return { init };
};

export default cartController;
