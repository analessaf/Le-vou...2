# Lê-Vou..2

## Integrantes: 

Ana Lessa Ferreira - RA: 10732666

Artur Guarnieri do Amaral Rodrigues - RA: 10736207

Giovanna de Carvalho Almeida - RA: 10736132

Júlia Oliveira Longhi - RA: 10736801


# Processo de Ideação

O projeto "Lê-Vou!" é a criação de uma página web mobile para revenda de livros usados, semelhante a um sebo virtual. A ideia central é estabelecer uma plataforma que conecte, de maneira intuitiva e segura, pessoas que desejam desapegar de livros que já leram com outros que buscam novas histórias e conhecimento a um preço acessível.

A concepção do projeto se mostrou interessante por abordar uma necessidade real e não completamente atendida pelo mercado. Percebemos que muitas pessoas enfrentam dificuldades para encontrar livros em bom estado e com preço justo, além de terem o desafio de encontrar um local para vender ou doar os livros que já não utilizam. As alternativas existentes, como sebos físicos, nem sempre estão acessíveis ou têm o acervo desejado. E as lojas virtuais genéricas não oferecem um ambiente focado na comunidade de leitores, o que acaba gerando problemas de confiança em seus produtos para os clientes.

Decidimos criar esse projeto justamente para solucionar essas questões. Entendemos que os usuários buscam, além da economia, a praticidade de um processo de compra e venda simplificado, a segurança de saber a real condição do livro, e a satisfação de contribuir para um consumo sustentável. O projeto se justifica como a resposta a esses desejos, oferecendo uma experiência otimizada e um espaço dedicado para a comunidade de leitores.

# Imagens do Protótipo

<img width="1440" height="2048" alt="Frame 21" src="https://github.com/user-attachments/assets/84ebe8b5-ff57-4b96-bf68-ede4f1c78369" />
<img width="1440" height="1024" alt="Wireframe - 14" src="https://github.com/user-attachments/assets/46a20f7f-3c67-4cdf-9419-8aafb60e50a5" />
<img width="1440" height="1024" alt="Wireframe - 10" src="https://github.com/user-attachments/assets/edaeae44-c36d-44ad-b04b-8e7a5d4c7688" />
<img width="1440" height="1024" alt="Cadastro" src="https://github.com/user-attachments/assets/6f0693d1-aef6-4d0d-b5d0-72404fff56f6" />
<img width="1536" height="1194" alt="Perfil (1)" src="https://github.com/user-attachments/assets/4762f1b9-dc55-41d5-adea-7abe2a19c745" />
<img width="1536" height="2259" alt="Carrinho (1)" src="https://github.com/user-attachments/assets/7270db0d-d6df-4c12-bbaa-445b997bd105" />


# Caráter Extensionista

Este projeto tem caráter extensionista, por atender uma demanda da comunidade, por meio do desenvolvimento de um ambiente online, que facilitará a conexão entre pessoas que buscam novos livros e pessoas que desejam desapegar de seus livros. Promovendo a economia circular, o retorno do livro para a comunidade traz diversos benefícios econômicos e ecológicos.

# Vantagem da migração para componentes ReactJS

A utilização do React (utilizando o framework Next.js) para construir o "Lê-Vou" foi uma escolha de arquitetura fundamental para o projeto. Inicialmente, o site foi prototipado em HTML, CSS e JavaScript puros, mas essa abordagem trazia grandes desafios de manutenção e escalabilidade. A migração para uma arquitetura baseada em Componentes resolveu esses problemas.

### 1. Reutilização e Manutenção Centralizada
No HTML estático, elementos que se repetem em todas as páginas, como o menu de navegação e o rodapé, precisavam ser copiados e colados em todos os arquivos (index.html, livros.html, conta.html, etc.).

