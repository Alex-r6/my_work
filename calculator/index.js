const input = document.querySelector('.input');
const num_7 = document.querySelector('.box_7');
const num_8 = document.querySelector('.box_8');
const num_9 = document.querySelector('.box_9');
const num_div = document.querySelector('.box_div');
const num_4 = document.querySelector('.box_4');
const num_5 = document.querySelector('.box_5');
const num_6 = document.querySelector('.box_6');
const num_mult = document.querySelector('.box_mult');
const num_1 = document.querySelector('.box_1');
const num_2 = document.querySelector('.box_2');
const num_3 = document.querySelector('.box_3');
const num_minus = document.querySelector('.box_minus');
const num_0 = document.querySelector('.box_0');
const num_point = document.querySelector('.box_point');
const num_plus = document.querySelector('.box_plus');
const num_done = document.querySelector('.box_done');


let one = '';
let operator  = "";
let two = ''




function add_7 () {
    input.innerHTML += num_7.innerHTML
}
num_7.onclick = add_7;


function add_8 () {
    input.innerHTML += num_8.innerHTML
}
num_8.onclick = add_8;


function add_9 () {
    input.innerHTML += num_9.innerHTML
}
num_9.onclick = add_9;



function add_0 () {
    input.innerHTML += num_0.innerHTML
}
num_0.onclick = add_0;

function add_1 () {
    input.innerHTML += num_1.innerHTML
}
num_1.onclick = add_1;

function add_2 () {
    input.innerHTML += num_2.innerHTML
}
num_2.onclick = add_2;

function add_3 () {
    input.innerHTML += num_3.innerHTML
}
num_3.onclick = add_3;

function add_4 () {
    input.innerHTML += num_4.innerHTML
}
num_4.onclick = add_4;

function add_5 () {
    input.innerHTML += num_5.innerHTML
}
num_5.onclick = add_5;

function add_6 () {
    input.innerHTML += num_6.innerHTML
}
num_6.onclick = add_6;


function add_point () {
   
    input.innerHTML += num_point.innerHTML
}

num_point.onclick = add_point;
// /////////////////////
function add_div () {
    one = input.innerHTML;
    operator = "/"
    input.innerHTML = ''
    // input.innerHTML += num_div.innerHTML
}
num_div.onclick = add_div;


function add_mult () {
    one = input.innerHTML;
    operator = "*"
    input.innerHTML = ''
    // input.innerHTML += num_mult.innerHTML
}
num_mult.onclick = add_mult;

function add_minus () {
    one = input.innerHTML;
    operator = "-"
    input.innerHTML = ''
    // input.innerHTML += num_minus.innerHTML
}
num_minus.onclick = add_minus;

//100
// one 100
// operator +

function add_plus () {
    one = input.innerHTML;//
    operator = "+"
    input.innerHTML = ''
}
num_plus.onclick = add_plus;

function add_divis (){
    one = input.innerHTML
    operator = '/'
    input.innerHTML = ''
}




function finish(){
    two = input.innerHTML
    let result = "";

    switch(operator) {
        case '-': result = one - two; break;
        case '/': result = one / two; break;
        case '+' : result = +one + +two; break;
    }
    input.innerHTML = result;
}
num_done.onclick = finish;


// switch(2) {
//     case 1: console.log(1); break;
//     case 2: console.log(2)
//     case 3: console.log(3)
// }