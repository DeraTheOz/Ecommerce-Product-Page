const productView = function () {
    const updateItemQuantity = product => {};

    const updateQuantityDisplay = (productEl, quantity) => {
        const quantityDisplay = productEl.querySelector('.product__quantity');
        console.log(quantityDisplay, quantity);

        if (!quantityDisplay) return;
        quantityDisplay.textContent = quantity;
    };

    return { updateQuantityDisplay };
};

export default productView();
