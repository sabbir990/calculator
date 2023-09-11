const numberBtns = document.querySelectorAll(".number-btn")
const acBtn = document.querySelector(".ac-btn")
const delBtn = document.querySelector(".del-btn")
const resultBtn = document.querySelector(".result-btn")
const numberInput = document.querySelector(".number-input")
const colorInput = document.querySelector(".color-input")
const signBtn = document.querySelectorAll(".signs")
const sizeInp = document.getElementById("sizeInp")
var inputtedNumber = "";

numberBtns.forEach((numbers) => {
    numbers.addEventListener('click', function () {
        inputtedNumber += numbers.innerHTML;

        numberInput.value = inputtedNumber;
    })
})
signBtn.forEach((sign) => {
    sign.addEventListener('click', function () {
        const lastChar = inputtedNumber.slice(-1)
        if (lastChar !== sign.innerHTML) {
            inputtedNumber += sign.innerHTML;
            numberInput.value = inputtedNumber;
        }
    })
})
acBtn.addEventListener('click', function () {
    inputtedNumber = "";

    numberInput.value = inputtedNumber;
})
delBtn.addEventListener('click', function () {
    console.log("Before deletion:", inputtedNumber);
    inputtedNumber = inputtedNumber.slice(0, -1);
    console.log("After deletion:", inputtedNumber);
    numberInput.value = inputtedNumber;
})
resultBtn.addEventListener('click', function(){
    inputtedNumber = eval(inputtedNumber);
    numberInput.value = inputtedNumber;
})
colorInput.addEventListener('change', function(){
    numberInput.style.color = `${colorInput.value}`
})
sizeInp.addEventListener('change', function(event){
    numberInput.style.fontSize = `${event.target.value}px`
})

window.addEventListener('load', function(){
    sizeInp.value = 20;
})