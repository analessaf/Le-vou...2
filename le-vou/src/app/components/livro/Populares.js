"use client";
import Image from "next/image";
import styles from "./populares.module.css";

export default function Populares({ genero }) {
  // Imagem da capa (ou imagem padrão se não existir)
  const capaUrl = genero.covers
    ? `https://covers.openlibrary.org/b/id/${genero.covers[0]}-M.jpg`
    : "/sem-capa.png"; // Coloque uma imagem "sem-capa.png" na pasta public/

  return (
    <section className={styles.card}>
      <Image
        src={capaUrl}
        alt={`Capa do livro ${genero.title}`}
        width={110}
        height={160}
        className={styles.capa}
      />
    </section>
  );
}
