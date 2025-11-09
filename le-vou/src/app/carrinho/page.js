"use client";
import { useEffect, useState } from "react";
import Compras from "../components/carrinho/Compras";
import styles from "./carrinho.module.css";

export default function Carrinho() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetch("https://openlibrary.org/people/julialonghi/lists/OL313056L/editions.json")
            .then((res) => res.json())
            .then((dado) => {
                setLivros(dado.entries)
            })
    }, [])

    return (
        <container>
            <section className={styles.titulo_carrinho}>
                <h2 className={styles.h2}> Meu carrinho: </h2>
                <h2 className={styles.h2}> Resumo </h2>
            </section>
            <container className={styles.pai_carrinho}>
                <section className={styles.compras}>
                    {livros.slice(0, 3).map((livro) => (
                    <Compras key={livro.key} livro={livro} />
                    ))}
                </section>
                <section className={styles.resumo}>
                    <section className={styles.caixa_resumo}>
                        <p> Valor: </p>
                        <p> Endereço: </p>
                        <input className={styles.formu_carrinho} type="text" placeholder="Digite o endereço"></input>
                        <p> Frete: </p>
                        <p className={styles.total}> Total: </p>
                    </section>
                </section>
            </container>
        </container>
    );
}
