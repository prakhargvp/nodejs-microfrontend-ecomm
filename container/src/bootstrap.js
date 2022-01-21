import { mount as productsMount } from 'products/ProductIndex';
import { mount as cartMount} from 'cart/CartShow';

console.log('Container!');

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));