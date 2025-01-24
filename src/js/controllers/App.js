import cartController from './cart-controller.js';
import productController from './product-controller.js';

const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const nav = document.querySelector('.header__nav');

const showNav = () => {
    nav.classList.add('open');
    nav.hidden = false;
    openButton.hidden = true;
    closeButton.hidden = false;
};

const hideNav = () => {
    nav.classList.remove('open');
    nav.hidden = true;
    openButton.hidden = false;
    closeButton.hidden = true;
};

openButton.addEventListener('click', showNav);
closeButton.addEventListener('click', hideNav);

const init = () => {
    cartController.init();
    productController.init();
};
init();
