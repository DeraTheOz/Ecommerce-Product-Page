import largeImage1 from '../../../images/image-product-1.jpg';
import iconDelete from '../../../images/icon-delete.svg';

export const cartView = function () {
    const renderEmptyCart = () => {
        const parentEl = document.querySelector('.header__actions');

        const markup = `
            <div class="cart__empty">
                <p class="cart__title">Cart</p>
                <div class="cart__items--container">
                    <p class="cart__empty--text">Your cart is empty</p>
                </div>
            </div>
        `;

        const markup3 = `
        <div class="cart__filled">
            <p class="cart__title">Cart</p>
            <div class="cart__items--container">
            
                <article class="cart__item flex-center">
                    <div class="cart__item--box">
                        <img src="${largeImage1}"
                            alt="Fall Limited Edition Sneakers" class="cart__item--image" />
                        <div class="cart__item--details">
                            <p class="cart__item--name item--name">Fall Limited Edition Sneakers</p>
                            <div class="item--details__box">
                                <span class="cart__item--price">$125.00</span>
                                <span class="cart__item--quantity">x 3</span>
                                <span class="cart__item--total">$375.00</span>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="cart__item--btn" aria-label="Remove Menu Item">
                        <svg class="icon-delete" aria-hidden="true">
                            <use xlink:href="${iconDelete}#delete"></use>
                        </svg>
                    </button>
                </article>
                
                <button type="button" class="button__checkout cta-btn flex-center
                justify-center mt-sm" aria-label="Confirm Order">
                    Checkout
                </button>
            </div>
        </div>
    `;
        parentEl.insertAdjacentHTML('afterbegin', markup3);
    };

    return { renderEmptyCart };
};
