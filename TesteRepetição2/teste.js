"use strict"

let quantAnimais = document.getElementById('fnum1');
let quantAnos = document.getElementById('fnum2');
let res = document.getElementById('resposta');

function mpdc() {
    if (quantAnimais.value < 2) {
        alert('[ERRO] coloque uma quantidade de animais maior ou igual a dois');
        quantAnimais.focus();
    } else if (quantAnos.value.length == 0 || Number(quantAnos.value) <= 0) {
        alert('[ERRO] coloque uma quantidade de ano maior ou igual a 1');
        quantAnos.focus();
    } else {
        res.innerHTML = '';
        let quantA = Number(quantAnimais.value);
        res.innerHTML = 'Triplicando a cada ano que se passa temos o total de...<br>';
        for (let c = 1; c <= Number(quantAnos.value); c++) {
            res.innerHTML += `${c}º ano: ${quantA} animais<br>`;
            quantA *= 3;
        }
    }
};