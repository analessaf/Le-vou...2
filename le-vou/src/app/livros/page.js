import styles from "./livros.module.css";
import Genero from "../components/livro/Genero";
import Promocao from "../components/livro/Promocao";
import MaisProcurados from "../components/livro/MaisProcurados";

export default function Livros() {
    const generos = [
    { id: "fantasia", nome: "FANTASIA", caminhoImg: "/Livros/fantasia.png", link: "fantasia.html" },
    { id: "romance", nome: "ROMANCE", caminhoImg: "/Livros/romance.png", link: "fantasia.html" },
    { id: "terror", nome: "TERROR", caminhoImg: "/Livros/terror.png", link: "fantasia.html" },
    { id: "comedia", nome: "COMÉDIA", caminhoImg: "/Livros/fantasia.png", link: "fantasia.html" },
    { id: "suspense", nome: "SUSPENSE", caminhoImg: "/Livros/suspense.png", link: "fantasia.html" }
    ];
    const promocoes = [
        { id: "promo1", nome:"promo1.png", caminhoImg:"/Livros/promo1.png"},
        { id: "promo2", nome:"promo2.png", caminhoImg:"/Livros/promo2.png"},
        // { id: "promo3", nome:"promo3.png", caminhoImg:"/Livros/promo3.png"}
    ];
    const maisProcurados = [
        { id: "livro1", caminhoImg: "/Livros/mais_vend1.png", titulo: "Manual de Assassinato para Boas Garotas", autor: "Holy Jackson", avaliacao: "4.5" },
        { id: "livro2", caminhoImg: "/Livros/mais_vend2.png", titulo: "Six of Crows", autor: "Leigh Bardugo", avaliacao: "4.6" },
        { id: "livro3", caminhoImg: "/Livros/mais_vend3.png", titulo: "Todo Esse Tempo", autor: "Mikki Daughtry", avaliacao: "4.6" },
        { id: "livro4", caminhoImg: "/Livros/mais_vend4.png", titulo: "Trono de Vidro", autor: "Sarah J. Maas", avaliacao: "4.6" }
    ];

    return (
        <container className={styles.container}>
            <container className={styles.pai_livros}>
                <section className={styles.busca}>
                    <input className={styles.perg} type="search" placeholder=" Digite"></input>
                    <input className={styles.form} type="submit" value="Buscar"></input>
                </section>
                <h2 className={styles.h2}> Gêneros </h2>
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
            </container>
            <container className="mais_procurados">
                    <h2 className={styles.h2}> Mais Procurados </h2>
                    {maisProcurados.map(livro => (
                        <MaisProcurados key={livro.id} livro={livro}/>
                    ))}
            </container>
        </container>

    )
}