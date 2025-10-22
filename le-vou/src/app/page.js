import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <article className={styles.article}>
        <section className={styles.sc_promo}>
          <Image className={styles.promocao} src="/Index/promocao.png" alt="Promoção" width={450} height={127} />
          <button className={styles.cupom}> <Link href="#"> Use o cupom </Link></button>
        </section>
        <Image className={styles.livros} src="/Index/livros.png" alt="Diversos livros" width={300} height={200} />
      </article>

      <h2 className={styles.h2}> Promoções </h2>
      <section className={styles.livro_promo}></section>

      <article className={styles.recomendados}>
        <h2 className={styles.h2}>Recomendados</h2>
       {/* <section className={styles.grid-recomendados}></section> */}
      </article>
    </>
  );
}