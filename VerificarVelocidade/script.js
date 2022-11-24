var velPermitida = document.getElementById('fvelPer');
var velCondutor = document.getElementById('fvelCon');
var res = document.getElementById('resposta');

function verificarVelocidade() {
    if (Number(velPermitida.value).length == 0 || Number(velPermitida.value) <= 0) {
        alert('[ERRO] Valor incorreto ou não preenchido no campo de velocidade permitida!');
        velPermitida.focus();
        velPermitida.value = '';
        res.innerHTML = '';
    } else if (Number(velCondutor.value).length == 0 || Number(velCondutor.value) <= 0) {
        alert('[ERRO] Valor incorreto ou não preenchido no campo de velocidade do condutor!');
        velCondutor.focus();
        velCondutor.value = '';
        res.innerHTML = '';
    } else {
        var velocidadePermitida = Number(velPermitida.value);
        var velocidadeCondutor = Number(velCondutor.value);
        res.innerHTML = `Sua velocidade é de <strong>${velocidadeCondutor.toFixed(2)}km/h</strong><br>`;
        if (velocidadeCondutor > velocidadePermitida) {
            var multaMX = (1.50 * (velocidadeCondutor - velocidadePermitida)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            res.innerHTML += `Você recebeu uma <strong>multa</strong> de <strong>${multaMX}</strong> por exceder o limite de velocidade de <strong>${velocidadePermitida.toFixed(2)}km/h</strong> permitido.`;
        } else if (velocidadeCondutor < 60) {
            var multaMN = (1.50 * (60 - velocidadeCondutor)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            res.innerHTML += `Você recebeu uma <strong>multa</strong> de <strong>${multaMN}</strong> por andar abaixo do velocidade de <strong>60km/h</strong> permitido.`;
        } else {
            res.innerHTML += `Tenha um bom dia, dirija com cuidado!`
        }
    }
}