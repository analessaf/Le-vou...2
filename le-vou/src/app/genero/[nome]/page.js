"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./genero.module.css";
import { shuffleArray } from "../../../utils/arrayHelpers";

export default function GeneroPage() {
  const params = useParams();
  const nomeGenero = params.nome;
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);

  const generoInfo = {
    fantasia: {
      nome: "FANTASIA",
      descricao: "Mundos mágicos e aventuras extraordinárias.",
    },
    romance: {
      nome: "ROMANCE",
      descricao: "Histórias de amor que emocionam.",
    },
    terror: {
      nome: "TERROR",
      descricao: "Suspense e mistérios assustadores.",
    },
    comedia: {
      nome: "COMÉDIA",
      descricao: "Diversão e bom humor garantidos.",
    },
    suspense: {
      nome: "SUSPENSE",
      descricao: "Mistérios intrigantes e reviravoltas.",
    },
  };

  const info = generoInfo[nomeGenero] || {
    nome: nomeGenero.toUpperCase(),
    descricao: "Explore este gênero literário.",
  };

  useEffect(() => {
    fetch("https://openlibrary.org/people/julialonghi/lists/OL313056L/editions.json")
      .then((res) => res.json())
      .then((dado) => {
        const livrosEmbaralhados = shuffleArray(dado.entries);
        setLivros(livrosEmbaralhados);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titulo}>{info.nome}</h1>
        <p className={styles.descricao}>{info.descricao}</p>
      </div>

      {loading ? (
        <p className={styles.loading}>Carregando...</p>
      ) : (
        <section className={styles.livros_grid}>
          {livros.slice(0, 12).map((livro) => {
            const capaUrl = livro.covers
              ? `https://covers.openlibrary.org/b/id/${livro.covers[0]}-M.jpg`
              : "/sem-capa.png";
            const preco = (Math.random() * 60 + 20).toFixed(2);

            return (
              <div key={livro.key} className={styles.livro_card}>
                <Image
                  src={capaUrl}
                  alt={livro.title}
                  width={150}
                  height={220}
                  className={styles.livro_img}
                />
                <h3 className={styles.livro_titulo}>{livro.title}</h3>
                <p className={styles.livro_preco}>R$ {preco}</p>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}
