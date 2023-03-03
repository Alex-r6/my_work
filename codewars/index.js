// const input_1 = document.querySelector('.i-1');
// const btn_1 = document.querySelector('.b-1');
// const out_1 = document.querySelector('.out-1');
// function solution(){
//     let w = input_1.value
//     let v = w.split("").reverse().join("");
//     return out_1.innerHTML = v
// }
// btn_1.onclick = solution;


// const input_2 = document.querySelector('.i-2');
// const btn_2 = document.querySelector('.b-2');
// const out_2 = document.querySelector('.out-2');

// // 'hello 5'
// function culc_len(array){
//     let v = [];
//     // let w = input_2.value
//     for(const i of array){
//         let q = `${ i + " "+ i.length}`
//         v.push(q) 
//     }
//     out_2.innerHTML = v
// }
// culc_len(['hello', 'world'])
// btn_2.onclick = culc_len;


// function createArray(number){
//     var newArray = [];

//     for(var counter = 1; counter <= number; counter++){
//       newArray.push(counter);
//     }

//     return newArray;
//   }
//  console.log(createArray(20)); 



// function invert(array){
//     let newinvert = [];
//     for (let item of array){
//         if (item > 0){
//             item = item * -1
//         } else if(item < 0){
//             item = item * -1
//         }
//         newinvert.push(item)
//     }
//     return console.log(newinvert)
// }
// invert([1,-2,3,-4,-5])

// function repS(data, howmany) {
//     let endResult = "";

//     for (let i = 1; i <= howmany; i++) {
//         console.log(i)
//         endResult += data;
//     }
//     console.log(endResult);

// }

// repS("M", 6);



// function mult(array){
//     let w = 1;
//     for(let i of array){
//         w *= i 
//     }
//     console.log(w)
// }
// mult([2, 3, 2, 2])


// function doudle(array){
//     let newArray = [];
//     for(const i of array){
//        let  q = i * 2
//         newArray.push(q)
//     }
//     return  console.log(newArray)
// }
// doudle([1,2,3])


// function qqq(num){  // 4
//     let new_array = [1]  //[1,2]
//     for(let i = 1; i <= num; i++){  // 1de
//         let v = new_array[i - 1] * 2 //  new_array[ 1]
//         new_array.push(v)
//     }
//     console.log(new_array)
// }
// qqq(4) // [1,2,4,8,16,32,64]

// function getRandomIntInclusive(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
//   }

//   function randomElement (arr){ debugger // [4,88,12,0]


//     const copArr = arr.slice(); //  []
//     const newArr = []; // new array [88,12,4,0]
//     for (let i = 0; i < arr.length; i++) {
//         const random = getRandomIntInclusive(0, copArr.length - 1)  //    // (0, 3)  1 // (0, 2) // 1 | (0, 1) - 0 | (0,0)
//         newArr.push(copArr[random]) //   newArr.push(copArr[1])
//         copArr.splice(random,1) 
//     }
//     console.log(newArr);

//   }
//   randomElement([4,88,12,0]) // [12,0,88,4] // [88,12,4,0]





// let q = str;
// let v = ''
// if (str.length > num){
//     v = q.split("").splice(0,num).join("") + '...'
// }else if(str.length <= 3){
//     v = q.split("").splice(0,num).join("")

// }
// return console.log(v)


function truncateString(str, num) { // hell  2

  let result = ''; // 'hel.'
  for (let i = 0; i < str.length; i++) {  // 3 < 4; 
    if (num < (i + 1)) { // 2 < 3 )
      result += '.'
    } else {
      const l = str[i];  // he
      result += l

    }

  }
  console.log(result);

}
truncateString('helloword', 5) // hello....



function snail(column, day, night) {
  let i = 0;
  while (i < column) {
    i += day;
    if (i < column) {
      i -= night
    }

    // 0 <= 10 //

    // let n = i - night  // 2-1 // 3-1 
    // i = n    //i = 1 // i = 2
  }
  // console.log(i)

}
snail(3, 2, 1)




