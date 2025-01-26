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

    const resetItemQuantity = itemName => {
        
        const item = cartModel.cartItems.find(menuItem => menuItem.name === itemName);
        item.quantity = 0;
    };

    return { getProductData, increaseItemQuantity, decreaseItemQuantity, resetItemQuantity };
};

export default productModel();
