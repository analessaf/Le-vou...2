import Image from "next/image";
import styles from "../../livros/livros.module.css";

export default function MaisProcurados({ livro }) {
 return (
    <section className={styles.livro_mais_vendido}>
        <Image alt={livro.titulo} src={livro.caminhoImg} width={140} height={150}></Image>
        <div className={styles.sobre_livro}>
            <p> {livro.titulo} </p>
            <h6> - {livro.autor} </h6> 
            <section className={styles.avaliacao}>
              <Image alt="Avaliação" src="/Livros/estrela.png" width={15} height={15}></Image>
              <p> {livro.avaliacao} </p>
            </section>
        </div>
    </section>
 )
}
      