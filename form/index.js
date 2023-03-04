const btn = document.querySelector('.btn');
const inp = document.querySelectorAll('.red_border');
const box = document.querySelector('.box');
const check = document.querySelector('.check')

function make_border(){
    for(const elem of inp){
        if(elem.value.length === 0 || check.checked != true){
            elem.style.borderColor = 'red'
        }else{
                // box.style.bottom = '0px';
                box.style.display = 'flex';
            }
        }
        console.log(check.checked)
    }
btn.onclick = make_border;