function numberJoy(n) { //1234
  const strN = '' + n;  // '1234'



  let oneN = 0;
  // const oneN = +strN[0] + +strN[1] + +strN[2] + +strN[3]; // 10
  for (let i = 0; i < strN.length; i++) {
    const element = +strN[i];
    oneN += element;
  }
  const strOne = '' + oneN;
  // const twoStr = strOne[1] + strOne[0]; // '01'

  let twoStr = '';
  for (let i = strOne.length - 1; i >= 0; i--) {
    const element = strOne[i];
    twoStr += element;
  }




  const result = twoStr * oneN
  // console.log(result);











  // const strN = '' + n;  // '1234'
  // const oneN = +strN[0] + +strN[1] + +strN[2] + +strN[3]; // 10
  // const strOne = '' + oneN; // '10'
  // const twoStr = strOne[1] + strOne[0]; // '01'
  // const result = twoStr * oneN








  // let sum = 0
  // let digits = Math.floor(n).toString();
  // for (let i = 0; i < digits.length; i++){
  //     sum += +digits[i]  
  // }
  // // console.log(sum)
  // new_num = Math.floor(sum).toString();
  // let rev = new_num.split("").reverse().join("");
  // // console.log(rev)
  // if (sum * rev == n){
  //     console.log(true)
  // }else{
  //     console.log(false)
  // }





}
numberJoy(456568905)



// function find_in(array, num){
//     let res = 0
//     for (const i of array){
//         if(i == num){
//             res++
//         }
//     }
//    console.log(res)

// }
// find_in([0, 1, 2, 2, 3],1)




