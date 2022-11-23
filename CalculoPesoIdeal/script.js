nome = document.getElementById('fent')
fsexo = document.getElementsByName('sexo')
altura = document.getElementById('faltura')
res = document.getElementById('resposta')

function calcular() {
    if (nome.value.length > 0 && Number(altura.value) > 0) {
        pesoIdeal = 0
        if (fsexo[0].checked) {
            pesoIdeal = 22 * Number(altura.value) ** 2
        } else {
            pesoIdeal = 21 * Number(altura.value) ** 2
        }
        res.innerHTML = `${nome.value}: Seu peso ideal é ${pesoIdeal.toFixed(2)} kg`
    } else {
        alert('[ERRO] Valor incorretos ou não preenchidos!')
    }
}

function limpar() {
    nome.value = ''
    altura.value = ''
    res.innerHTML = ''
}