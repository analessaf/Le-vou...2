import Image from 'next/image';

export default function Footer() {
    return (
        <footer>
            <section className="rodape">
                <h1> Lê-Vou </h1>
                <p> Não perca tempo procurando. <br /> Se o livro te escolheu, Lê-Vou! </p>
            </section>
            <section className="rodape">
                <h2> Contato para info </h2>
                <p> Rua dos Bobos, 00, Jardim dos <br /> Coitados, São Paulo - Brasil </p>
                <p> hello@LeVou.com.br </p>
            </section>
            <section className="rodape">
                <h2> Se Inscreva </h2>
                <p> Coloque seu email e receba as <br /> melhores promoções </p>
                <div className="email">
                    <Image className="ft_email" src="/Index/email.png" alt="Ícone de e-mail" width={20} height={20} />
                    <input className="formu" type="email" placeholder="Insira seu email" required name="email" />
                    <input className="form" type="submit" value="Inscrever" />
                </div>
            </section>
        </footer>
    );
}