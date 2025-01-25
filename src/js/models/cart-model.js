const cartModel = function () {
    const cartItems = [];

    const addItem = product => {
        const existingItem = cartItems.find(item => item.name === product.name);
        if (!existingItem) cartItems.push(product);
    };

    const updateItem = product => {
        const existingItem = cartItems.find(cartItem => cartItem.name === product.name);

        if (existingItem) {
            existingItem.quantity = product.quantity;
            existingItem.price = product.price;

            console.log('UPDATED CART', existingItem);
        }
    };

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return { cartItems, addItem, updateItem, getTotalQuantity };
};

export default cartModel();
