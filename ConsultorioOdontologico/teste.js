"use strict"

let nome = document.getElementById('fnome');
let apPa = document.getElementById('APpacientes');
let res = document.getElementById('resposta');
let pacientes = [];

function adicionar() {
    if (nome.value.length == 0) {
        alert('[ERRO] Coloque um nome valido!');
        nome.focus();
        nome.value = '';
    };
    pacientes.push(nome.value);
    nome.value = '';
    apPa.innerHTML = '';
    pacientes.map((n, i) => apPa.innerHTML += `${i+1}: ${n}<br>`);
};

function urgencia() {
    if (nome.value.length == 0) {
        alert('[ERRO] Coloque um nome valido!');
        nome.focus();
        nome.value = '';
    }
    pacientes.unshift(nome.value);
    nome.value = '';
    apPa.innerHTML = '';
    pacientes.map((n, i) => apPa.innerHTML += `${i + 1}: ${n}<br>`);
};

function atender() {
    if (pacientes.length == 0) {
        alert('Não a pacientes na lista de espera');
        nome.focus();
        nome.value = '';
        res.innerHTML = 'Em atendimento: ';
    } else {
        let atendido = pacientes.shift();
        res.innerHTML = 'Em atendimento: ';
        res.innerHTML += `${atendido}`;
        apPa.innerHTML = '';
        pacientes.map((n, i) => apPa.innerHTML += `${i + 1}: ${n}<br>`);
    }
}