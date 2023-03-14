const sectionLivros = document.getElementById('livros');
const sectionTotalLivros = document.getElementById('valor_total_livros_disponiveis');

function exibeLivrosNaTela(livros) {
    while (sectionLivros.firstChild)
        sectionLivros.removeChild(sectionLivros.firstChild);

    livros.forEach(livro => {
        sectionLivros.appendChild(criaElementoLivro(livro));
    });
}

function criaElementoLivro(livroJson) {
    sectionTotalLivros.innerHTML = '';
    //crio a primeira div e atribuo a classe livro
    let divPrincipal = document.createElement('div');
    divPrincipal.classList.add('livro');

    //cria elemento imagem com a classe livro__imagens
    let imagem = document.createElement('img');
    imagem.classList.add('livro__imagens');

    if (livroJson.quantidade <= 0)
        imagem.classList.add('indisponivel');

    imagem.alt = livroJson.alt;
    imagem.src = livroJson.imagem;
    divPrincipal.appendChild(imagem);

    //cria elemento titulo (h2) com a classe livro__titulo
    let titulo = document.createElement('h2');
    titulo.classList.add('livro__titulo');
    titulo.innerHTML = livroJson.titulo;
    divPrincipal.appendChild(titulo);

    //cria elemento descricao (p) com a classe livro__descricao
    let descricao = document.createElement('p');
    descricao.classList.add('livro__descricao');
    descricao.innerHTML = livroJson.autor;
    divPrincipal.appendChild(descricao);

    //cria elemento preco (p) com a classe livro__preco e id preco 
    let preco = document.createElement('p');
    preco.classList.add('livro__preco');
    preco.id = 'preco';
    preco.innerHTML = 'R$ ' + livroJson.preco.toFixed(2);
    divPrincipal.appendChild(preco);

    //cria elemento span com a classe tag
    let span = document.createElement('span');
    span.classList.add('tag');
    span.innerHTML = livroJson.categoria;

    //cria elemento div com a classe tags e inclui elemento span
    let divTag = document.createElement('div')
    divTag.classList.add('tags');
    divTag.appendChild(span);

    divPrincipal.appendChild(divTag);

    return divPrincipal;
}