"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';
import Populares from "./components/livro/Populares";

export default function Home() {

  const [livros, setLivros] = useState([]); // Começa como uma lista vazia
  const [loading, setLoading] = useState(true); // Começa como "carregando" 

  useEffect(() => {
    fetch("https://openlibrary.org/people/arturg/lists/OL312562L/editions.json")
      .then((res) => res.json())
      .then((dado) => {
        setLivros(dado.entries); // Salvamos a lista de livros no estado
        setLoading(false); // Paramos de carregar
      })
      .catch((error) => {
        console.error("Falha ao buscar livros:", error);
        setLoading(false); // Paramos de carregar, mesmo se der erro
      });
  }, []);

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
      <section className={styles.livro_promo}>
        {/* Se estiver carregando, mostre uma mensagem */}
        {loading && <p className={styles.p}>Carregando promoções...</p>}

        {/* Quando não estiver carregando, pegue os 4 primeiros livros
          e crie um card "Populares" para cada um.
          (Note que a prop 'genero' do seu componente é o nosso 'livro')
        */}
        {!loading && livros.slice(0, 7).map((livro) => (
          <Populares key={livro.key} genero={livro} />
        ))}
      </section>

      <article className={styles.recomendados}>
        <h2 className={styles.h2}>Recomendados</h2>

        {/* Se estiver carregando, mostre uma mensagem */}
        {loading && <p className={styles.p}>Carregando recomendados...</p>}

        {/* Aqui pegamos os próximos 4 livros (do índice 4 ao 8)
          para não repetir os da promoção.
        */}
        {!loading && livros.slice(4, 8).map((livro) => (
          <Populares key={livro.key} genero={livro} />
        ))}

      </article>
    </>
  );
}