lista = []
function adicionar() {
    num = document.getElementById('nv1')
    res = document.getElementById('Apresentar')
    if (num.value.length == 0) {
        alert('[ERRO] Coloque valores númericos para adicionar a lista!')
    } else {
        n = Number(num.value)
        if (lista.indexOf(n) == -1) {
            lista.push(n)
            res.innerText = `${lista}`
        } else {
            alert('Este número já foi adicionado a lista! Por favor, coloque um número novo.')
        }
    }
}