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

    if (startValue !=='' && endValue !=='' && stepValue !=='') {
        if (startValue < endValue) {
        result.textContent = startValue;
            for (var c = startValue + stepValue; c <= endValue; c += stepValue) {
                result.innerHTML += ', ' + c;
            }
        } else if (startValue > endValue) {
            result.textContent = startValue;
            for (var c = startValue - stepValue; c >= endValue; c -= stepValue) {
                result.innerHTML += ', ' + c;
            }
            }
    }
}