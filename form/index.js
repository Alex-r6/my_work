const btn = document.querySelector('.btn');
const inp = document.querySelectorAll('.red_border');
const box = document.querySelector('.box');
const check = document.querySelector('.check');
const p = document.querySelector('.red')

function make_border(){
for (let index = 0; index < inp.length; index++) {
    if(inp[index].value.length === 0 || check.checked != true){
        inp[index].style.borderColor = 'red'
        p.style.color = 'red'
    }else{
            // box.style.bottom = '0px';
            box.style.display = 'flex';
            box.innerHTML = `${inp[0].value} <br>
                             ${inp[2].value}<br>
                             ${inp[4].value}`
        }
    } 
}

btn.onclick = make_border;