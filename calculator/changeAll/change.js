const abc = document.querySelector('.name');
const h = document.querySelector('.h2');
const p = document.querySelector('.getClass');
const content = document.querySelector('.content');

function del() {
    abc.innerHTML = `<input class="${p.textContent}"  value="${h.textContent}" />`
    const input = document.querySelector(`.${p.textContent}`);

    function blur(){
        // abc.innerHTML = `<h2></h2>`
        // h.innerHTML = input.value
        abc.innerHTML = `<h2> value="${input.value}"</h2>`
    }
    input.onblur = blur
    
}


abc.ondblclick = del;





// ''  ""  ``
// const w = 1;
// const e = 2;
// const ddClass = 'container'
// console.log(w + e);  3 //number
// console.log('w + e'); // string 
// console.log(`w + e`) //string
// console.log(`<div>
//     <p class="${ddClass}"></p>
// </div>`);  //${}
// console.log('<div><p class="${ddClass}"></p></div>');  //${}

// const a = 12;
// 12  

// let e = "el'www'lo"  //
// e = "as;kdasldlas'd,we  ``"
// e = ` asdasd`
// e = "asdas" + a ;""
// e = `name - ${a}  ;` //
// console.log(e);





// // content 
// const name = 'Alex'
// const age = 99;
// const city = 'Uk'




// content.innerHTML = `<h1>my name is ${name}</h1>
//                     <p>age ${age} </p>
//                     <span>${city}</span>`