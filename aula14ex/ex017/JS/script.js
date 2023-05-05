'use strict';

const inputvalue = document.querySelector('#inumber');
const resultBox = document.querySelector('#result-box')
let calcButton = document.querySelector('#calc-button')

function calculate() {
    let number = Number(inputvalue.value);
    resultBox.innerText = '';
    for (var c = 1; c <= 10; c++) {
        var result = c * number;
        let item = document.createElement('div');
        item.classList.add('result-line');
        item.innerHTML = `${c} x ${number} = ${result}`
        resultBox.appendChild(item);
    }
}

calcButton = document.addEventListener('click', calculate);