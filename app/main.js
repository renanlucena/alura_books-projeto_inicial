let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

gestBuscarLivrosAPI();

async function gestBuscarLivrosAPI(){
    const resposta = await fetch(endpointAPI);
    livros = await resposta.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}

