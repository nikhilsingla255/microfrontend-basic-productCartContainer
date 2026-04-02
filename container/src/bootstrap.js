// we were doing the below import when we had the same queryselector dev-products but it can be that the container
//uses a different is in container/public/index.html. so to handle that we moved product MFE code to mount function
// import 'products/ProductsIndex';
// import 'cart/CartShow';

import {mount as productsMount} from 'products/ProductsIndex';
import {mount as cardMount} from 'cart/CartShow';

console.log("Container");

productsMount(document.querySelector('#my-products'));
cardMount(document.querySelector('#my-cart'));
