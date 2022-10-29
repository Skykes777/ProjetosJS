num = document.getElementById('fnum')
listaNuns = document.getElementById('flista')
res = document.getElementById('resultado')
valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function somaVetor(l) {
    soma = 0
    for (n in l){
        soma += l[n]
    }
    return soma
}

function adicionar() {
    if (isNumero(num.value) && inLista(num.value, valores)) {
        n = Number(num.value)
        valores.push(n)
        item = document.createElement('option')
        item.text = `Número ${n} adicionado`
        listaNuns.appendChild(item)
        res.innerHTML = ''
        num.value = ''
    } else {
        alert('[ERRO] Coloque apenas valores númericos entre 1 e 100!')
        num.value = ''
    }
}

function finalizar() {
    if (valores.length >= 1) {
        soma = somaVetor(valores)
        media = soma / valores.length
        res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi ${Math.max(...valores)}.<br>`
        res.innerHTML += `O menor valor informado foi ${Math.min(...valores)}.<br>`
        res.innerHTML += `A soma dos valores digitados é ${soma}.<br>`
        res.innerHTML += `A média da soma dos valores da lista é ${media}.`
    } else {
        alert('[ERRO] coloque valores antes de finalizar!')
    }
}

function limpar() {
    valores = []
    listaNuns.innerText = ''
    res.innerHTML = ''
}