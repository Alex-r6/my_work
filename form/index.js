const btn = document.querySelector('.btn');
const inp = document.querySelectorAll('.red_border');
const box = document.querySelector('.box');
const check = document.querySelector('.check');
const p = document.querySelector('.red')

let dd = 'hello' // string 
let ddl = dd.length // number

function make_border() {

    // check.checked === false

    let isError = false; // false // true

    for (let index = 0; index < inp.length; index++) { 
        // if (inp[index].value.length === 0) {
        // if (inp[index].value.trim().length === 0) {
        if (inp[index].value.trim() === '') {
            inp[index].style.borderColor = 'red'
            isError = true;
        }
        
    }
    
    
    if( check.checked === false){
        p.style.color = 'red'
        isError = true;
    }



    if (isError === false) { 
        box.style.display = 'flex';
        box.innerHTML = `${inp[0].value} <br>
                             ${inp[2].value}<br>
                             ${inp[4].value}`
    }

}

btn.onclick = make_border;
// for (let index = 0; index < inp.length; index++) {
//     if (inp[index].value.length === 0 || check.checked === false) {
//         inp[index].style.borderColor = 'red'
//         p.style.color = 'red'
//     } else {
//         // box.style.bottom = '0px';
//         box.style.display = 'flex';
//         box.innerHTML = `${inp[0].value} <br>
//                          ${inp[2].value}<br>
//                          ${inp[4].value}`
//     }
// }