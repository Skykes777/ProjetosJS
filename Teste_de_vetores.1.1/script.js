lista = []
function adicionar() {
    num = document.getElementById('nv1')
    res = document.getElementById('listaNumeros')
    msg = document.getElementById('Mensagem')
    if (num.value.length == 0) {
        alert('[ERRO] Coloque valores númericos para adicionar a lista!')
    } else {
        n = Number(num.value)
        msg.innerText = 'Números da lista'
        if (lista.indexOf(n) == -1) {
            lista.push(n)
            item = document.createElement('option')
            item.text = `${n}`
            res.appendChild(item)
        } else {
            alert('Este número já foi adicionado a lista! Por favor, coloque um número novo.')
        }
    }
}