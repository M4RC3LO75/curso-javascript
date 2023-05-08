let num = [5,8,6,9,1,3]
num.push(2);
num.sort();
for (let i in num) {
    console.log(`O valor do vetor ${i} é ${num[i]}`);
}
let pos = num.indexOf(7);

if (pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O Número 8 está na posição: ${pos}`);
}