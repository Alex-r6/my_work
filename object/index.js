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

const res = document.querySelector('.res')

function home_work() {
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
    for(let elem of todo){
        body.innerHTML = `<div class="style"></div>`                   
        if(elem.isActive){
            res.innerHTML += `<input  class="check "  type="checkbox" checked>`
        }
        res.innerHTML += `<div>${elem.language}</div>`
    }


}
home_work()

