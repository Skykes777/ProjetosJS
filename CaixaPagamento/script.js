function concluirCompra() {
    valor = document.querySelector('input#txnum')
    va = document.querySelector('input#avista')
    nc = document.querySelector('input#nocartao')
    e5 = document.querySelector('input#em5xv')
    res = document.querySelector('div#resposta')
    if (valor.value.length == 0) {
        alert('[ERRO] Coloque um valor monetário!')
    } else {
        preco = Number(valor.value)
        oppag = document.getElementsByName('xradio')
        if (oppag[0].checked) {   // Opção de pagamento a vista
            totalVista = preco - (preco*0.10)
            res.innerHTML = `Você recebeu um desconto de 10%, valor total a ser pago é ${totalVista.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        } else if (oppag[1].checked) { // Opção de pagamento em 5x
            totalCartao = preco - (preco*0.07)
            res.innerHTML = `Você recebeu um desconto de 8%, valor total a ser pago é ${totalCartao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        } else {
            total5x = preco + (preco*0.10)
            parcelas = total5x / 5
            res.innerHTML = `Você recebeu juros de 10%, valor total a ser pago é ${total5x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}, com parcelas em 5 vezes de ${parcelas.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        }
    }
}