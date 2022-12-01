var corSite = document.getElementById('fcor');
corSite.toLowerCase()

function confirmar() {
    switch (corSite.value.toLowerCase().trim()) {
        case 'vermelho':
            document.body.style.background = 'red';
            break;
        case 'azul':
            document.body.style.background = 'blue';
            break;
        case 'verde':
            document.body.style.background = 'green';
            break;
        case 'roxo':
            document.body.style.background = 'purple';
            break;
        case 'laranja':
            document.body.style.background = 'orange';
            break;
        case 'preto':
            document.body.style.background = 'black';
            break;
        case 'amarelo':
            document.body.style.background = 'yellow';
            break;
        case 'rosa':
            document.body.style.background = 'pink';
            break;
        default:
            alert('[ERRO] Cor não identificada ou valor incorreto')
            corSite.value = '';
            document.body.style.background = '#1892c5c7';
            break;
    }
}