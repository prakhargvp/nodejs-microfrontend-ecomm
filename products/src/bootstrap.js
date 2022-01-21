import faker from 'faker';


const mount = (el) => {
    let products = '';

    for(let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    
    el.innerHTML = products;

};
// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which definitely has an element with an id of 'dev-products'
// We want to immediately render our app into that element
if(process.env.NODE_ENV === 'development') {
    // it is autoamtically set by webpack
    const el = document.querySelector('#dev-products');
    // Assuming that our container does not have dev-products selector
    if(el) {
        // We're probably running in isloation
        mount(el);
    }
}

// Context/Situation #2
// We are running this file in development or production
// throgh the Container App
// No guarantee that an element with an id of 'dev-products'
// We don't want to try to immediately render the app

export { mount };
