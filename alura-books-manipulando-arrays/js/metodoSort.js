const botaoOrdenacao = document.getElementById('btnOrdenarPorPreco');

botaoOrdenacao.addEventListener('click', ordenaLivros);

function ordenaLivros() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco );

    exibeLivrosNaTela(livrosOrdenados);
}