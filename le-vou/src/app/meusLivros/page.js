"use client";
import { useState, useEffect } from "react";
import styles from "./meusLivros.module.css";
import Popup from "../components/meusLivros/Popup";
import Vendidos from "../components/meusLivros/Vendidos";

export default function MeusLivros() {
  const [popupAberto, setPopupAberto] = useState(false);

  function abrirPopup() {
    setPopupAberto(true);
  }

  function fecharPopup() {
    setPopupAberto(false);
  }

  const [livros, setLivros] = useState([])

    useEffect(() => {
        fetch("https://openlibrary.org/people/arturg/lists/OL312562L/editions.json")
            .then((res) => res.json())
            .then((dado) => {
                setLivros(dado.entries)
            })
    }, [])

  return (
    <section>
      <section className={styles.venda}>
        <h2 className={styles.h2}>Livros à venda</h2>
        <button className={styles.cadastro} onClick={abrirPopup}> Cadastrar novo livro </button>
        {popupAberto && <Popup fecharPopup={fecharPopup} />}
      </section>
      <section className={styles.link}>
        {livros.map(livro => (
          <Vendidos key={livro.key} livro={livro} />
        ))}
      </section>
    </section>
  );
}
