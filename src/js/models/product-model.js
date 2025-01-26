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
        
        // const item = cartModel.cartItems.find(item => item.name === product.name);
        // if (!item) return null;

        // item.quantity === 0 ? (item.quantity = 0) : item.quantity--;
        // return item;
    };

    return { getProductData, increaseItemQuantity, decreaseItemQuantity };
};

export default productModel();
