// let user = {}
// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name
// console.log(user)


// function isEmpty (object){
//     if ('key' in object) {
//         console.log(true)
//     }else{
//         console.log(false)
//     }

// }
// isEmpty()

// function sum_salary(){
//     let sum = 0
//     let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//       }
//       for(key in salaries){
//         sum += salaries[key]
//       }
//       console.log(sum);
// }
// sum_salary()


// function multiplyNumeric(){
//     let menu = {
//         width: 200,
//         height: 300,
//         title: "My menu"
//       };
//       for(key in menu){
//         if (typeof(menu[key]) != 'string'){
//             menu[key] *= 2
//         }
//       }
//       console.log(menu);
// }
// multiplyNumeric()

const user = {
    emai : 'ww@ww.co,',
    password : '',
    message : [],
    status : '',
    isAdmin : false
}

const slkad = [
    {
        id : 'asda',
        size : '1kg',
        name : 'milk',
        data : {
            from : '02.02.2022',
            to : '02.02.2023'
        }
    },
    {
        id : 'asd',
        size : '4kg',
        name : 'banana',
        data : {
            from : '02.02.2022',
            to : '02.02.2023'
        }
    },
]
// slkad[0].data.from
// innerHTML = `<div>asdasd</div>`

const todo = [
    {
        language : 'HTML',
        isActive : true,
        id : 'asdasfsaasf'
    },
    {
        language : 'CSS',
        isActive : true,
        id : 'as3dasfsaasf'
    },
    {
        language : 'JS',
        isActive : false,
        id : '239ek2'
    },
]
const res = document.querySelector('.res')
const style = document.querySelector('.style')
function make(){
    
    let a = '';
   
    for(const elem of todo){
        a += `<div class="box">
        <input class="check" ${elem.isActive ? 'checked' : ''} type="checkbox">
        <div class="elemText">${elem.language}</div>
        <button class="btn" id="as">X</button>
        </div> `
    }
    res.innerHTML = a
}
// make()


const shops = [
    {
        name : 'packet',
        price : 1,
        description : 'lasdas asd asd asdas d',
        discount : 0,
        size : '1kg',
        isActia : false
    },
    {
        name : 'milk',
        price : 22,
        description : 'lasdadsdas d',
        discount : 0,
        size : '1kg',
        isActia : false
    },
    {
        name : 'banana',
        price : 30,
        description : 'banana asd asd asdas d',
        discount : 10,
        size : '1kg',
        isActia : true
    },
]
// function make(){
//     res.innerHTML = `<div class="style">`
  
//     for(const elem of todo){
        // style.innerHTML += `<div class="box">`
        // const box = document.querySelector('.box')
//         box.innerHTML += `<input  class="check "  type="checkbox">`
//         box.innerHTML += `<div>${elem.language}</div>`
//         // const check = document.querySelector('.check')
//         // if(elem.isActive){
//         //     check.checked === 'checked'
//         // }
//     }
// }
// make()