Com React criamos o componente Header.js e Footer.js uma única vez. Ao inseri-lo no layout.js do Next.js, ele é automaticamente aplicado a todas as páginas do site. Agora, se eu precisar adicionar um novo link no menu, eu edito apenas um arquivo, e a mudança se reflete em todo o "Lê-Vou" instantaneamente.

### 2. Interatividade com "Estado"
Componentes React possuem uma "memória" interna chamada Estado (useState), o que torna a criação de interfaces interativas muito mais limpa.

Com React na página /conta, eu implementei a funcionalidade de "Editar Perfil". Em vez de escrever um código complexo em JavaScript para selecionar elementos do DOM, criar inputs e substituir o HTML, simplesmente utilizamos um estado isEditing. O componente decide o que mostrar:

Se isEditing for false, ele renderiza o texto (`<h2>{nome}</h2>`).

Se isEditing for true, ele renderiza o formulário (`<input value={nome}... />`).

Apenas mudamos o estado, e o React cuida de redesenhar a interface.

# Rotas Dinâmicas no Next.js

## Arquivo: src/app/genero/[nome]/page.js

Utilizamos o sistema de rotas dinâmicas do Next.js para criar páginas de gêneros literários. A estrutura de pastas `genero/[nome]/` permite que uma única implementação de página atenda múltiplos gêneros sem duplicação de código.

### Como funciona

A pasta `[nome]` entre colchetes indica um segmento de rota dinâmico. Isso significa que qualquer URL no formato `/genero/fantasia`, `/genero/romance`, `/genero/terror`, etc., será capturada por esta mesma página.

```javascript
const params = useParams();
const nomeGenero = params.nome;
```

O hook `useParams()` do Next.js extrai o valor dinâmico da URL. Por exemplo:
- URL `/genero/fantasia` → `nomeGenero = "fantasia"`
- URL `/genero/suspense` → `nomeGenero = "suspense"`

### Mapeamento de conteúdo por gênero

```javascript
const generoInfo = {
  fantasia: {
    nome: "FANTASIA",
    descricao: "Mundos mágicos e aventuras extraordinárias.",
  },
  romance: {
    nome: "ROMANCE",
    descricao: "Histórias de amor que emocionam.",
  },
  terror: {
    nome: "TERROR",
    descricao: "Suspense e mistérios assustadores.",
  },
  comedia: {
    nome: "COMÉDIA",
    descricao: "Diversão e bom humor garantidos.",
  },
  suspense: {
    nome: "SUSPENSE",
    descricao: "Mistérios intrigantes e reviravoltas.",
  },
};
```

O objeto `generoInfo` mapeia cada gênero ao seu título e descrição correspondentes. A busca é feita com:

```javascript
const info = generoInfo[nomeGenero] || {
  nome: nomeGenero.toUpperCase(),
  descricao: "Explore este gênero literário.",
};
```

Se o gênero não existir no mapeamento, exibe o nome da URL em maiúsculas e uma descrição genérica.

# Responsividade — Media Queries

## Arquivo: src/app/globals.css

```css
@media (max-width: 768px) {
    .nome-site {
        display: none;
    }

    nav {
        margin: 0;
        padding: 10px 14px;
        position: sticky;
        top: 0;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .menu-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        order: 0;
    }

    .botao_carrinho {
        order: 2;
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    nav > a:not(.botao_carrinho) {
        display: none;
    }

    nav[aria-expanded="true"] > a:not(.botao_carrinho) {
        display: flex;
        width: 100%;
        justify-content: flex-start;
        padding: 12px 4px;
        margin: 0;
    }

    nav[aria-expanded="true"]::after {
        content: "";
        display: block;
        width: 100%;
    }

    #site-menu {
        position: relative;
        flex-wrap: wrap;
    }

    #site-menu[aria-expanded="true"] > a:not(.botao_carrinho) {
        background: #fff;
        border-top: 1px solid rgba(0, 0, 0, 0.06);
    }

    #site-menu[aria-expanded="true"] .nome-site {
        display: block;
        position: absolute;
        top: 10px;
        right: 14px;

    }


    footer {
        flex-direction: column;
        gap: 20px;
        padding: 24px;
    }

    .email {
        max-width: 250px;
    }
}
```

