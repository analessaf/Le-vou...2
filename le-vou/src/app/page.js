import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <article className={styles.article}>
        <section className={styles.sc_promo}>
          <img className={styles.promocao} src="/promocao.png" alt="Promoção" />
          <button className={styles.cupom}> <a href="#"> Use o cupom </a></button>
        </section>
        <img className={styles.livros} src="/livros.png" alt="Diversos livros" />
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