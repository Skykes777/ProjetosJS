"use strict"

let fruta = document.getElementById('fnome');
let num = document.getElementById('fnum');
let res = document.getElementById('resposta');

function repetirF() {
    if (fruta.value.length == 0) {
        alert('[ERRO] prencha o campo da fruta para finalizar!');
        fruta.focus();
    } else if (num.value.length == 0) {
        alert('[ERRO] prencha o campo da quantidade para finalizar!');
        num.focus();
    } else {
        res.innerHTML = '';
        for (let c = 1; c <= Number(num.value); c++) {
            res.innerHTML += `${fruta.value} `;
            if (c < Number(num.value)) {
                res.innerHTML += '* ';
            }
        };
    }
};