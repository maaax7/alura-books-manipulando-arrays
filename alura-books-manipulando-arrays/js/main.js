let livros = [];

requestAPI();
async function requestAPI() {
    try {
        const request = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json');
        livros = await request.json();

        if (livros.error)
            throw Error(error);

        let livrosComDesconto = aplicarDesconto(livros);
        
        exibeLivrosNaTela(livrosComDesconto);
    }
    catch (error) {
        console.log(error);
    }
}