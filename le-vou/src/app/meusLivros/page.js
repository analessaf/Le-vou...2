import styles from "./meusLivros.module.css";

export default function MeusLivros() {
    function abrirPopup() {
    document.getElementById("Popup").style.display = "block";
    }

    function fecharPopup() {
    document.getElementById("Popup").style.display = "none";
    }

    return (
        <section className={styles.venda}>
            <h2> Livros à venda </h2>
            <button className={styles.cadastro} onclick="abrirPopup()"> Cadastrar novo livro </button>
        </section>
    )
}