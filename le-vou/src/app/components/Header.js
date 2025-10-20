export default function Header(){
    return(
        <nav id="site-menu" aria-expanded="false"> 
            <button className="menu-toggle" aria-label="Abrir menu">
                <img className="carrinho" src="menu.png" alt="Menu" />
            </button>
            <h1 className="nome-site"> Lê-Vou </h1>

            <a className="ativo" href="index.html">Início</a>
            <a href="livros.html">Livros</a>
            <a href="meusLivros.html">Meus Livros</a>
            <a href="conta.html">Conta</a>
            <a className="botao_carrinho" href="carrinho.html">
                <img className="carrinho" src="carrinho.png" alt="Carrinho" />
            </a>
        </nav>
    )
}