const submitButton = document.querySelector('.submit')
const input = document.querySelector('.email')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const amount = document.querySelector('.input')
const point = document.querySelectorAll('.point')
const menuBurger = document.querySelector('.burger')
const burger = document.querySelector('.menu-burger')
const cancelCross = document.querySelector('.cancel')
const body = document.querySelector('.body')

menuBurger.addEventListener('click', ()=>{
    burger.style.display = 'block'
    burger.style.height = '900px'
    body.style.overflow = 'hidden'
})


cancelCross.addEventListener('click', ()=>{
    burger.style.display = 'none'
    body.style.overflow = 'visible'
    burger.style.height = 'auto'
})

burger.addEventListener('click', ()=>{
    burger.style.display = 'none'
    body.style.overflow = 'visible'
    burger.style.height = 'auto'
})

input.addEventListener('input',()=>{
    submitButton.classList.add("valid")
})

let buttons = [one, two, three, four, five, six, seven, eight];
let points = [point[0], point[1], point[2], point[3], point[4], point[5], point[6], point[7]];

buttons.forEach((button, index) => {
    button.addEventListener('click', ()=> {
        buttons.forEach((btn, btnIndex) => {
            if(btnIndex === index) {
                btn.classList.add('orange');
                points[btnIndex].classList.add('active');
                amount.value = btn.innerHTML.slice(1, btn.length);
            } else {
                btn.classList.remove('orange');
                points[btnIndex].classList.remove('active');
            }
        });
    });
});

amount.addEventListener('input', ()=> {
    buttons.forEach((button, index) => {
        if(amount.value === button.textContent.slice(1, button.length)) {
            buttons.forEach((btn, btnIndex) => {
                if(btnIndex === index) {
                    btn.classList.add('orange');
                    points[btnIndex].classList.add('active');
                } else {
                    btn.classList.remove('orange');
                    points[btnIndex].classList.remove('active');
                }
            });
        }
    });
});
