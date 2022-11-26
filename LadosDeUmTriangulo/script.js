var ladoA = document.getElementById('fladoA');
var ladoB = document.getElementById('fladoB');
var ladoC = document.getElementById('fladoC');
var res = document.getElementById('resposta');

/* 
TRIÂNGULO ESCALENO = TODOS OS LADOS DIFERENTES
TRIÂNGULO ISÓSCELES = DOIS LADOS COM MEDIDAS IGUAIS
TRIÂNGULO EQUÍLATERO = TODOS OS LADOS IGUAIS
*/

function verificarL() {
    if (ladoA.value.length == 0) {
        alert('[ERRO] coloque um valor para o "Lado A"');
        ladoA.focus();
    } else if (ladoB.value.length == 0) {
        alert('[ERRO] coloque um valor para o "Lado B"');
        ladoB.focus();
    } else if (ladoC.value.length == 0) {
        alert('[ERRO] coloque um valor para o "Lado C"');
        ladoC.focus();
    } else {
        var lA = Number(ladoA.value);
        var lB = Number(ladoB.value);
        var lC = Number(ladoC.value);
        // TESTE PARA VER SE OS LADOS FORMA TRIÂNGULOS
        if (lA > lB + lC) {
            res.innerHTML = `O lado <strong>A</strong> é maior que a soma do lado <strong>B</strong> e lado <strong>C</strong><br> <strong>NÃO FORMA </strong>um triângulo!`;
        } else if (lB > lA + lC) {
            res.innerHTML = `O lado <strong>B</strong> é maior que a soma do lado <strong>A</strong> e lado <strong>C</strong><br> <strong>NÃO FORMA </strong>um triângulo!`;
        } else if (lC > lA + lB) {
            res.innerHTML = `O lado <strong>C</strong> é maior que a soma do lado <strong>A</strong> e lado <strong>B</strong><br> <strong>NÃO FORMA </strong>um triângulo!`;
        } else {
            // TESTE PARA VER QUAL TIPO DE TRIÂNGULO FORMA
            res.innerHTML = 'Os lados podem formar um triângulo';
            if (lA != lB && lB != lC && lC != lA) {
                res.innerHTML += `os ângulos formam um triângulo <strong>ESCALENO</strong>`;
            } else if (lA == lB && lB == lC && lC == lA) {
                res.innerHTML += `os ângulos formam um triângulo <strong>EQUÍLATERO</strong>`;
            } else {
                res.innerHTML += `os ângulos formam um triângulo <strong>ISÓSCELES</strong>`;
            }
        }
    }
}