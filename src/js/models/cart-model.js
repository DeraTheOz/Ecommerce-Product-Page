const cartModel = function () {
    const cartItems = [];

    const addItem = product => {
        const existingItem = cartItems.find(item => item.name === product.name);

        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            cartItems.push(product);
        }
    };

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return { cartItems, addItem, getTotalQuantity };
};

export default cartModel();

// const cartModel = function () {
//     const cart = [];

//     const addItem = item => {
//         const existingItem = cart.find(product => product.name === item.name);

//         if (existingItem) {
//             existingItem.quantity += item.quantity;
//         } else {
//             cart.push(item);
//         }
//     };

//     const removeItem = productName => {
//         const itemIndex = cart.findIndex(item => item.name === productName);
//         if (itemIndex > -1) cart.splice(itemIndex, 1);
//     };

//     const getCart = () => cart;

//     const isEmpty = () => cart.length === 0;

//     return { addItem, removeItem, getCart, isEmpty };
// };

// export default cartModel();

// ORIGINAL
// const cartModel = function () {
//     const cart = [];

//     const getCartItems = () => {
//         return cart;
//     };

//     const addItem = item => {
//         console.log(cart);
//         const existingItem = cart.find(cartItem => cartItem.name === item.name);
//         if (!existingItem) cart.push({ ...item });
//         console.log(cart);
//     };

//     return { getCartItems, addItem };
// };

// export default cartModel();
