"use strict"

let num = document.getElementById('fnum');
let ferr = document.getElementById('ferros');
let fcha = document.getElementById('fchances');
let res = document.getElementById('resposta');
let contErros = [];
let chances = 6;
let sorteado = Math.floor(Math.random() * 20) + 1;

const inLista = (l, n) => l.indexOf(Number(n.value)) == -1 ? true:false;

function apostarNum() {
    if (num.value.length == 0 || num.value < 1 || num.value > 20) {
        alert('[ERRO] digite um número entre 1 e 20');
        num.focus();
        num.value = '';
    } else {
        if (Number(num.value) == sorteado) {
            res.innerHTML = `Parabens, você acertou o número! ${sorteado}`;
        } else if (!inLista(contErros, num)) {
            alert(`Você já adicionou esse número, tente outro!`);
            num.value = '';
            num.focus();
        } else if (chances >= 1) {
            contErros.push(Number(num.value));
            chances--;
            ////////////////--APRESENTAÇÃO DOS ERROS--/////////////////
            ferr.innerHTML = '';
            ferr.innerHTML = `Erros: ${contErros.length} ( `;
            for (let c = 0; c <= contErros.length; c++) {
                if (c == contErros.length) {
                    ferr.innerHTML += `${contErros[c]} )`;
                } else {
                    ferr.innerHTML += `${contErros[c]}, `;
                }
            }
            fcha.innerHTML = `Chances: ${chances}`;
            if (num.value > sorteado) {
                res.innerHTML = `Tente um número menor que ${num.value}`;
            } else {
                res.innerHTML = `Tente um número maior que ${num.value}`;
            }
            num.value = '';
            num.focus();
        } else {
            res.innerHTML = `Você perdeu, o número sorteado erá ${sorteado}`;
        }
    }
}