"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../carrinho/carrinho.module.css";

export default function Compras({ livro }) {
    const [autor, setAutor] = useState("");

    useEffect(() => {
        if (livro.authors && livro.authors.length > 0) {
        const autorKey = livro.authors[0].key;
        fetch(`https://openlibrary.org${autorKey}.json`)
            .then((res) => res.json())
            .then((data) => setAutor(data.name))
            .catch(() => setAutor("Autor desconhecido"));
        } else {
        setAutor("Autor desconhecido");
        }
    }, [livro]);

    const capaUrl = livro.covers
        ? `https://covers.openlibrary.org/b/id/${livro.covers[0]}-M.jpg`
        : "/sem-capa.png"; 

    const preco = (Math.random() * 60 + 20).toFixed(2);

    return (
        <section className={styles.livro_carrinho}>
            <Image
                className={styles.img_livro_carrinho}
                src={capaUrl}
                alt={`Capa de ${livro.title}`}
                width={150}
                height={222}
            />
            <section className={styles.sobre_livro_carrinho}>
                <section className={styles.carrinho_autor}>
                    <p> {livro.title} </p>
                    <h6> - {autor} </h6> 
                </section>
                <section className={styles.preco}>
                    <p>R$ {preco}</p>
                </section>
            </section>
        </section>

    );
}