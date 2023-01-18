"use strict"

let num = document.getElementById('fnum');
let res = document.getElementById('resposta');

function CriarEstrelas() {
    if (num.value.length == 0 || num.value <= 1 || num.value > 45) {
        alert('[ERRO] coloque um valor de 1 a 45');
        num.focus();
        num.value = '';
        res.innerHTML = '';
    } else {
        res.innerHTML = '';
        let n = Number(num.value);
        for (let i = 1; i <= n; i++) {
            for (let c = 1; c <= i; c++) {
                res.innerHTML += '* ';
            }
            res.innerHTML += '<br>';
        }
    };
};