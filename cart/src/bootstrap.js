// import faker from 'faker';

// const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

// document.querySelector('#dev-cart').innerHTML = cartText;


import faker from 'faker';

const mount =(e1) =>{


const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

e1.innerHTML = cartText;
}

if(process.env.NODE_ENV === 'development'){
    const e1 = document.querySelector('#dev-cart');
    
    if(e1){
        mount(e1)
    }
}

export {mount};