**Explicação:** Oculta o nome do site; altera a barra de navegação para sticky com padding reduzido e sombra; exibe o botão de menu toggle e reordena os elementos do nav utilizando flexbox order; oculta links de navegação por padrão e exibe-os ao expandir o menu (via aria-expanded), aplicando bordas e background; posiciona o nome do site de forma absoluta quando o menu está expandido; converte o rodapé de layout horizontal para coluna vertical com gap de 20px.

## Arquivo: src/app/page.module.css

```css
@media (max-width: 768px) {
    .article {
        margin: 16px;
        padding: 16px;
        align-items: center;
        gap: 12px;
    }

    .promocao {
        width: min(100%, 360px);
        height: auto;
    }

    .livros {
        width: min(100%, 260px);
        height: auto;
    }

    .cupom {
        margin-left: 0;
        width: 100%;
        max-width: 320px;
        font-size: 18px;
        height: 42px;
    }

    .h2 {
        margin: 16px;
    }
}
```

**Explicação:** Reduz margens e padding do article e centraliza seus itens; limita a largura da imagem de promoção a 360px e dos livros a 260px, permitindo que ambas se ajustem responsivamente com height auto; remove margem esquerda do cupom, definindo largura de 100% com max-width de 320px e ajustando font-size e altura; reduz margem do heading h2 para 16px.

## Arquivo: src/app/page.module.css


```css
@media (max-width: 768px) {
    .article {
        margin: 16px;
        padding: 16px;
        align-items: center;
        gap: 12px;
    }

    .promocao {
        width: min(100%, 360px);
        height: auto;
    }

    .livros {
        width: min(100%, 260px);
        height: auto;
    }

    .cupom {
        margin-left: 0;
        width: 100%;
        max-width: 320px;
        font-size: 18px;
        height: 42px;
    }

    .h2 {
        margin: 16px;
    }
}
```

**Explicação:** Reduz margens e padding do article e centraliza seus itens; limita a largura da imagem de promoção a 360px e dos livros a 260px, permitindo que ambas se ajustem responsivamente com height auto; remove margem esquerda do cupom, definindo largura de 100% com max-width de 320px e ajustando font-size e altura; reduz margem do heading h2 para 16px.

## Arquivo: src/app/livros/livros.module.css

```css
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: stretch;
    }

    .pai_livros {
        width: 100%;
    }

    .h2 {
        margin: 16px;
    }

    .busca {
        width: auto;
        margin: 16px;
        padding: 8px;
    }

    .perg {
        width: 100%;
        flex: 1 1 auto;
    }

    .form {
        width: auto;
        margin-left: 8px;
        padding: 10px 16px;
    }
}
```

**Explicação:** Converte o container de layout horizontal (flex-direction row) para coluna vertical, forçando o empilhamento dos elementos filhos; define a seção pai_livros com 100% de largura; reduz margens e paddings da busca e do formulário para adequar à viewport estreita; o campo de pesquisa (.perg) ocupa 100% da largura com flex dinâmico.

## Arquivo: src/app/genero/[nome]/genero.module.css

```css
@media (max-width: 768px) {
    .container {
        padding: 15px;
    }

    .header {
        margin-bottom: 30px;
    }

    .titulo {
        font-size: 1.5rem;
    }

    .descricao {
        font-size: 1rem;
    }

    .livros_grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 20px;
        margin: 0 20px;
    }

    .livro_img {
        width: 120px;
        height: 180px;
    }

    .livro_titulo {
        font-size: 0.85rem;
        min-height: 35px;
    }

    .livro_preco {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 10px;
    }

    .titulo {
        font-size: 1.3rem;
    }

    .descricao {
        font-size: 0.9rem;
    }

    .livros_grid {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 15px;
        margin: 0 15px;
    }

    .livro_img {
        width: 100px;
        height: 150px;
    }

    .livro_titulo {
        font-size: 0.8rem;
        min-height: 30px;
    }

    .livro_preco {
        font-size: 0.85rem;
    }
}
```

