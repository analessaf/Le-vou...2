"use client";
import Image from "next/image";
import styles from "./recomendados.module.css";
import { useEffect, useState } from "react";

export default function Recomendados({ genero }) {
  const [autor, setAutor] = useState("");

  useEffect(() => {
    if (genero.authors && genero.authors.length > 0) {
      const autorKey = genero.authors[0].key;
      fetch(`https://openlibrary.org${autorKey}.json`)
        .then((res) => res.json())
        .then((data) => setAutor(data.name))
        .catch(() => setAutor("Autor desconhecido"));
    } else {
      setAutor("Autor desconhecido");
    }
  }, [genero]);

  const capaUrl = genero.covers
    ? `https://covers.openlibrary.org/b/id/${genero.covers[0]}-M.jpg`
    : "/sem-capa.png";

  const preco = (Math.random() * 60 + 20).toFixed(2);

  return (
    <section className={styles.card}>
      <Image
        src={capaUrl}
        alt={`Capa do livro ${genero.title}`}
        width={180}
        height={250}
        className={styles.capa}
      />
      <section className={styles.info}>
        <h3 className={styles.titulo}>{genero.title}</h3>
        <p className={styles.autor}>{autor}</p>
        <p className={styles.preco}>R$ {preco}</p>
      </section>
    </section>
  );
}
