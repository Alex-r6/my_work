const products = document.querySelector('.products')
const shops = [
    {
        name: 'packet',
        price: 1,
        description: 'lasdas asd asd asdas d',
        discount: 0,
        size: '1kg',
        isActia: false,
        src : './img/i/im1.jpg'
    },
    {
        name: 'milk',
        price: 22,
        description: 'lasdadsdas d',
        discount: 0,
        size: '1kg',
        isActia: false,
        src : './img/i/im2.jpg'
    },
    {
        name: 'banana',
        price: 30,
        description: 'banana asd asd asdas d',
        size: '1kg',
        discount: 10,
        isActia: true,
        src : './img/i/im3.jpg'
    },
]

function shop() {
    let b = ''
    for (const elem of shops) {
        b += `<div class="">
                <p>${elem.name}</p>
                <img src="${elem.src}" alt="loading.." />
                <div>
                    <p style="color:${elem.isActia ? 'red' : 'green'};" >${elem.price}</p>
                    <p>${elem.size}</p>
                </div>
                <p>${elem.description}</p>
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