**Explicação:** Reduz padding do container e font-sizes dos títulos e descrições; redefine o grid de livros para colunas com minWidth de 140px, gap de 20px e margens laterais; reduz dimensões das imagens (120x180px) e tamanhos de fonte dos textos. Para 480px, aplica redução adicional no padding, font-sizes e dimensões do grid (minWidth 120px, gap 15px); imagens ainda menores (100x150px) e font-sizes reduzidos proporcionalmente para melhor legibilidade em telas muito estreitas.

## Arquivo: src/app/meusLivros/meusLivros.module.css

```css
@media (max-width: 768px) {
  .h2 {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 1.2rem;
  }

  .venda {
    flex-direction: column;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 20px;
    height: auto;
    gap: 15px;
  }

  .cadastro {
    width: 100%;
    max-width: 250px;
  }

  .vendidos {
    margin-right: 20px;
    margin-left: 20px;
    justify-content: center;
  }

  .livro_vendido {
    margin-left: 0;
    margin-top: 30px;
    height: auto;
    width: 100%;
    max-width: 350px;
  }

  .venda_livro {
    width: 100px;
    margin-right: 15px;
    object-fit: contain;
    height: auto;
  }

  .sobre_livro p {
    margin-top: 10px;
    font-size: 0.9rem;
  }

  .sobre_livro h4 {
    font-size: 1rem;
  }

  .sobre_livro h6 {
    font-size: 0.85rem;
  }

  .estado h5 {
    padding: 8px 15px;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .h2 {
    font-size: 1rem;
    margin-left: 15px;
    margin-right: 15px;
  }

  .cadastro {
    font-size: 0.9rem;
    padding: 8px;
  }

  .vendidos {
    margin-right: 10px;
    margin-left: 10px;
  }

  .livro_vendido {
    max-width: 300px;
  }

  .venda_livro {
    width: 80px;
    object-fit: contain;
    height: auto;
  }

  .sobre_livro p {
    font-size: 0.8rem;
  }

  .sobre_livro h4 {
    font-size: 0.9rem;
  }

  .sobre_livro h6 {
    font-size: 0.75rem;
  }

  .estado h5 {
    padding: 6px 12px;
    font-size: 0.75rem;
  }

  .popup_conteudo {
    width: 98%;
    padding: 10px;
  }

  .popup_conteudo h2 {
    font-size: 1.1rem;
    margin-left: 5px;
  }

  .ft_livro img {
    width: 120px;
  }

  .f {
    padding: 10px 12px;
    font-size: 0.85rem;
    gap: 8px;
  }

  .formu {
    font-size: 0.85rem;
    padding: 10px 12px;
  }

  .card {
    width: 95%;
    max-width: 300px;
  }
  
  .f input[type="checkbox"] {
    margin: 3px 5px 3px 0;
  }
}
```

**Explicação:** Converte a seção .venda de horizontal para coluna vertical com gap de 15px; reduz margens e font-sizes de headings; limita o cadastro a max-width 250px; centraliza a seção vendidos e ajusta livros vendidos para 100% de largura (max-width 350px); reduz tamanho da imagem do livro para 100px com object-fit contain. Para 480px, aplica redução adicional de margens, paddings e font-sizes; diminui a imagem do livro para 80px; ajusta popup_conteudo para 98% de largura; reduz dimensões do card a max-width 300px e ajusta espaçamento de checkboxes.

## Arquivo: src/app/conta/conta.module.css

