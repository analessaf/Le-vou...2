import styles from "./livros.module.css";
import Genero from "../components/Genero";

export default function Livros() {
    const generos = [
    { id: "fantasia", nome: "FANTASIA", caminhoImg: "/Livros/fantasia.png", link: "fantasia.html" },
    { id: "romance", nome: "ROMANCE", caminhoImg: "/Livros/romance.png", link: "fantasia.html" },
    { id: "terror", nome: "TERROR", caminhoImg: "/Livros/terror.png", link: "fantasia.html" },
    { id: "comedia", nome: "COMÉDIA", caminhoImg: "/Livros/fantasia.png", link: "fantasia.html" },
    { id: "suspense", nome: "SUSPENSE", caminhoImg: "/Livros/suspense.png", link: "fantasia.html" }
    ];
    return (
        <section className={styles.link}>
            {generos.map(genero => (
                <Genero key={genero.id} genero={genero} />
            ))}
        </section>
    )
}