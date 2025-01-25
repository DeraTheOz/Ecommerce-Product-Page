import cartModel from './cart-model.js';

const productModel = function () {
    const productData = {
        name: null,
        price: null,
        quantity: null
    };

    const getProductData = () => {
        return productData;
    };

    const increaseItemQuantity = product => {
        const item = cartModel.cartItems.find(item => item.name === product.name);
        if (!item) return;

        item.quantity++;
        return item;
    };

    const decreaseItemQuantity = product => {
        const item = cartModel.cartItems.find(item => item.name === product.name);
        if (!item) return null;

        item.quantity === 0 ? (item.quantity = 0) : item.quantity--;
        return item;
    };

    return { getProductData, increaseItemQuantity, decreaseItemQuantity };
};

export default productModel();
