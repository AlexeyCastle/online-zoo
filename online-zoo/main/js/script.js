const submitButton = document.querySelector('.submit')
const input = document.querySelector('.email')
const menuBurger = document.querySelector('.burger')
const burger = document.querySelector('.menu-burger')
const cancelCross = document.querySelector('.cancel')
const body = document.querySelector('.body')
const headerLogo = document.querySelector('.logo')
const card = document.querySelector('.card')
const buttonLeft = document.querySelector('.left')
const buttonRight = document.querySelector('.right')
const slides = document.querySelectorAll('.animal')
const wrap = document.querySelector('.animal-flex')
const range = document.querySelector('.slider-range')
const testimonialsFlex = document.querySelector('.testimonials-flex')
const paragraph = document.querySelector('.paragraph')
const john = document.querySelector('.john')
const oskar = document.querySelector('.oskar')
const fredericka = document.querySelector('.fredericka')
const xCross = document.querySelector('.testimonials-cross')


input.addEventListener('input',function (event){
   submitButton.classList.add("valid")
})

menuBurger.addEventListener('click', function (event){
   burger.style.display = 'block'
   burger.style.height = '900px'
   body.style.overflow = 'hidden'
})


cancelCross.addEventListener('click', function (event){
   burger.style.display = 'none'
   body.style.overflow = 'visible'
   burger.style.height = 'auto'
})

burger.addEventListener('click', function (event){
   burger.style.display = 'none'
   body.style.overflow = 'visible'
   burger.style.height = 'auto'
})
buttonRight.addEventListener('click', function(event){
    let unique = r()
    function r(){
        let uniqueValues = new Set()
        for (let i = 0; i < 10; i++) {
            let randomNumber = Math.round(Math.random()*11)
            uniqueValues.add(randomNumber)
        }
        return [...uniqueValues]
    }
    for (let i = 0; i < unique.length ; i++) {
        slides[unique[i]].classList.toggle('none')
    }
    wrap.classList.add('move-right')
    wrap.addEventListener('animationend',function(event){
        wrap.classList.remove('move-right')
    })
    wrap.addEventListener('animationstart', function (event) {
        buttonRight.setAttribute('disabled', true)
    })
    wrap.addEventListener('animationend', function (event) {
        buttonRight.removeAttribute('disabled')
    })

})



buttonLeft.addEventListener('click', function (event) {

    let unique = r()

    function r() {
        let uniqueValues = new Set()
        for (let i = 0; i < 10; i++) {
            let randomNumber = Math.round(Math.random() * 11)
            uniqueValues.add(randomNumber)
        }
        return [...uniqueValues]
    }

    for (let i = 0; i < unique.length; i++) {
        slides[unique[i]].classList.toggle('none')
    }
    wrap.classList.add('move-left')
    wrap.addEventListener('animationend', function (event) {
        wrap.classList.remove('move-left')
    })
    wrap.addEventListener('animationstart', function (event) {
        buttonLeft.setAttribute('disabled', true)
    })
    wrap.addEventListener('animationend', function (event) {
        buttonLeft.removeAttribute('disabled')
    })
})

function changePosition(){
    let y = paragraph.innerHTML = range.value * 21
    testimonialsFlex.style.transform = `translateX(${-y}px`
}
changePosition()

john.addEventListener('click', function (event){
    john.classList.toggle('active')
    xCross.addEventListener('click', function (event){
        john.classList.toggle('active')
    })
})

oskar.addEventListener('click', function (event){
    oskar.classList.toggle('active')
    xCross.addEventListener('click', function (event){
        oskar.classList.toggle('active')
    })
})
fredericka.addEventListener('click', function (event){
    fredericka.classList.toggle('active')
    xCross.addEventListener('click', function (event){
        fredericka.classList.toggle('active')
    })
})

