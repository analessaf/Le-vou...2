import styles from "./livros.module.css";

export default function Popup() {
    return (
        <div id="Popup" className={styles.popup}>
            <div className={styles.popup-conteudo}>
                <span className={styles.fechar-popup} onclick="fecharPopup()">&times;</span>
                <h2> Cadastre seu livro </h2>
                <container className={styles.agrup_form}>
                    <section className={styles.ft_livro}>
                        <img src="add_livro.png">
                        <button className={styles.cadastro}> Cadastrar </button>
                    </section>
                    <section className={styles.form_cad}>
                        <p class="f"> Título: <input class="formu" type="text" placeholder="Digite o título"></p>
                        <p class="f"> Autor: <input className="formu" type="text" placeholder="Digite o autor"></p>
                        <p class="f"> Número de páginas: <input class="formu" type="number" placeholder="Digite o nº de páginas"></p>
                        <p class="f"> Valor: <input class="formu" type="number" placeholder="Digite o valor"></p>
                        <p class="f"> Condição: <input type="checkbox" value="otimo"> Ótimo  
                                                <input type="checkbox" value="bom"> Bom
                                                <input type="checkbox" value="regular"> Regular </p>
                        <p class="f"> Descrição: <input class="formu" type="text" placeholder="Digite a descrição"></p>
                        <p class="f"> Add fotos: <input class="formu" type="text" placeholder="Adicione as imagens"></p>
                    </section>
                </container>
            </div>
        </div>
    )
}