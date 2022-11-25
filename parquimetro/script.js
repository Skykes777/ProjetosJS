var num = document.getElementById('fnum');
var res = document.getElementById('resposta');

/* 
Preços por minuto/hora
R$ 1,00 = 30 minutos
R$ 1,75 = 1 minutos
R$ 3,00 = 2 minutos
*/

function Confirmar() {
    if (num.value.length == 0 || num.value < 1 || num.value > 3) {
        alert('[ERRO] valor invalido, aceitams preços apartir de R$1,00 a R$3,00');
        num.focus();
        num.value = '';
        res.innerHTML = '';
    } else {
        var preço = Number(num.value);
        if (preço >= 1 && preço < 1.75) {
            res.innerHTML = `Tempo: 30 minutos<br>`;
            res.innerHTML += `Troco: R$: ${(preço - 1).toFixed(2)}`;
        } else if (preço < 3) {
            res.innerHTML = `Tempo: 60 minutos<br>`;
            res.innerHTML += `Troco: R$: ${(preço - 1.75).toFixed(2)}`;
        } else {
            res.innerHTML = `Tempo: 120 minutos<br>`;
            res.innerHTML += `Troco: R$: ${(preço - 3).toFixed(2)}`;
        }
    }
}