```css
@media (max-width: 768px) {
    .conta {
        max-width: 100%;
        padding: 0 16px;
        margin-top: 24px;
    }

    .perfil_decima {
        margin-bottom: 20px;
        align-items: center;
    }

    .editar_perfil {
        width: auto;
        padding: 8px 14px;
        font-size: 14px;
    }

    .perfil_pai {
        flex-direction: column;
        align-items: center;
        gap: 16px;
        text-align: center;
    }

    .avatar {
        width: 84px;
        height: 84px;
    }

    .perfil_info {
        padding: 0;
        align-items: center;
    }
    .perfil_info h2 {
        font-size: 18px;
    }
    .perfil_info p {
        font-size: 13px;
    }

    .status {
        flex-direction: column;
        gap: 12px;
        margin-bottom: 20px;
    }
    .status1 {
        padding: 16px;
    }
}
```

**Explicação:** Expande .conta para max-width 100% e ajusta padding horizontal a 16px; converte .perfil_pai de layout horizontal para coluna vertical com alinhamento centralizado e gap de 16px, centralizando também o texto; reduz dimensões do avatar para 84x84px; diminui font-sizes dos headings e parágrafos de perfil; transforma .status de layout horizontal para coluna com gap de 12px, empilhando verticalmente os elementos de status.

## Arquivo: src/app/carrinho/carrinho.module.css

```css
@media (max-width: 768px) {
    .pai_carrinho {
        flex-direction: column;
        margin-left: 20px;
        margin-right: 20px;
        gap: 20px;
        align-items: center;
    }

    .titulo_carrinho {
        flex-direction: column;
        margin-right: 20px;
        gap: 10px;
    }

    .titulo_carrinho .h2:last-child {
        display: none;
    }

    .h2 {
        margin-left: 20px;
        margin-right: 20px;
        font-size: 1.2rem;
    }

    .compras {
        width: 100%;
    }

    .livro_carrinho {
        height: auto;
        margin-left: 0;
        margin-right: 0;
        flex-direction: column;
        align-items: center;
        padding: 15px;
    }

    .img_livro_carrinho {
        width: 120px;
        margin-bottom: 15px;
        object-fit: contain;
        height: auto;
    }

    .sobre_livro_carrinho {
        width: 100%;
        flex-direction: column;
        margin-left: 0;
        gap: 10px;
        text-align: center;
    }

    .carrinho_autor {
        width: 100%;
    }

    .carrinho_autor p {
        font-size: 0.95rem;
    }
}

@media (max-width: 480px) {
    .h2 {
        font-size: 1rem;
        margin-left: 15px;
        margin-right: 15px;
    }

    .pai_carrinho {
        margin-left: 10px;
        margin-right: 10px;
    }

    .livro_carrinho {
        padding: 10px;
    }

    .img_livro_carrinho {
        width: 100px;
    }

    .carrinho_autor p {
        font-size: 0.85rem;
    }

    .carrinho_autor h6 {
        font-size: 0.75rem;
    }

    .preco p {
        font-size: 1rem;
    }

    .caixa_resumo {
        width: 95%;
        padding: 15px;
        padding-left: 20px;
        font-size: 0.9rem;
    }

    .formu_carrinho {
        font-size: 0.85rem;
        padding: 8px;
    }
}
```

**Explicação:** Converte .pai_carrinho de horizontal para coluna vertical com gap de 20px e alinhamento centralizado; oculta o segundo h2 no titulo_carrinho; transforma .livro_carrinho em layout vertical com imagem de 120px (object-fit contain) e centraliza o conteúdo; define .sobre_livro_carrinho como coluna com 100% de largura e text-align center; define .compras com 100% de largura. Para 480px, reduz margens laterais, padding e font-sizes; diminui imagem do carrinho para 100px; ajusta caixa_resumo para 95% de largura com padding reduzido e font-size menor; reduz tamanhos de fonte de textos e formulários.

## Arquivo: src/app/components/index/recomendados.module.css

