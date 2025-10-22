import Image from "next/image";
import styles from "../../livros/livros.module.css";

export default function Promocao({ promo }) {
    return(
      <Image alt={promo.nome} src={promo.caminhoImg} width={340} height={210}></Image>
    )
}