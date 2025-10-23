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

### 2. Interatividade Poderosa com "Estado"
Componentes React possuem uma "memória" interna chamada Estado (useState), o que torna a criação de interfaces interativas muito mais limpa.

Com React na página /conta, eu implementei a funcionalidade de "Editar Perfil". Em vez de escrever um código complexo em JavaScript para selecionar elementos do DOM, criar inputs e substituir o HTML, simplesmente utilizamos um estado isEditing. O componente decide o que mostrar:

Se isEditing for false, ele renderiza o texto (`<h2>{nome}</h2>`).

Se isEditing for true, ele renderiza o formulário (`<input value={nome}... />`).

Apenas mudamos o estado, e o React cuida de redesenhar a interface.
