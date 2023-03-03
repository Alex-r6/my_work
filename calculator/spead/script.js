const box_one = document.querySelector('.one');
const box_two = document.querySelector('.two');
const box_three = document.querySelector('.three');
const box_four = document.querySelector('.four')
let one = 50;
let two = 50;
let three = 0;
let four = 30;
function grow(){
    box_one.style.width = ++one + 'px'
}
box_one.onclick = grow;


function grow_number(){
    two++
    box_two.innerHTML = two + 'px'
}
box_two.onclick = grow_number;



function grow_per_num(){
    three++
    box_three.innerHTML = three + '%'
    box_three.style.width = three + '%'
}
box_three.onclick = grow_per_num;

// function grow_10(){
//     two += 10
//     box_two.style.width =  two +'px' 
// }
// box_two.onclick = grow_10;

// function grow_pros(){
//     three++
//     box_three.style.width = three + '%' // 61
// }
// box_three.onclick = grow_pros;

function grow_margin(){
    four += 10
    box_four.style.marginLeft = four +'px'
}
box_four.ondblclick = grow_margin;


// setInterval(grow,2000)

const five = document.querySelector('.five');
const six = document.querySelector('.six');
let fiv = 5; 
function grow_double(){
    fiv ++
    five.style.width = fiv + '%'
}
five.onmousemove = grow_double;

 
// let elem = 0;
// let elem = false; 
let elem = 'green'; 

function change_color(){
   
    if(elem === 'red'){
        elem = 'green' 
    } else {
        elem = 'red';
    }

    six.style.backgroundColor = elem
}

//  if(elem === 'red'){
//      elem = 'green' 
//  } else {
//      elem = 'red';
//  }
//  six.style.backgroundColor = elem

// if(elem){
//     six.style.backgroundColor = 'green' 
//     elem = false;
// } else {
//     six.style.backgroundColor = 'red' 
//     elem = true;
// }

// elem++;
// if(elem % 2 == 0){
//     six.style.backgroundColor = 'green' 
// } else {

//     six.style.backgroundColor = 'red'
// }

function dblClick (){
    console.log('dbl');
}

six.onclick = change_color;

six.ondblclick = dblClick



function move_over(){
    six.style.backgroundColor = 'red'
}
six.onmouseover = move_over;

function move_out(){
    six.style.backgroundColor = 'green'
}
six.onmouseout = move_out;


