const botoes = document.querySelectorAll('.btn');
botoes.forEach(botao => botao.addEventListener('click', filtraLivros));

function filtraLivros() {
    const botao = document.getElementById(this.id);
    let livrosFiltrados = botao.value == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(botao.value);
    exibeLivrosNaTela(livrosFiltrados);

    if (botao.value == "disponivel") {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        console.log(valorTotal);
        exibeValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function calcularValorTotalDeLivrosDisponiveis(livrosFiltrados) {
    return livrosFiltrados.reduce((acum, livro) => acum + livro.preco, 0).toFixed(2);
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibeValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    sectionTotalLivros.innerHTML += `
     <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
     </div>
     `;
}