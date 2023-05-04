'use strict';

const inputvalue = document.querySelector('#inumber');
const resultBox = document.getElementById('result-box')
let calcButton = document.querySelector('#calc-button')

function calculate() {
    var number = Number(inputvalue.value);
    resultBox.innerText = '';
    for (var c = 1; c <= 10; c++) {
        var result = c * number;
        resultBox.innerHTML += `<div class="result-line">${c} x ${number} = ${result}</div>`;
        console.log(number);
    }
}

calcButton = document.addEventListener('click', calculate);