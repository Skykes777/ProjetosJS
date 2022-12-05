var fproduto = document.getElementById('fent');
var fpreço = document.getElementById('fnum');
var indice = document.getElementById('Findice'); // indice
var produtoF = document.getElementById('Fproduto'); // nome do produto
var quantidade = document.getElementById('Fquantidade'); // quantidade
var preçoF = document.getElementById('Fpreço'); // preço
var res = document.getElementById('resposta');
var anome = document.getElementById('np'); // produto
var qprod = document.getElementById('qt'); // quantidade
var vprec = document.getElementById('pr'); // preço
var resPÇ = document.getElementById('resulpreço'); // apresentação do valor a pagar
var quantidadeV = document.getElementById('quantPV'); // quantidade de produtos vendidos no caixa
var quantidadeD = document.getElementById('quantDC'); // quantidade de dinheiro no caixa

var produtos = [];
var totalVendas = 0;
var totalDinheiro = 0;

function adicionar() {
    if ((fproduto.value).trim().length == 0) {
        alert('[ERRO] coloque o nome do produto!');
        fproduto.focus();
    } else if (fpreço.value.length == 0 || Number(fpreço.value) < 0) {
        alert('[ERRO] preço do produto incorreto ou não preenchido!');
        fpreço.focus();
    } else {
        var produto = (fproduto.value).trim().toLowerCase();
        var preço = Number(fpreço.value);
        /* 
        Teste para verificar se o produto já está na lista de produtos
                          indice 0      indice 1    indice 2
        produtos = [["Nome do produto", quantidade, preço], [...], [...]]
        */
        for (i in produtos) {
            if (produtos[i][0] == produto) {
                produtos[i][1]++;
                break;
            }
        }

        var NomeProdutos = []; // lista para guardar o nome de todos os produtos para fazer testes
        for (i in produtos) {
            NomeProdutos.push(produtos[i][0]);
        }
        // teste adicionar produto novo caso não existente na lista
        if (NomeProdutos.indexOf(produto) == -1) {
            produtos.push([produto, 1, preço]);
        }

        // apresentação dos produtos adicionados na lista
        indice.innerHTML = '<br>';
        produtoF.innerHTML = '<br>';
        quantidade.innerHTML = '<br>';
        preçoF.innerHTML = '<br>';

        // apresentação do indice
        for (n in produtos) {
            indice.innerHTML += `${n}<br>`;
        }
        // apresentação do produto
        for (n in produtos) {
            produtoF.innerHTML += `${produtos[n][0]}<br>`;
        }
        // apresentação da quantidade
        for (n in produtos) {
            quantidade.innerHTML += `${produtos[n][1]}<br>`;
        }
        // apresentação do preço
        for (n in produtos) {
            preçoF.innerHTML += `${produtos[n][2].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}<br>`;
        }
        fproduto.value = '';
        fpreço.value = '';
        anome.innerHTML = '';
        qprod.innerHTML = '';
        vprec.innerHTML = '';
        resPÇ.innerHTML = '';
    }
}

function finalizar() {
    if (produtos.length == 0) {
        alert('[ERRO] Adicione produtos para finalizar a compra!');
    } else {
        indice.innerHTML = '';
        produtoF.innerHTML = '';
        quantidade.innerHTML = '';
        preçoF.innerHTML = '';
        anome.innerHTML = '';
        qprod.innerHTML = '';
        vprec.innerHTML = '';
        resPÇ.innerHTML = '';
        
        var totalPreço = 0;
        for (v in produtos) {
            totalPreço += produtos[v][2];
        }
        // apresentação do produto
        for (n in produtos) {
            anome.innerHTML += `${produtos[n][0]}<br>`;
        }
        // apresentação da quantidade
        for (n in produtos) {
            qprod.innerHTML += `${produtos[n][1]}<br>`;
        }
        // apresentação do preço
        for (n in produtos) {
            vprec.innerHTML += `${produtos[n][2].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }<br>`;
        }
        resPÇ.innerHTML = `Total: ${totalPreço.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }`;

        totalVendas = totalVendas+=produtos.length;
        totalDinheiro = totalDinheiro+=totalPreço;
        quantidadeV.innerText = `${totalVendas}`;
        quantidadeD.innerHTML = `${totalDinheiro.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }`;
        produtos = [];
    }
}