```css
@media (max-width: 768px) {
  .card {
    width: calc(50% - 4px) !important;
    max-width: calc(50% - 4px);
    flex: 0 0 calc(50% - 4px);
    margin: 0;
    padding: 8px 4px;
    box-sizing: border-box;
  }

  .capa {
    width: 100% !important;
    height: auto !important;
    margin: 4px auto 8px;
    max-width: 100%;
  }

  .titulo {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .autor {
    font-size: 0.75rem;
  }

  .preco {
    font-size: 0.85rem;
  }
}
```

**Explicação:** Redefine cada .card para ocupar exatamente 50% da largura do container (subtraindo 4px para gaps), forçando um layout de 2 colunas; utiliza flex: 0 0 calc(50% - 4px) para evitar que o card cresça ou encolha além do definido; define .capa com 100% de largura e height auto, permitindo que a imagem se ajuste proporcionalmente; reduz font-sizes de título, autor e preço para melhor legibilidade em telas estreitas.

## Estruturas comuns utilizadas em grande parte do código

```javascript
               <section className={styles.link}>
                   {generos.map(genero => (
                       <Genero key={genero.id} genero={genero} />
                   ))}
               </section>
               <section className={styles.conj_promo}>
                   {promocoes.map(promo => (
                       <Promocao key={promo.id} promo={promo} />
                   ))}
               </section>
               <h2 className={styles.h2}> Livros Populares </h2>
               <container className={styles.pai_livros_pop}>
                   <container className={styles.populares}>
                       <section className={styles.livro_pop}>
                           {livros.slice(0, 8).map(livro => (
                               <Populares key={livro.key} genero={livro} />
                           ))}
                       </section>
                   </container>
                   <section>
                       <Image src="/Livros/promo3.png" alt="promo" width={200} height={383}></Image>
                   </section>
               </container>
```

No trecho generos.map, o código pega a lista completa de gêneros (`generos`) e constrói um componente de link clicável (`<Genero />`) para cada um deles, os exibindo de maneira organizada dentro de uma seção.

`.map(...)`: é um método para iterar sobre cada item de um array, ou seja, para cada item dentro do array `generos`, ele executa a função que está dentro dos parênteses.

Os outros trechos desse código possuem uma estrutura similar, com o mesmo propósito.

No trecho livros.slice(0, 8)..., o código seleciona apenas os 8 primeiros livros da lista completa (`livros.slice(0, 8)`) e renderiza um componente visual(`<Populares />`) para cada um desses 8 livros dentro da seção. 

`.slice(0, 8)`: é um método que cria um novo array contendo apenas uma parte do array original. (`0`: indica o índice inicial, `8`: indica o índice final)


### Rota dinâmica utilizada em Gêneros:

```javascript
const Genero = ({ genero }) => {
   return (
       <Link key={genero.id} href={`/genero/${genero.id}`}>
           <section className={styles.section}>
               <Image alt={genero.nome} src={genero.caminhoImg} width={80} height={80}></Image>
               <p className={styles.genero_nome}> {genero.nome} </p>
           </section>
       </Link>
   )
};
export default Genero;
```
`<Link>`: é um componente especial do Next.js usado para navegação no lado do cliente.

`href={/genero/${genero.id}}`: é o ponto chave da rota dinâmica, construindo um caminho de URL usando o valor do id específico do objeto `genero`.

O componente `Genero` é um bloco de interface reutilizável. Ele recebe informações de um único gênero e o transforma em um botão de navegação que leva o usuário a uma página detalhada sobre aquele gênero específico.


## Uso de API de livros:

```javascript
const [livros, setLivros] = useState([])


useEffect(() => {
   fetch("https://openlibrary.org/people/julialonghi/lists/OL313056L/editions.json")
           .then((res) => res.json())
           .then((dado) => {
               setLivros(dado.entries)
           })
   }, [])
```