function getSumOfDigits(integer) {
  var sum = 0;
  var digits = Math.floor(integer).toString();
  for (var ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  // return console.log(sum);
}
getSumOfDigits(223)
// [[str],[str][str]]

function convertHashToArray(hash) {
  let list = []; // [[str]]
  for (const key in hash) {
    const str = `${key + "," + hash[key]}`;  //  'name,Jeremy'
    const r = [str] // [str]
    list.push(r)
  }
  console.log(list);

  const list2 = []; // [[key,value]]
  for (const key in hash) { //
    const r = [key, hash[key]]  // [key,value]
    list2.push(r) //[]
  }
  // new_list.push(list)
  console.log(list2);



  console.log('----------------');
  console.log(list[0][0]);
  console.log(list2[0]);

}
convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' })

const w = [];

w.push('hello , tor')
w.push('hello', 'tor')
let a = 1;

let r = NaN === NaN;


// let y = '1' != 1; //false

// y = 1 === '1' // true
// 1 == 1 true 
// number === string
// let y = '1' !== 1; //true

function sumOfIntegersInString(s) { //T30k2o
  let res = ''; // ''
  let sum = 0  // 30
  for (let i = 0; i <= s.length; i += 1) {
    const l = s[i]; // s[1] 3
    if (isNaN(l)) { // isNaN(k)

      if (res !== '') { //

        sum += +res;
        res = ''
      }

    } else {
      res += l
    }
  }
  console.log(sum);
}
// const numbers = '1234567890' // n
// let res = '' // ''
// let sum = 0 // 30
//   for (let i = 0; i <= s.length; i += 1) { // i = 2
//     if (numbers.includes(s[i])) {  // numbers.includes( q )
//       console.log(s[i])
//       res += s[i]
//     }
//     else {
//       if (res !== '') { // '30' !== ''
//         // sum = sum + parseInt(res) // sum = 0 + parseInt(res)
//         sum = sum + +res // sum = 0 + 30
//         res = ''
//       }
//     }
//   }
//   return console.log(sum)
sumOfIntegersInString("T30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog")



// function sumOfMinimums(arr) {
//   let arr2 = [];
//   let total = 0;
//   for (let r = 0; r < arr.length; r++) {
//                 arr[r] = bubbleSort(arr[r],"array")
//                 arr2.push(arr[r]);
//             }
//   for (var i = 0; i < arr.length;i++) {
//   total = total + arr2[i][0];
//   }
//   return total;
// }




console.clear()

// const g = NaN

// const resQ = isNaN(g)
// // Number(g) // +g
// /// g === NaN

// console.log(resQ);


// function sumOfMinimums(arr) {
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += Math.min(...arr[i])
//   }

//   return total;
// }
// arr[i] |  [1, 2, 3, 4, 5]
// ...arr[i] |  1, 2, 3, 4, 5
// Math.min( 1, 2, 3, 4, 5)
// Math.min(...arr[i])
// sumOfMinimums([
// [1, 2, 3, 4, 5],
// [5, 6, 7, 8, 9],
// [20, 21, 34, 56, 100]])




// const arrs = [4, 7, 1, false];

// function log(d,two,t,u) {
//   console.log(d);
//   console.log(two,t,u);
// }

// log(...arrs) // 4, 7, 1, false
// arrs.sort

// function larges (n,array){

//   array.sort((a,b) => b - a);
//   const list = array.slice(0, n)
//   return list


// }
// larges(3, [5, 1, 5, 2, 3, 1, 2, 3, 5])



// function sayHello(name) {
//   return console.log('Hello' + "," + `${name}`)
// }
// sayHello('Mr. Spock')

// function isPalindrome(x) {
//   let w = x.split("").reverse().join("")
//   console.log(w)
//   if(x.toLowerCase() == w.toLowerCase()){
//     return  console.log(true)
//   }else{
//     return console.log(false)
//   }
// }
// isPalindrome("Alla")

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

// Test.assertEquals(hoopCount(3),"Keep at it until you get it" ) 
// Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
// function hoopCount (n) {
//   if(n >= 10) {
//     return "Great, now move on to tricks"
//   } else {
//     return "Keep at it until you get it"
//   }
// }
// hoopCount(3)

// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript
//5
function removeChar(str) {
  let w = ''
  for (let i = 1; i < str.length - 1; i++) {  /// i = 5

    w += str[i]
  }
  // console.log(w)
  // for(let i = 0; i < str.length - 1; i++){  /// i = 5
  //   if(str[i] != str[0] && str[i] != str[str.length-1]) //str[5] != str[0] && str[5] != str[str.length-1] || e !== e
  //   w += str[i]
  //  console.log(w)
  // }

};
removeChar('eloquent')
// 2 !== 2
//  https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript


function humanYearsCatYearsDogYears(humanYears) {
  const people = humanYears;
  let ageCat = 0; // 15 + 9 + 4 + 4 + 4
  let ageDog = 0;

  for (let i = 0; i < humanYears; i++) {
    switch (i) {
      case 0: ageCat += 15; ageDog += 15; break;
      case 1: ageCat += 9; ageDog += 9; break;
      default: ageCat += 4; ageDog += 5; break;
    }

  }
  return [people, ageCat, ageDog];
}


humanYearsCatYearsDogYears(5)


// 15кошачьи годы для первого года
// +9кошачьи годы на второй год
// +4кошачьи годы за каждый последующий год
// Собачьи годы
// 15собачьи годы за первый год
// +9собачьи годы на второй год
// +5собачьи годы за каждый последующий год



1 === '1'

// 

// [2, 4, 0, 100, 4, 11, 2602, 36]
// [160, 3, 1719, 19, 11, 13, -21]

// function findOutlier(integers){

//   const arrsCheat = [] // 2 4
//   const arrsNoCheat = [] // 1 


//   for(let i of integers){
//       if(i % 2 === 0){
//         arrsCheat.push(i)

//       } else {
//         arrsNoCheat.push(i)
//       }
//   }

//   if(arrsCheat.length === 1){
//     return arrsCheat[0]
//   }else{
//     return arrsNoCheat[0]
//   }



// }

// findOutlier([1, 2, 3])
// "(123) 456-7890"

// function createPhoneNumber(numbers){
// const n = numbers;

// // const phone = '(' + n[0] + n[1] + n[2] + ') '
// // const phone = `(${n[0]+n[1]}) ${n[3]}`

// }

// function selReverse(array, length) { // 3
//   const newArr = [];

//   let i = 0;


//   while (array.length >= i) {


//     // 3 / 2 >= 0
//     for (let index = length - 1; index >= 0; index--) {
//       if (array[index] || array[index] === 0) {
//         if (i === 0) {
//           newArr.push(array[index])  // 1 2

//         } else {
//           newArr.push(array[i - index])  // 1 2

//         }
//       }
//     }
//     newArr.push(array[i - 3],array[i - 2],array[i - 1], )

//     i += length;


//   }
//   return newArr

// }
// console.log(selReverse([1,2,3,4,5,6],2));
// [1,2,3,4,5,6], 
// [2,14,3,65]


// [2,4,6,8,10,12,14,16]

// , 3, [6,4,2,12,10,8,16,14]

// 2, [2,1,4,3,6,5]

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"

// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


// function likes(n) {
//   switch(n.length){
//     case 0 : return "no one likes this";
//     case 1 : return n[0] + " likes this";
//     case 2 : return n[0] + " and " + n[1] + " likes this";
//     case 3 : return n[0] + ", " + n[1] + " and " + n[2] + " likes this";
//     default : return n[0] + ", " + n[1] + " and 2 others like this"

//   }

// }

// for(let item of names){

//     if(names.length == 0){

//         console.log("no one likes this");

//     } else if(names.length >= 4){

//         console.log()

//     }else{

//         console.log(`${item + "like this"}`)

//     }

// }
// likes([])


// function digitalRoot(n) {
//   n = n.toString()
//   let w = 0
//   for (let i of n) {
//     w += +i
//   }

//   const strW = w.toString();

//   if (strW.length === 1) {
//     return w
//   } else {
//     return digitalRoot(w)
//   }

// }

// digitalRoot(94)





// const btn = document.querySelector('.create')
// const a_link = document.querySelector('.a')

// function create(){
//   a_link.style.color = 'green';
//   a_link.innerHTML = 'working'
//   a_link.href = "https://www.ukr.net/ua/"
// }
// btn.onclick = create;




// const btn_2 = document.querySelector('.create2');
// const inp = document.querySelector('.inp2');

// function makeImp(){
//     inp.disabled = false;
//     inp.value = 'hello'
//     inp.type = 'button'
// }
// btn_2.onclick = makeImp;

// const btn_3 = document.querySelector('.create3');
// const sel = document.querySelector('.sel');

// function select(){
//     sel.disabled = false;
//     sel.innerHTML = `<option>"ENG"</option>
//                     <option>"SPA"</option>`
// }
// btn_3.onclick = select;



// let w1 = ['a','e','i','o','u','y']

// console.log(w1.includes('T'));


// function disemvowel(str) {

//   let w = ['a','e','i','o','u','y']
//   let newStr = ''
//   for(const litture of str){
//       if(w.includes(litture.toLowerCase()) === false){
//         newStr += litture
//       }
//   }
//   return newStr
// }
// disemvowel("This website is for losers LOL!")
//Ths wbst s fr lsrs LL!


// function findAverage(array) {
//   let w = 0
//         let result = 0
//         for(let i of array){
//             w += i
//         }
//         result = w / array.length
//         console.log(result);
//         return result;
//  }
//  findAverage([1,2,3,4,5])




// function make(oper, value1, value2){

//   switch(oper){
//     case '+' : return value1 + value2;
//   }

// }

// make('+', 2, 2);



// for (const num of arr) {
//   if(num > max) {
//     max = num;
//   }
//   if(num < min) {
//     min = num;
//   }
// }

// const word = -1
// switch(word){
//   case 'hello': console.log('12');break;  // word ===  'hello'
//   case 44: console.log('no'); break; //  word === 44
//   case -1: console.log(-1); break; //  word === -1
 
// }


// const changeArr = (arr) => {
//   const min = Math.min(...arr)  // -1
//   const max = Math.max(...arr) // 99

//   const newArr = []

//   for(const num of arr) {  // 2  |  -1
//     // if(num !== min && num !== max){  // num !== -1 || num !== 99 |    false || true
//     //   newArr.push(num)
//     // }

//     switch(num){
//       case min : 
//       case max : break;
//       default : newArr.push(num);
//     }

//   }

  // unit 3 (// 4 - 5 )

  // for (let i = 0; i < arr.length; i++) {
  //   const num = arr[i];

  //   if(num > arr[indexMax]) {
  //     indexMax = i
  //   }
  //   if(num < arr[indexMin]) {
  //     indexMin = i
  //   }

  // }

  // arr.splice(indexMax,1)
  // arr.splice(indexMin,1)

// console.log(newArr);
  

// }

// changeArr([2, 4, 7, -1, 99, 1, 32])


// let indexMin = 0
//   let indexMax = 0

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];

//     if(num > arr[indexMax]) {
//       indexMax = i
//     }
//     if(num < arr[indexMin]) {
//       indexMin = i
//     }

//   }

//   arr.splice(indexMax,1)
//   arr.splice(indexMin,1)


  
//   console.log(arr);


// let min = arr[0] // 2
// let max = arr[0] // 2

// let indexMin = 0
// let indexMax = 0

// for (let i = 0; i < arr.length; i++) {
//   const num = arr[i];

//   if(num > max) {
//     max = num;
//     indexMax = i
//   }
//   if(num < min) {
//     min = num;
//     indexMin = i
//   }

// }

// arr.splice(indexMax,1)
// arr.splice(indexMin,1)


// console.log(min);
// console.log(max);


// console.log(arr);



//git  !! 


// 



// function createPhoneNumber(num){
//   let phone = `(${num[0]}${num[1]}${num[2]})  ${num[3]}${num[4]}${num[5]}-${num[6]}${num[7]}${num[8]}`

//   console.log(phone.toString());
  
// }
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])