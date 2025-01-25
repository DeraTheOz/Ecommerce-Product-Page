const productView = function () {
    const updateQuantityDisplay = (productEl, quantity) => {
        const quantityDisplay = productEl.querySelector('.product__quantity');
        if (!quantityDisplay) return;
        quantityDisplay.textContent = quantity;
    };

    return { updateQuantityDisplay };
};

export default productView();
