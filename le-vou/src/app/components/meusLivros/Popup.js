"use client";
import styles from "../../meusLivros/meusLivros.module.css";

export default function Popup({ fecharPopup }) {
  return (
    <div className={styles.popup} onClick={fecharPopup}>
      <div
        className={styles.popup_conteudo}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={styles.fechar_popup} onClick={fecharPopup}>
          &times;
        </span>
        <h2>Cadastre seu livro</h2>
        <p>Conteúdo do formulário aqui...</p>
      </div>
    </div>
  );
}
