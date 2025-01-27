import cartModel from './cart-model.js';

const productModel = function () {
    const productData = {
        name: null,
        price: null,
        quantity: 0
    };

    const getProductData = () => {
        return productData;
    };

    const increaseItemQuantity = product => {
        return product.quantity++;
    };

    const decreaseItemQuantity = product => {
        return product.quantity === 0 ? (product.quantity = 0) : product.quantity--;
    };

    const resetItemQuantity = productName => {
        const product = cartModel.cartItems.find(item => item.name === productName);
        if (product) product.quantity = 0;

    };

    const resetAllItemsQuantity = () => {
        productData.quantity = 0;
    };

    return { getProductData, increaseItemQuantity, decreaseItemQuantity, resetItemQuantity, resetAllItemsQuantity };
};

export default productModel();
