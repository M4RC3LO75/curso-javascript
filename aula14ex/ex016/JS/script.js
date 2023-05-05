var start = document.querySelector('#txtstart');
var end = document.querySelector('#txtend');
var step = document.querySelector('#txtstep');
var btnCount = document.querySelector('#btncount');
var result = document.querySelector('#txtresult')

btnCount.addEventListener('click', count);

function count() {
    var startValue = Number(start.value);
    var endValue = Number(end.value);
    var stepValue = Number(step.value);

    if (stepValue <= 0) {
        window.alert('Passo inválido. Considerando passo = 1...');
        stepValue = 1;
    }

    if (startValue !=='' && endValue !=='' && stepValue !=='') {

        if (startValue < endValue) {
            result.textContent = `Contando: ${startValue}`;
            for (let c = startValue + stepValue; c <= endValue; c += stepValue) {
                result.innerHTML += `\u{1F449} ${c}`;
            }
            
        } else if (startValue > endValue) {
            result.textContent = `Contando: ${startValue}`;
            for (let c = startValue - stepValue; c >= endValue; c -= stepValue) {
                result.innerHTML += `\u{1F449} ${c}`;
            }
        }
        result.textContent += ` \u{1F3C1}`;
    }
}