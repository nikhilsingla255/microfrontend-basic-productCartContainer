import faker from 'faker';

//the query selector has issue i.e. it will work perfectly in Products app but the container app might be using a different element
// so to overcome that issue we are doing it with mount function 
// let products = '';

// for (let i = 0; i < 5; i++) {
//     const name = faker.commerce.productName();
//     products += `<div>${name}</div>`;
// }

// document.querySelector('#dev-products').innerHTML=products;

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;

}

// Context/Situation #1
//we are running this file in development in isolation
// we are using our local index.html file
// which definitely has an element with an id of 'dev-products
//we want to immediately render our app into that element

if (process.env.NODE_ENV === 'development') { //assume development here is running in isolation i.e. products MFE alone
    const el = document.querySelector('#dev-products');
    //assuming our container doesnt have an element with id 'dev-products'
    if (el) {
        //we are probably running in isolation
        mount(el);
    }
}

//Context/Situation #2
//we are running this file in development or production through the CONTAINER app
//No GURANTEE that an element with an id of 'dev-products'
// We DO NOT WANT to try to immediately render the app

export { mount };