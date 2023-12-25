const model = document.querySelector('.model')
const loginBtn = document.querySelector('.login-btn')
const CloseBtn = document.querySelector('.close')

loginBtn.addEventListener('click' , openModel)
CloseBtn.addEventListener('click' , closeModel)
window.addEventListener('click' , outsideClick)

function openModel(){
    model.style.display = 'block'
}

function closeModel(){
    model.style.display = 'none'
}

function outsideClick(){
    if(e.target == model) {
        closeModel
    }
}