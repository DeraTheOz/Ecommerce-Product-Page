import largeImage1 from '../../../images/image-product-1.jpg';
import iconDelete from '../../../images/icon-delete.svg';

const cartView = function () {
    const parentEl = document.querySelector('.header__actions');

    const renderEmptyCart = () => {
        const markup = `
            <div class="cart cart__empty">
                <p class="cart__title">Cart</p>
                <div class="cart__items--container">
                    <p class="cart__empty--text">Your cart is empty</p>
                </div>
            </div>
        `;
        parentEl.insertAdjacentHTML('beforeend', markup);
    };

    const renderFilledCart = cartItems => {
        const itemsMarkup = cartItems
            .map(
                item => `
                    <article class="cart__item flex-center">
                        <div class="cart__item--box">
                            <img src="${largeImage1}"
                                alt="${item.name}" class="cart__item--image" />
                            <div class="cart__item--details">
                                <p class="cart__item--name item--name">${item.name}</p>
                                <div class="item--details__box">
                                    <span class="cart__item--price">$${item.price.toFixed(2)}</span>
                                    <span class="cart__item--quantity">x ${item.quantity}</span>
                                    <span class="cart__item--total">$${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="cart__item--btn" aria-label="Remove Menu Item">
                            <svg class="icon-delete" aria-hidden="true">
                                <use xlink:href="${iconDelete}#delete"></use>
                            </svg>
                        </button>
                    </article>
                `
            )
            .join('');

        const markup = `
            <div class="cart cart__filled">
                <p class="cart__title">Cart</p>
                <div class="cart__items--container">
                    ${itemsMarkup}
                    <button type="button" class="button__checkout cta-btn flex-center justify-center mt-sm" aria-label="Confirm Order">
                        Checkout
                    </button>
                </div>
            </div>
        `;
        parentEl.insertAdjacentHTML('beforeend', markup);
    };

    const updateCartIcon = totalQuantity => {
        console.log(totalQuantity);
        const cartIconBadge = document.querySelector('.actions__cart-quantity');

        if (totalQuantity <= 0) {
            cartIconBadge.style.display = 'none';
            cartIconBadge.textContent = totalQuantity;
            cartIconBadge.hidden = totalQuantity === 0;
            console.log('CART ICON BADGE', cartIconBadge);
            return;
        }

        console.log('CART ICON BADGE', cartIconBadge);

        cartIconBadge.style.display = 'block';
        cartIconBadge.textContent = totalQuantity;
        cartIconBadge.hidden = totalQuantity === 0;
    };

    return { renderEmptyCart, renderFilledCart, updateCartIcon };
};

export default cartView();

// import largeImage1 from '../../../images/image-product-1.jpg';
// import iconDelete from '../../../images/icon-delete.svg';

// const cartView = function () {
//     const parentEl = document.querySelector('.header__actions');

//     const renderEmptyCart = () => {
//         const markup = `
//             <div class="cart__empty">
//                 <p class="cart__title">Cart</p>
//                 <div class="cart__items--container">
//                     <p class="cart__empty--text">Your cart is empty</p>
//                 </div>
//             </div>
//         `;
//         parentEl.insertAdjacentHTML('beforeend', markup);
//     };

//     const renderCartItems = cart => {
//         const markup = `
//             <div class="cart__filled">
//                 <p class="cart__title">Cart</p>
//                 <div class="cart__items--container">
//                     ${cart
//                         .map(
//                             item => `
//                         <article class="cart__item flex-center">
//                             <div class="cart__item--box">
//                                 <img src="${largeImage1}" alt="${item.name}" class="cart__item--image" />
//                                 <div class="cart__item--details">
//                                     <p class="cart__item--name item--name">${item.name}</p>
//                                     <div class="item--details__box">
//                                         <span class="cart__item--price">$${item.price.toFixed(2)}</span>
//                                         <span class="cart__item--quantity">x ${item.quantity}</span>
//                                         <span class="cart__item--total">$${(item.price * item.quantity).toFixed(
//                                             2
//                                         )}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button type="button" class="cart__item--btn" aria-label="Remove Menu Item">
//                                 <svg class="icon-delete" aria-hidden="true">
//                                     <use xlink:href="${iconDelete}#delete"></use>
//                                 </svg>
//                             </button>
//                         </article>
//                     `
//                         )
//                         .join('')}
//                     <button type="button" class="button__checkout cta-btn flex-center justify-center mt-sm" aria-label="Confirm Order">
//                         Checkout
//                     </button>
//                 </div>
//             </div>
//         `;

//         parentEl.innerHTML = markup;
//     };

//     return { renderEmptyCart, renderCartItems };
// };

// export default cartView();

// ORIGINAL
// import largeImage1 from '../../../images/image-product-1.jpg';
// import iconDelete from '../../../images/icon-delete.svg';

// const cartView = function () {
//     const parentEl = document.querySelector('.header__actions');

//     const renderEmptyCart = () => {
//         const markup = `
//             <div class="cart__empty">
//                 <p class="cart__title">Cart</p>
//                 <div class="cart__items--container">
//                     <p class="cart__empty--text">Your cart is empty</p>
//                 </div>
//             </div>
//         `;
//         parentEl.insertAdjacentHTML('beforeend', markup);
//     };

//     const renderCartItem = item => {
//         // 1, Check if filled state exist
//         const activeCart = parentEl.querySelector('.cart__filled');
//         if (activeCart) return;

//         // Create and render item
//         const markup = `
//             <div class="cart__filled">
//                 <p class="cart__title">Cart</p>
//                 <div class="cart__items--container">

//                     <article class="cart__item flex-center">
//                         <div class="cart__item--box">
//                             <img src="${largeImage1}"
//                                 alt="Fall Limited Edition Sneakers" class="cart__item--image" />
//                             <div class="cart__item--details">
//                                 <p class="cart__item--name item--name">Fall Limited Edition Sneakers</p>
//                                 <div class="item--details__box">
//                                     <span
//                                     class="cart__item--price">$${(item.price * 1).toFixed(2)}</span>
//                                     <span class="cart__item--quantity">x ${item.quantity}</span>
//                                     <span
//                                     class="cart__item--total">$${(item.price * item.quantity).toFixed(2)}</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <button type="button" class="cart__item--btn" aria-label="Remove Menu Item">
//                             <svg class="icon-delete" aria-hidden="true">
//                                 <use xlink:href="${iconDelete}#delete"></use>
//                             </svg>
//                         </button>
//                     </article>

//                     <button type="button" class="button__checkout cta-btn flex-center
//                     justify-center mt-sm" aria-label="Confirm Order">
//                         Checkout
//                     </button>
//                 </div>
//             </div>
//         `;
//         parentEl.insertAdjacentHTML('beforeend', markup);
//     };

//     return { renderEmptyCart, renderCartItem };
// };

// export default cartView();
