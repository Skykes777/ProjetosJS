"use strict"

let num = document.getElementById('fnum');
let res = document.getElementById('resposta');

const somaVet = vet => {
    let soma = 0;
    for (let n of vet) {
        soma += n;
    }
    return soma;
};

function vnPerfeito() {
    if (num.value.length == 0 || num.value <= 0) {
        alert('[ERRO] coloque valores inteiros positivos para finalizar o teste!');
        num.value = '';
        num.focus();
        res.innerHTML = '';
    }
    else {
        res.innerHTML = '';
        const np = Number(num.value);
        let divisores = [];
        for (let c = 1; c < np; c++) {
            if (np % c == 0) {
                divisores.push(c);
            }
        }
        res.innerHTML = 'Divisores: ';
        for (let n of divisores) {
            res.innerHTML += `${n}`;
            if (n != divisores.slice(-1)[0]) {
                res.innerHTML += ', ';
            }
        }
        res.innerHTML += ` (Soma: ${somaVet(divisores)})`;
        if (somaVet(divisores) == np) {
            res.innerHTML += `<br><strong>${np} é um número perfeito</strong>`;
        } else {
            res.innerHTML += `<br><strong>${np} não é um número perfeito</strong>`;
        }
    }
};