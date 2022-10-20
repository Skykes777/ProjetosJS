function ativar() {
    imgl = document.getElementById('imglampada')
    ops = document.getElementsByName('btLamp')
    if (ops[0].checked) {
        imgl.src = 'imagens/desligada.png'
    } else {
        imgl.src = 'imagens/ligada.png'
    }
}