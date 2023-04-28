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

    for (var c= startValue; c <= endValue; c += stepValue){
        result.innerHTML = c + ', '

    }
}