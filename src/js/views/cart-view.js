export const cartView = function () {
    const renderEmptyCart = () => {
        const parentEl = document.querySelector('.header__actions');

        const markup = `
        <div class="cart__empty">
            <p class="cart__title">Cart</p>
            <div class="cart__items--container items--center">
                <p class="cart__empty--text">Your cart is empty LOL</p>
            </div>
        </div>
    `;
        parentEl.insertAdjacentHTML('beforeend', markup);
    };

    return { renderEmptyCart };
};
