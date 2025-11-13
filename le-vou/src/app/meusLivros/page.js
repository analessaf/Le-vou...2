"use client";
import { useState, useEffect } from "react";
import styles from "./meusLivros.module.css";
import Popup from "../components/meusLivros/Popup";
import Vendidos from "../components/meusLivros/Vendidos";
import {shuffleArray} from "../../utils/arrayHelpers";

export default function MeusLivros() {
  const [popupAberto, setPopupAberto] = useState(false);
  const [livros, setLivros] = useState([]);

  const estados = ["Ótimo", "Bom", "Regular", "Ótimo"];

  function abrirPopup() {
    setPopupAberto(true);
  }

  function fecharPopup() {
    setPopupAberto(false);
  }

  useEffect(() => {
    fetch("https://openlibrary.org/people/julialonghi/lists/OL313056L/editions.json")
      .then((res) => res.json())
      .then((dado) => {
        const listaEmbaralhada = shuffleArray(dado.entries);
        const livrosComEstado = listaEmbaralhada.map((livro, index) => ({
          ...livro,
          estado: estados[index % estados.length],
        }));
        
        // salva nos estados separados
        setLivros(livrosComEstado);
      });
  }, []);

  return (
    <section>
      <section className={styles.venda}>
        <h2 className={styles.h2}>Livros à venda</h2>
        <button className={styles.cadastro} onClick={abrirPopup}>
          Cadastrar novo livro
        </button>
        {popupAberto && <Popup fecharPopup={fecharPopup} />}
      </section>

      <section className={styles.vendidos}>
        {livros.slice(0, 4).map((livro) => (
          <Vendidos key={livro.key} livro={livro} />
        ))}
      </section>
    </section>
  );
}
