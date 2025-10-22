import Link from "next/link";
import Image from "next/image";
import styles from "../../livros/livros.module.css";

const Genero = ({ genero }) => {
    return (
        <Link key={genero.id} href={`/destinos/${genero.id}`}>
            <section className={styles.section}>
                <Image alt={genero.nome} src={genero.caminhoImg} width={80} height={80}></Image>
                <p className={styles.genero_nome}> {genero.nome} </p>
            </section>
        </Link>
    )
};

export default Genero;