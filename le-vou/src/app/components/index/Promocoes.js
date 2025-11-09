"use client";
import Image from "next/image";
import styles from "./promocoes.module.css";

export default function Promocoes({ genero }) {
  const capaUrl = genero.covers
    ? `https://covers.openlibrary.org/b/id/${genero.covers[0]}-M.jpg`
    : "/sem-capa.png";

  return (
    <section className={styles.card}>
      <Image
        src={capaUrl}
        alt={`Capa do livro ${genero.title}`}
        width={150}
        height={220}
        className={styles.capa}
      />
    </section>
  );
}
