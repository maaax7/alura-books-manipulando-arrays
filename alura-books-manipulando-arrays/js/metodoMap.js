function aplicarDesconto(livros) {
    const desconto = 0.3;

    let retorno = livros.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    });

    return retorno;
}