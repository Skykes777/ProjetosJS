function gerarTabuada() {
    num = document.getElementById('txn')
    tab = document.getElementById('tabuada')
    if (num.value.length == 0) {
        alert('[ERRO] coloque um valor número para gerar a tabuada!')
    } else {
        n = Number(num.value)
        tab.innerText = ''
        c = 1
        do {
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        } while (c <= 10)
    }
}