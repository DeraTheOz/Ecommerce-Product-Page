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
        }
    };

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getCartItems = () => {
        return cartItems;
    };

    const removeCartItem = itemName => {
        const itemIndex = cartItems.findIndex(cartItem => cartItem.name === itemName);
        if (itemIndex === -1) return null;

        // Remove the item from cart
        const removedItem = cartItems.splice(itemIndex, 1)[0];
        const isCartEmpty = cartItems.length === 0;

        return { removedItem, isCartEmpty };
    };

    return { getCartItems, removeCartItem, cartItems, addItem, updateItem, getTotalQuantity };
};

export default cartModel();
