"use client";
import Image from "next/image";
import styles from "./favoritos.module.css";

export default function Favoritos({ livro }) {
  const capaUrl = livro.covers
    ? `https://covers.openlibrary.org/b/id/${livro.covers[0]}-M.jpg`
    : "/sem-capa.png";

  return (
    <section>
      <Image
        src={capaUrl}
        alt={`Capa do livro ${livro.title}`}
        width={150}
        height={210}
        className={styles.capa}
      />
    </section>
  );
}
