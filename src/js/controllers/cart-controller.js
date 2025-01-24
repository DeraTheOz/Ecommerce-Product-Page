import cartView from '../views/cart-view.js';
import productController from './product-controller.js';
import cartModel from '../models/cart-model.js';

const cartController = function () {
    const init = () => {
        eventListeners();
    };

    const eventListeners = () => {
        const cartContainer = document.querySelector('.header__actions');
        const cartButton = cartContainer.querySelector('.actions__cart');

        // Cart button click to toggle cart visibility
        cartButton.addEventListener('click', () => {
            const cart = cartContainer.querySelector('.cart');
            if (!cart) {
                // Render empty or filled cart based on the model's state
                if (cartModel.cartItems.length > 0) {
                    cartView.renderFilledCart(cartModel.cartItems);
                } else {
                    cartView.renderEmptyCart();
                }
                cartButton.classList.add('cart--active');
            } else {
                cart.remove(); // Remove cart container
                cartButton.classList.remove('cart--active');
            }
        });
    };

    const addToCart = product => {
        cartModel.addItem(product);
        cartView.updateCartIcon(cartModel.getTotalQuantity());
    };

    return { init, addToCart };
};

export default cartController();

// import cartView from '../views/cart-view.js';
// import cartModel from '../models/cart-model.js';

// const cartController = function () {
//     const init = () => {
//         eventListeners();
//     };

//     const eventListeners = () => {
//         const cartContainer = document.querySelector('.header__actions');

//         // Handle cart toggle (empty/filled state)
//         cartContainer.addEventListener('click', e => {
//             const cartButton = e.target.closest('.actions__cart');
//             if (!cartButton) return;

//             if (cartModel.isEmpty()) {
//                 cartView.renderEmptyCart();
//             } else {
//                 cartView.renderCartItems(cartModel.getCart());
//             }

//             cartButton.classList.toggle('cart--active');
//         });

//         // Handle cart item removal
//         cartContainer.addEventListener('click', e => {
//             const deleteButton = e.target.closest('.cart__item--btn');
//             if (!deleteButton) return;

//             const productName = deleteButton.closest('.cart__item').querySelector('.cart__item--name').textContent;

//             cartModel.removeItem(productName);
//             updateCartView();
//         });
//     };

//     const updateCartView = () => {
//         if (cartModel.isEmpty()) {
//             cartView.renderEmptyCart();
//         } else {
//             cartView.renderCartItems(cartModel.getCart());
//         }
//     };

//     return { init };
// };

// export default cartController();


// ORIGINAL
// import productController from './product-controller.js';
// import cartModel from '../models/cart-model.js';

// const cartController = function () {
//     const init = () => {
//         eventListeners();
//     };

//     const eventListeners = () => {
//         const cartContainer = document.querySelector('.header__actions');
//         const profileContainer = document.querySelector('.actions__profile');

//         cartContainer.addEventListener('click', e => {
//             const cartButton = e.target.closest('.actions__cart');
//             if (!cartButton) return;

//             const cartEmpty = cartContainer.querySelector('.cart__empty');
//             console.log(cartEmpty);

//             if (cartEmpty) {
//                 cartEmpty.remove();
//                 cartButton.classList.remove('cart--active');
//             } else {
//                 cartView.renderEmptyCart();
//                 cartButton.classList.add('cart--active');
//             }
//         });

//         profileContainer.addEventListener('click', () => {
//             profileContainer.classList.toggle('profile--open');
//         });
//     };

//     return { init };
// };

// export default cartController();