O código declara uma variável vazia para guardar livros (`livros`) e, assim que a página carrega, ele busca a lista de livros na internet e salva essa lista na variável, usando (`setLivros`)

`fetch(...)`: Inicia a busca dos dados da lista de livros no endereço da Open Library.

1º `.then()` → Converte os dados brutos recebidos para o formato JSON.

2º `.then()` → Salva a lista de livros (`dado.entries`) no estado (`setLivros`), o que faz o React atualizar a tela.


# Lógica Reutilizável: A Função shuffleArray
Durante o desenvolvimento do "Lê-Vou", notamos que certas lógicas, como "embaralhar uma lista", seriam necessárias em várias páginas (como na "Home" e em "Meus Livros"). Em vez de copiar e colar o mesmo código em vários arquivos, criamos uma pasta src/utils para centralizar essa função fazendo ela se tornar reutilizável.

## A Função Utilitária (src/utils/arrayHelpers.js)
Este arquivo contém a lógica de embaralhamento. Ele usa o algoritmo Fisher-Yates, que é uma forma eficiente de garantir uma aleatoriedade real na lista.
```
// src/utils/arrayHelpers.js
export function shuffleArray(array) {
  // Copia o array para não modificar o original
  let newArray = [...array]; 
  // Loop de trás para frente
  for (let i = newArray.length - 1; i > 0; i--) {
    // Escolhe um índice aleatório (j)
    const j = Math.floor(Math.random() * (i + 1));
    
    // Troca os elementos de lugar
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  // Retorna o array embaralhado
  return newArray;
}
```
## Aplicando a Função na Página (src/app/page.js)
Na página Home, seguimos um processo simples para usar essa função e garantir que os livros sempre apareçam em ordem aleatória. O processo é:

######import: "puxamos" a função shuffleArray para dentro do componente.
######useEffect: A API busca as listas de livros.
######Assim que os dados chegam (dentro do .then()), chamamos shuffleArray() para embaralhar a lista antes de salvá-la.
######setLivros...: Salvamos a lista já embaralhada no estado do React.

```JavaScript
// src/app/page.js

"use client";
import { useState, useEffect } from "react";
// ... (outros imports de componentes) ...

// 1. A função é importada do nosso arquivo utilitário
// (O caminho sobe 2 níveis para sair de 'app' e entrar em 'utils')
import { shuffleArray } from "../../utils/arrayHelpers"; 

export default function Home() {
  
  const [livrosPromocao, setLivrosPromocao] = useState([]);
  const [livrosRecomendados, setLivrosRecomendados] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. useEffect busca os dados
  useEffect(() => {
    const fetchPromocoes = fetch("...url_promocoes...")
      .then((res) => res.json());

    const fetchRecomendados = fetch("...url_recomendados...")
      .then((res) => res.json());

    Promise.all([fetchPromocoes, fetchRecomendados])
      .then(([dadoPromocao, dadoRecomendado]) => {
        
        // Verificação de segurança caso a API falhe
        const listaPromocoes = (dadoPromocao && Array.isArray(dadoPromocao.entries)) 
          ? dadoPromocao.entries : [];
        const listaRecomendados = (dadoRecomendado && Array.isArray(dadoRecomendado.entries)) 
          ? dadoRecomendado.entries : [];

        // 3. A função é chamada aqui para embaralhar os dados
        const promocoesEmbaralhadas = shuffleArray(listaPromocoes);
        const recomendadosEmbaralhados = shuffleArray(listaRecomendados);

        // 4. Salvamos a lista JÁ EMBARALHADA no estado
        setLivrosPromocao(promocoesEmbaralhadas);
        setLivrosRecomendados(recomendadosEmbaralhados);
        
        setLoading(false);
      })
      .catch((error) => {
        console.error("FALHA GERAL NO FETCH:", error);
        setLoading(false);
      });
  }, []); 

  // ... (resto do seu return JSX) ...
}```
