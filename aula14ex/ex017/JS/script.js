'use strict';

const inputvalue = document.querySelector('#inumber');
const resultText = document.getElementById('result')
let calcButton = document.querySelector('#calc-button')

function calculate() {
    var number = Number(inputvalue.value);
    resultText.innerText = '';
    for (var c = 1; c <= 10; c++) {
        var result = c * number;
        resultText.innerHTML += `${c} x ${number} = ${result}</br>`;
        console.log(number);
    }
}

calcButton = document.addEventListener('click', calculate);