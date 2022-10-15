function verificar() {
    data = new Date()
    ano = data.getFullYear() // ANO ATUAL
    dataN = document.querySelector('input#tx1') // DATA DE ANO DE NASCIMENTO
    res = document.querySelector('div#apresentar_res') // RESULTADO DA APRESENTAÇÃO
    imgP = document.querySelector('img#imgt') // AREA DA IMAGEM
    if (dataN.value.length == 0 || dataN.value > ano) {
        alert('[ERRO] Insira uma data de nascimento valida!')
    } else {
        idade = ano - Number(dataN.value) // IDADE 
        fsex = document.getElementsByName('radsexo') // OÇÕES DE GENERO
        genero = ''
        if (fsex[0].checked) {
            genero = 'masculino'
        } else if (fsex[1].checked) {
            genero = 'feminino'
        } else {
            genero = 'indefinido'
        }
    }
    // TESTE DE IMAGEM REFERENTE AO GENERO ABAIXO
    res.innerText = `Você tem ${idade} anos de idade e seu sexo é ${genero}.`
    if (genero == 'masculino') {
        if (idade <= 10) {
            imgP.src = 'imagens/homemC.png'
        } else if (idade <= 19) {
            imgP.src = 'imagens/homemA.png'
        } else if (idade <= 59) {
            imgP.src = 'imagens/homemAD.png'
        } else {
            imgP.src = 'imagens/homemV.png'
        }
    } else if (genero == 'feminino') {
        if (idade <= 10) {
            imgP.src = 'imagens/mulherC.png'
        } else if (idade <= 19) {
            imgP.src = 'imagens/mulherA.png'
        } else if (idade <= 59) {
            imgP.src = 'imagens/mulherAD.png'
        } else {
            imgP.src = 'imagens/mulherV.png'
        }
    } else {
        imgP.src = ''
    }
}