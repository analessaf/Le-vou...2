"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./livros.module.css";
import Genero from "../components/livro/Genero";
import Promocao from "../components/livro/Promocao";
import MaisProcurados from "../components/livro/MaisProcurados";
import Populares from "../components/livro/Populares";

export default function Livros() {
    const generos = [
        { id: "fantasia", nome: "FANTASIA", caminhoImg: "/Livros/fantasia.png", link: "fantasia.html" },
        { id: "romance", nome: "ROMANCE", caminhoImg: "/Livros/romance.png", link: "fantasia.html" },
        { id: "terror", nome: "TERROR", caminhoImg: "/Livros/terror.png", link: "fantasia.html" },
        { id: "comedia", nome: "COMÉDIA", caminhoImg: "/Livros/fantasia.png", link: "fantasia.html" },
        { id: "suspense", nome: "SUSPENSE", caminhoImg: "/Livros/suspense.png", link: "fantasia.html" }
    ];
    const promocoes = [
        { id: "promo1", nome:"promo1.png", caminhoImg:"/Livros/promo1.png"},
        { id: "promo2", nome:"promo2.png", caminhoImg:"/Livros/promo2.png"},
        // { id: "promo3", nome:"promo3.png", caminhoImg:"/Livros/promo3.png"}
    ];
    const maisProcurados = [
        { id: "livro1", caminhoImg: "/Livros/mais_vend1.png", titulo: "Manual de Assassinato para Boas Garotas", autor: "Holy Jackson", avaliacao: "4.5" },
        { id: "livro2", caminhoImg: "/Livros/mais_vend2.png", titulo: "Six of Crows", autor: "Leigh Bardugo", avaliacao: "4.6" },
        { id: "livro3", caminhoImg: "/Livros/mais_vend3.png", titulo: "Todo Esse Tempo", autor: "Mikki Daughtry", avaliacao: "4.6" },
        { id: "livro4", caminhoImg: "/Livros/mais_vend4.png", titulo: "Trono de Vidro", autor: "Sarah J. Maas", avaliacao: "4.6" }
    ];
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetch("https://openlibrary.org/people/julialonghi/lists/OL313056L/editions.json")
            .then((res) => res.json())
            .then((dado) => {
                setLivros(dado.entries)
            })
    }, [])
    
    return (
        <container className={styles.container}>
            <container className={styles.pai_livros}>
                <section className={styles.busca}>
                    <input className={styles.perg} type="search" placeholder=" Digite"></input>
                    <input className={styles.form} type="submit" value="Buscar"></input>
                </section>
                <h2 className={styles.h2}> Gêneros </h2>
                <section className={styles.link}>
                    {generos.map(genero => (
                        <Genero key={genero.id} genero={genero} />
                    ))}
                </section>
                <section className={styles.conj_promo}>
                    {promocoes.map(promo => (
                        <Promocao key={promo.id} promo={promo} />
                    ))}
                </section>
                <h2 className={styles.h2}> Livros Populares </h2>
                <container className={styles.pai_livros_pop}>
                    <container className={styles.populares}>
                        <section className={styles.livro_pop}>
                            {livros.map(livro => (
                                <Populares key={livro.key} genero={livro} />
                            ))}
                        </section>
                        <section className={styles.livro_pop}>
                            {livros.map(livro => (
                                <Populares key={livro.key} genero={livro} />
                            ))}
                        </section>
                    </container>
                    <section>
                        <Image src="/Livros/promo3.png" alt="promo" width={200} height={383}></Image>
                    </section>
                </container>
            </container>
            <container className="mais_procurados">
                    <h2 className={styles.h2}> Mais Procurados </h2>
                    {maisProcurados.map(livro => (
                        <MaisProcurados key={livro.id} livro={livro}/>
                    ))}
            </container>
        </container>

    )
}