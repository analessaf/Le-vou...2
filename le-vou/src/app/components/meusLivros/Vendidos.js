// import styles from "../../meusLivros/meusLivros.module.css";

// export default function Vendidos({ livro }) {
//     return (
//         <section className={styles.livro_vendido}>
//             <img className={styles.venda_livro} src="${livro.imagem}">
//             <section className={vender">
//               <div className="estado">
//                 <h5 style="background-color: ${estadoClass}"> ${livro.estado} </h5>
//               </div>
//               <div className="sobre_livro">
//                 <p> ${livro.titulo} </p>
//                 <h6> - ${livro.autor} </h6> 
//                 <h4> ${livro.preco} </h4>
//               </div>
//             </section>
//         </section>
//     );
// }
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../meusLivros/meusLivros.module.css";

export default function Vendidos({ livro }) {
  const [autor, setAutor] = useState("");

  // A API retorna o autor apenas com uma chave, então vamos buscar o nome real:
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

  // Imagem da capa (ou imagem padrão se não existir)
  const capaUrl = livro.covers
    ? `https://covers.openlibrary.org/b/id/${livro.covers[0]}-M.jpg`
    : "/sem-capa.png"; // Coloque uma imagem "sem-capa.png" na pasta public/

  // Preço fictício (pode remover se quiser)
  const preco = (Math.random() * 60 + 20).toFixed(2);

  return (
    <section className={styles.livro_vendido}>
      <Image
        className={styles.venda_livro}
        src={capaUrl}
        alt={`Capa de ${livro.title}`}
        width={120}
        height={180}
      />

      <section className={styles.vender}>
        <section className={styles.sobre_livro}>
          <p>{livro.title}</p>
          <h6>- {autor}</h6>
          <p className={styles.preco}>R$ {preco}</p>
        </section>
      </section>
    </section>
  );
}
