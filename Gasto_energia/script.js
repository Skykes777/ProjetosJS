/*
 - RESIDÊNCIA
    até 500: 0.40
    acima de 500: 0.65

 - INDÚSTRIAL
    até 5000: 0.55
    acima de 5000: 0.60

 - COMERCIAL
    até 1000: 0.55
    acima de 1000: 0.60
*/

function verificarGasto() {
    kwh = document.getElementById('fkwh')
    ops = document.getElementsByName('ops')
    res = document.getElementById('resposta')
    if (kwh.value.length != 0) {
        ///////////////////////
        ckwh = Number(kwh.value)
        if (ops[0].checked) {
            if (kwh.value <= 500) {
                preco = ckwh*0.40
            } else {
                preco = ckwh*0.65
            }
            res.innerHTML = `<h2>Gasto residêncial</h2>`
            res.innerHTML += `Preço total a pagar é de <strong>${preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong>`
        } else if (ops[1].checked) {
            if (kwh.value <= 5000) {
                preco = ckwh*0.55
            } else {
                preco = ckwh*0.60
            }
            res.innerHTML = `<h2>Gasto indústrial</h2>`
            res.innerHTML += `Preço total a pagar é de <strong>${preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong>`
        } else {
            if (kwh.value <= 1000) {
                preco = ckwh*0.50
            } else {
                preco = ckwh*0.60
            }
            res.innerHTML = `<h2>Gasto comercial</h2>`
            res.innerHTML += `Preço total a pagar é de <strong>${preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong>`
        }
        /////////////////////
    } else {
        alert('[ERRO] Por favor, coloque o valor do consumo!')
    }
    kwh.value = ''
}