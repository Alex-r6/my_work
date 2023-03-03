const abc = document.querySelector('.abc');




function del() {
    const h = document.querySelector('.h2');
    abc.innerHTML = `<input class="aaa" value="${h.textContent}"/>`
    const input = document.querySelector('.aaa')
    function blur() {
        abc.innerHTML = `<h2 class="h2">${input.value}</h2>`
    }
    input.onblur = blur;

}
abc.ondblclick = del;






const cont = document.querySelector('.cont');

const p = document.querySelector('.p') //p1 p2 p3 p4        
function del2() {
    const text = p.textContent;
    cont.innerHTML = `<select class="select">
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                  </select>`
    const select = document.querySelector('.select')

    select.value = text;

    function change() {
        cont.innerHTML = `<p class="p">${select.value}</p>`
    }
    select.onchange = change;
}
cont.ondblclick = del2;


const block = document.querySelector('.block');
const btn = document.querySelector('.plus');
const p2 = document.querySelector('.p2');
const sel_btn = document.querySelector('.sel_btn')



function mult() {
    let nums = +p2.textContent;
    nums++
    p2.textContent = nums;

}

function make_sel() {
    const num = +p2.textContent;

    let res = '';

    for (let i = 0; i < num; i++) {
        res += `<option>${i + 1}</option>`
    }
    block.innerHTML = `<select class="sel">${res}</select>`
    
}
// const num = +p2.textContent;
// block.innerHTML = '<select class="sel"></select>'
// const sel = document.querySelector('.sel');

// let res = '';
// for (let i = 0; i < num; i++) {
//     res += `<option>${i + 1}</option>`
// }

// sel.innerHTML = res;


// block.innerHTML = `<select>
//             <option value="one">one</option>
//             <option value="two">two</option>
//             <option value="three">three</option>
//                     </select>`
btn.onclick = mult;
sel_btn.onclick = make_sel;



const obj = {
    key : 'hello',
    qwe : 123,
    0 : 'hello',
    1 : 1231231,
    key : 'qqq',
    'key' : '123',
    '0' : 'ttt'

}

// console.log(obj);

const user = {
    name : 'alex',
    age : 12,
    isAdmn : false,
    'name 2 robot' : 'klsak;ldas;lkdal',
    const : '323'
}

user.name = 'Robert';
delete user.age;
user.nikname = 'my name'
user['olds'] = 223;

// console.log(
//     'age' in user
// );

function creatUser (name,age){
    return {
        name,
        age,
        isAdmin :false
    }
}

const user1 = creatUser('Alex',123);

// console.log(user1);

// console.log(user);
// console.log(user.name);

// console.log(user['name robot']);
// 



const user_2 = {};

user_2.name = 'John';
user_2.surname = 'Smith';
user_2.name = 'Pete';
delete user_2.name
// console.log(user_2);


const setting = {
    color : 'red',
    bg  : 'green',
    name : 'Alex'
}


// for(const key in setting){
//     console.log(key);
//     // const data = setting.key;
//     const data = setting[key];
//     console.log(data);
// }

console.log(setting.rrrr);



const sallary = {
    Jhos : 200,
    Robert : 1100,
    surName : 'Groet',
    Admin : 4000
};


let sall = 0;


for(const key in sallary){
    sall += sallary[key]
}
console.log(sall);
// add if use typeof 

let r = 'helle';
r = +r;


//! work with html elements | 8.2 

