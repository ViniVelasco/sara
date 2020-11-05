import cipher from './cipher.js';

let btn_back = document.querySelector("#btn-back")
let page1 = document.querySelector("#page1")
let page2 = document.querySelector("#page2")
let btn_inicio = document.querySelector("#btn-start")
let message = document.querySelector("#msg")
let offset = document.querySelector("#offset")
let choice = document.querySelector("#choice")
let choice2 = document.querySelector("#choice2")
let result = document.querySelector("#result")
let result_name = document.querySelector("#result-name")
let btn_sorteio = document.querySelector("#btnSorteio");


const startBtn = () => {
    page1.classList.toggle('display-block')
    page2.classList.toggle('display-none')
    btn_back.classList.toggle('display-none')
}

//btn_inicio.addEventListener('click', startBtn)

const backToInitialPage = () => {
    page1.classList.toggle('display-block')
    page2.classList.toggle('display-none')
    btn_back.classList.toggle('display-none')
    message.value = ""
    offset.value = ""
    result.style.display = "none"
}

//btn_back.addEventListener('click', backToInitialPage)

const showErrorEncode = () => {
    if (message.value == "" || offset.value == "") {
        alert("Por favor, preencha o campo requerido")
    } else {
        result_name.innerHTML = cipher.encode(offset.value, message.value)
        result.style.display = "block"
    }
}

choice.addEventListener('click', showErrorEncode)

const showErrorDecode = () => {
    if (message.value == "" || offset.value == "") {
        alert("Por favor, preencha o campo requerido")
    } else {
        result_name.innerHTML = cipher.decode(offset.value, message.value)
        result.style.display = "block"
    }
}

choice2.addEventListener('click', showErrorDecode)

btn_sorteio.addEventListener('click', cipher.sorteio);
