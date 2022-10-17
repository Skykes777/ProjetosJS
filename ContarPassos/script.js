function contar() {
    i = document.querySelector('input#Ti')
    f = document.querySelector('input#Tf')
    p = document.querySelector('input#Tp')
    res = document.querySelector('div#resultado')
    if (p.value.length == 0 || p.value <= 0 || i.value.length == 0 || f.value.length == 0) {
        alert('[ERRO] O valor de passos não pode ser menor ou igual a zero, e as caixas de entrada não podem ser vazias!')
    } else {
        // Valores abaixo sendo alterados para number
        i = Number(i.value)
        f = Number(f.value)
        p = Number(p.value)

        if (i < f) {  // Condição caso o início sejá menor que o final
            res.innerHTML = 'Contando...<br>'
            for (i; i<=f; i+=p) {
                res.innerHTML += `${i} 👉🏻 `
            }
            res.innerHTML += '🏁 FIM!!'
        } else if (i > f) {  // Condição caso o início sejá maior que o final
            res.innerHTML = 'Contando...<br>'
            for (i; i>=f; i-=p) {
                res.innerHTML += `${i} 👉🏻 `
            }
            res.innerHTML += '🏁 FIM!!'
        } else {
            alert('[ERRO]! O valor do início não pode ser igual ao final e vice-versa!')
        }
    }
}