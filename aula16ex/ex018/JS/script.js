let num = document.querySelector('input#fnum');
let list = document.querySelector('select#flist');
let result = document.querySelector('div#result');
let values = [];

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else return false;
}

function inList (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else return false;
}

function Add() {
    if (isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        list.appendChild(item); 
    } else {
        window.alert('Valor inválido ou já existe na lista.')
    }
    num.value = '';
    result.innerHTML = '';
    num.focus();
}

function endTask() {
    if (values.length == 0) {
        window.alert('Adicione um valor para finalizar.');
    } else {
        let total = values.length;
        let sum = 0;
        let average = 0;
        let minor = values[0];
        let bigger = values[0];
        for (let pos in values){
            sum += values[pos];
            if (values[pos] > bigger) {
                bigger = values[pos];
            }
            if (values[pos] < minor) {
                minor = values[pos];
            }
        }
        average = sum / values.length;
        

        result.innerHTML = '';
        result.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`;
        result.innerHTML += `<p>O menor valor informado foi ${minor}</p>`;
        result.innerHTML += `<p>O maior valor informado foi ${bigger}</p>`;
        result.innerHTML += `<p>A soma de todos os números é ${sum}`;
        result.innerHTML += `<p>A média dos valores somados é ${average}`;
    }
    num.focus();
}