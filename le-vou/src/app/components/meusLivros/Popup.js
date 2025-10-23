import styles from "./livros.module.css";

export default function Popup() {
    return (
        <div id="Popup" className={styles.popup}>
            <div className={styles.popupConteudo}>
                <span className={styles.fecharPopup} onClick={fecharPopup}>&times;</span>
                <h2> Cadastre seu livro </h2>
                <div className={styles.agrupForm}>
                    <section className={styles.ftLivro}>
                        <img src="add_livro.png" alt="Adicionar Livro"/>
                        <button className={styles.cadastro}> Cadastrar </button>
                    </section>
                    <section className={styles.formCad}>
                        <p className={styles.f}> Título: <input className={styles.formu} type="text" placeholder="Digite o título"/></p>
                        <p className={styles.f}> Autor: <input className={styles.formu} type="text" placeholder="Digite o autor"/></p>
                        <p className={styles.f}> Número de páginas: <input className={styles.formu} type="number" placeholder="Digite o nº de páginas"/></p>
                        <p className={styles.f}> Valor: <input className={styles.formu} type="number" placeholder="Digite o valor"/></p>
                        <p className={styles.f}> Condição: 
                            <input type="checkbox" value="otimo"/> Ótimo  
                            <input type="checkbox" value="bom"/> Bom
                            <input type="checkbox" value="regular"/> Regular 
                        </p>
                        <p className={styles.f}> Descrição: <input className={styles.formu} type="text" placeholder="Digite a descrição"/></p>
                        <p className={styles.f}> Add fotos: <input className={styles.formu} type="text" placeholder="Adicione as imagens"/></p>
                    </section>
                </div>
            </div>
        </div>
    )
}