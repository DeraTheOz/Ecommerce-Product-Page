import cartView from '../views/cart-view.js';
import cartModel from '../models/cart-model.js';
// import productController from './product-controller.js';

const cartController = function () {
    const init = () => {
        eventListeners();
    };

    const eventListeners = () => {
        const cartContainer = document.querySelector('.header__actions');
        const profileContainer = document.querySelector('.actions__profile');
        // const cartButton = cartContainer.querySelector('.actions__cart');

        // Cart button to toggle cart visibility
        cartContainer.addEventListener('click', e => {
            
            const cartButton = e.target.closest('.actions__cart');
            if (!cartButton) return;

            const cartEmpty = cartContainer.querySelector('.cart__empty');
            const cartFilled = cartContainer.querySelector('.cart__filled');

            if (cartEmpty) {
                cartEmpty.remove();
                cartButton.classList.remove('cart--active');
            } else {
                cartView.renderEmptyCart();
            }

            if (cartModel.cartItems.length >= 0) {
                if (cartEmpty) {
                    cartEmpty.remove();
                    cartButton.classList.remove('cart--active');
                    return;
                }
            } else {
                cartView.renderFilledCart(cartModel.cartItems);
                cartButton.classList.add('cart--active');
            }
        });

        // cartButton.addEventListener('click', () => {
        //     const cart = cartContainer.querySelector('.cart');
        //     if (!cart) {
        //         // Render empty or filled cart based on the model's state
        //         if (cartModel.cartItems.length > 0) {
        //             cartView.renderFilledCart(cartModel.cartItems);
        //         } else {
        //             cartView.renderEmptyCart();
        //         }
        //         cartButton.classList.add('cart--active');
        //     } else {
        //         cart.remove();
        //         cartButton.classList.remove('cart--active');
        //         return;
        //     }
        // });

        profileContainer.addEventListener('click', () => {
            profileContainer.classList.toggle('profile--open');
        });
    };

    const addToCart = product => {
        console.log(product);
        cartModel.addItem(product);

        // cartView.updateCartIcon(cartModel.getTotalQuantity());
    };

    const updateCartItem = product => {
        console.log(product);
        cartModel.updateItem(product);
    };

    const updateCartIconView = () => {
        cartView.updateCartIcon(cartModel.getTotalQuantity());
    };

    return { init, addToCart, updateCartItem, updateCartIconView };
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
