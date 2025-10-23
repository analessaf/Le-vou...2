"use client";
import { useState } from "react";
import styles from "./meusLivros.module.css";
import Popup from "../components/meusLivros/Popup";

export default function MeusLivros() {
  const [popupAberto, setPopupAberto] = useState(false);

  function abrirPopup() {
    console.log("Abrindo popup!"); // teste
    setPopupAberto(true);
  }

  function fecharPopup() {
    setPopupAberto(false);
  }

  return (
    <section className={styles.venda}>
      <h2>Livros à venda</h2>
      <button className={styles.cadastro} onClick={abrirPopup}> Cadastrar novo livro </button>
      {popupAberto && <Popup fecharPopup={fecharPopup} />}
    </section>
  );
}
