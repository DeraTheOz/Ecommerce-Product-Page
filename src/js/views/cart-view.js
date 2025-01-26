import largeImage1 from '../../../images/image-product-1.jpg';
import iconDelete from '../../../images/icon-delete.svg';

const cartView = function () {
    const parentEl = document.querySelector('.header__actions');
    const cartEmpty = parentEl.querySelector('.cart__empty');
    const cartFilled = parentEl.querySelector('.cart__filled');

    const renderFilledCart = cartItems => {
        if (cartFilled) {
            const itemsMarkup = cartItems
                .map(function (item) {
                    const existingCartItem = cartFilled.querySelector(`.cart__item[data-name="${item.name}"]`);
                    if (existingCartItem) {
                        updateCartItem(existingCartItem, item);
                        return;
                    }

                    return `
                    <article class="cart__item flex-center"
                    data-name="${item.name}">
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
                `;
                })
                .join('');

            cartFilled.querySelector('.cart__items--container').insertAdjacentHTML('afterbegin', itemsMarkup);
        }
    };

    const updateCartItem = (cartItemEl, item) => {
        const quantityEl = cartItemEl.querySelector('.cart__item--quantity');
        const priceTotalEl = cartItemEl.querySelector('.cart__item--total');

        // Update quantity and total price
        quantityEl.textContent = `x ${item.quantity}`;
        priceTotalEl.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
    };

    const updateCartIcon = totalQuantity => {
        const cartIconBadge = document.querySelector('.actions__cart-quantity');

        if (totalQuantity <= 0) {
            cartIconBadge.style.display = 'none';
            cartIconBadge.textContent = totalQuantity;
            cartIconBadge.hidden = totalQuantity === 0;
            return;
        }

        cartIconBadge.style.display = 'block';
        cartIconBadge.textContent = totalQuantity;
        cartIconBadge.hidden = totalQuantity === 0;
    };

    return { renderFilledCart, updateCartIcon };
};

export default cartView();
