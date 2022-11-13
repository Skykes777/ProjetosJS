function sacar() {
    num = document.getElementById('fnum')
    res = document.getElementById('resposta')
    if (num.value.length != 0 && num.value > 0 && num.value <= 3000) {
        val = Number(num.value)

        nota100 = 0
        nota50 = 0
        nota20 = 0
        nota10 = 0
        nota5 = 0
        nota2 = 0
        creditado = 0

        while (val >= 0) {
            if (val >= 100) {
                val -= 100
                nota100++
            } else if (val >= 50) {
                val -= 50
                nota50++
            } else if (val >= 20) {
                val -= 20
                nota20++
            } else if (val >= 10) {
                val -= 10
                nota10++
            } else if (val >= 5) {
                val -= 5
                nota5++
            } else if (val >= 2) {
                val -= 2
                nota2++
            } else if (val == 1) {
                val--
                creditado = 1
            } else {
                break
            }
        }

        res.innerHTML = `Notas de 100: ${nota100}<br>`
        res.innerHTML += `Notas de 50: ${nota50}<br>`
        res.innerHTML += `Notas de 20: ${nota20}<br>`
        res.innerHTML += `Notas de 10: ${nota10}<br>`
        res.innerHTML += `Notas de 5: ${nota5}<br>`
        res.innerHTML += `Notas de 2: ${nota2}<br>`
        res.innerHTML += `Valor creditado na conta é de ${creditado}`

    } else {
        alert('[ERRO] coloque um valor para sacar!')
    }
}