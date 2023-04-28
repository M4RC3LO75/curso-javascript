let start = document.querySelector('#txtstart');
let end = document.querySelector('#txtend');
let step = document.querySelector('#txtstep');
let btnCalc = document.querySelector('#btncalc');
let result = document.querySelector('#txtresult');

btnCalc.addEventListener('click', calculate);

function calculate(){
    let startValue = Number(start.value);
    let endValue = Number(end.value);
    let stepValue = Number(step.value);

    if (startValue != null && endValue != null && stepValue > 0) {
        if (startValue < endValue) {
            result.innerHTML = `${startValue}`;
            startValue += stepValue;
            if (startValue < endValue) {
                for (var c = startValue; c <= endValue; c += stepValue) {
                    result.innerHTML += ` <span class="material-icons">double_arrow</span>${c}`;
                }
            }
            
        }
        if (endValue < startValue) {
            result.innerHTML = `${startValue}`;
            startValue -= stepValue;
            if (startValue > endValue) {
                for (var c = startValue; c >= endValue; c -= stepValue) {
                    result.innerHTML += ` <span class="material-icons">double_arrow</span>${c}`;
                }
            }
        }
        result.innerHTML += `  |<span class="material-icons">flag</span>`
    }
}