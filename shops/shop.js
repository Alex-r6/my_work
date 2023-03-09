const products = document.querySelector('.products')
const shops = [
    {
        name: 'porridge',
        price: 10,
        description: 'lasdas asd asd asdas d',
        discount: 0,
        size: '1kg',
        isActia: false,
        src : './img/i/im1.jpg'
    },
    {
        name: 'salad',
        price: 22,
        description: 'lasdadsdas d',
        discount: 0,
        size: '1kg',
        isActia: false,
        src : './img/i/im2.jpg'
    },
    {
        name: 'breakfast',
        price: 30,
        description: 'banana asd asd asdas d',
        size: '1kg',
        discount: 10,
        isActia: true,
        src : './img/i/im3.jpg'
    },
    {
        name: 'soup',
        price: 10,
        description: 'banana asd asd asdas d',
        size: '1kg',
        discount: 10,
        isActia: true,
        src : './img/i/im4.jpg'
    },
    {
        name: 'cheesecakes',
        price: 12,
        description: 'banana asd asd asdas d',
        size: '1kg',
        discount: 10,
        isActia: true,
        src : './img/i/im5.jpg'
    },
    {
        name: 'green soup',
        price: 11,
        description: 'banana asd asd asdas d',
        size: '1kg',
        discount: 10,
        isActia: true,
        src : './img/i/im6.jpg'
    },
    {
        name: 'onion soup',
        price: 8,
        description: 'banana asd asd asdas d',
        size: '1kg',
        discount: 10,
        isActia: true,
        src : './img/i/im7.jpg'
    },
    {
        name: 'borshch',
        price: 17,
        description: 'banana asd asd asdas d',
        size: '1kg',
        discount: 10,
        isActia: true,
        src : './img/i/im8.jpg'
    },
    {
        name: 'soup with meatballs',
        price: 13,
        description: 'banana asd asd asdas d',
        size: '1kg',
        discount: 10,
        isActia: true,
        src : './img/i/im9.jpg'
    },
    {
        name: 'soup with tomato',
        price: 6,
        description: 'banana asd asd asdas d',
        size: '1kg',
        discount: 10,
        isActia: true,
        src : './img/i/im10.jpg'
    },
    {
        name: 'french fries',
        price: 6,
        description: 'banana asd asd asdas d',
        size: '1kg',
        discount: 10,
        isActia: true,
        src : './img/i/im11.jpg'
    },
    {
        name: 'fried zucchini',
        price: 4,
        description: 'banana asd asd asdas d',
        size: '1kg',
        discount: 10,
        isActia: true,
        src : './img/i/im12.jpg'
    },
    
    
]

function shop() {
    let b = ''
    for (const elem of shops) {
        b += `<div class="main">
                <p class="p">${elem.name}</p>
                <img src="${elem.src}" alt="loading.." />
                <div class="cont">
                    <p style="color:${elem.isActia ? 'red' : 'green'};" >Price: ${elem.price}</p>
                    <p>Size: ${elem.size}</p>
                </div>
                <p style="color:blue;">Description: ${elem.description}</p>
            </div>
        `
    }
    products.innerHTML = b;
}
shop();

// `<div>${elem.name}</div>
// <div>${elem.price}</div>
// <div>${elem.size}</div>
// <div>${elem.description}</div>
// <div>${elem.name}</div>
// <div>${elem.price}</div>
// <div>${elem.size}</div>
// <div>${elem.description}</div>
// <div>${elem.name}</div>
// <div>${elem.price}</div>
// <div>${elem.size}</div>
// <div>${elem.description}</div>
// `