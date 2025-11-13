"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';
import Promocoes from "./components/index/Promocoes";
import Recomendados from "./components/index/Recomendados";
import {shuffleArray} from "../utils/arrayHelpers";

export default function Home() {

  const [livrosPromocao, setLivrosPromocao] = useState([]);
  const [livrosRecomendados, setLivrosRecomendados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromocoes = fetch("https://openlibrary.org/people/julialonghi/lists/OL313056L/editions.json?limit=30")
      .then((res) => res.json());

    const fetchRecomendados = fetch("https://openlibrary.org/people/julialonghi/lists/OL313056L/editions.json?limit=30")
      .then((res) => res.json());

    // espera as duas chegarem
    Promise.all([fetchPromocoes, fetchRecomendados])
      .then(([dadoPromocao, dadoRecomendado]) => {
        
        // embaralha cada lista
        const promocoesEmbaralhadas = shuffleArray(dadoPromocao.entries);
        const recomendadosEmbaralhados = shuffleArray(dadoRecomendado.entries);

        // salva
        setLivrosPromocao(promocoesEmbaralhadas);
        setLivrosRecomendados(recomendadosEmbaralhados);
        
        setLoading(false);
      })
  }, []);

  return (
    <>
      <article className={styles.article}>
        <section className={styles.sc_promo}>
          <Image className={styles.promocao} src="/Index/promocao.png" alt="Promoção" width={450} height={127} />
          <button className={styles.cupom}> <Link href="#"> Use o cupom </Link></button>
        </section>
        <Image className={styles.livros} src="/Index/livros.png" alt="Diversos livros" width={700} height={200} />
      </article>

      <h2 className={styles.h2}> Promoções </h2>
      <section className={styles.livro_promo}>
        {loading && <p className={styles.p}>Carregando promoções...</p>}

        {!loading && livrosPromocao.slice(0, 10).map((livro) => (
          <Promocoes key={livro.key} genero={livro} />
        ))}
      </section>

      <article className={styles.recomendados}>
        <h2 className={styles.h2}>Recomendados</h2>

        {loading && <p className={styles.p}>Carregando recomendados...</p>}

        <section className={styles.filho_recomendados}>
          {!loading && livrosRecomendados.slice(0, 16).map((livro) => (
            <Recomendados key={livro.key} genero={livro} />
          ))}
        </section>
      </article>
    </>
  );
}