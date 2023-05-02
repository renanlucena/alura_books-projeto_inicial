let btnOrdenar = document.getElementById('btnOrdenarPorPreco');
btnOrdenar.addEventListener ('click', ordenarLivrosPreco );

function ordenarLivrosPreco(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco );
    exibirOsLivrosNaTela(livrosOrdenados);
}