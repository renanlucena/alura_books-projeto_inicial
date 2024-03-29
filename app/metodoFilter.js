const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria === 'disponivel' ? filtraPorDisponibilidade() :filtraPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria === 'disponivel'){
        const valorTotal = calculatValorLivrosDisponiveis(livrosFiltrados);
        exibirValorLivrosDisponiveis(valorTotal);
    }
}

function filtraPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

function filtraPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorLivrosDisponiveis(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}