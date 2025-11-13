"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './conta.module.css';
import Favoritos from '../components/conta/Favoritos';
import { shuffleArray } from "../../utils/arrayHelpers";


export default function Conta() {
    const [livros, setLivros] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    const [nome, setNome] = useState("HELENA ALVES");
    const [email, setEmail] = useState("helena.alves@gmail.com.br");
    const [bio, setBio] = useState("Amo livros, vcs não sabem quanto um livro salva vidas!!");

    useEffect(() => {
        fetch("https://openlibrary.org/people/julialonghi/lists/OL313056L/editions.json")
            .then((res) => res.json())
            .then((dado) => {
                const listaFavoritos = shuffleArray(dado.entries);

                setLivros(listaFavoritos);

            });
    }, []);

    // botão "Editar/Salvar"
    function handleEditToggle() {
        if (isEditing) {
            console.log("Salvando dados:", { nome, email, bio });
        }
        // inverte o estado
        setIsEditing(!isEditing);
    }

    return (
        <section className={styles.conta}>
            <section className={styles.perfil_decima}>
                <Image className={styles.share_icon} src="/Conta/share.png" alt="compartilhar" width={19} height={19} />
                <button className={styles.editar_perfil} onClick={handleEditToggle}>
                    {isEditing ? 'Salvar Perfil' : 'Editar Perfil'}
                </button>
            </section>

            <section className={styles.perfil_pai}>
                <Image className={styles.avatar} src="/Conta/helena.png" alt="Helena Alves" width={100} height={100} />

                <section className={styles.perfil_info}>
                    {isEditing ? (
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className={styles.input_edit}
                        />
                    ) : (
                        <h2>{nome}</h2>
                    )}

                    {isEditing ? (
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.input_edit}
                        />
                    ) : (
                        <p>{email}</p>
                    )}
                </section>
            </section>

            <section className={styles.status}>
                <section className={styles.status1}>
                    <div className={styles.value}>5</div>
                    <div className={styles.label}>LIVROS DISPONÍVEIS</div>
                </section>
                <section className={styles.status1}>
                    <div className={styles.value}><Image src="/Livros/estrela.png" alt="estrela" width={20} height={20} /> 4.7</div>
                    <div className={styles.label}>AVALIAÇÃO MÉDIA</div>
                </section>
                <section className={styles.status1}>
                    <div className={styles.value}>10</div>
                    <div className={styles.label}>LIVROS VENDIDOS</div>
                </section>
            </section>

            <button className={styles.pedidos}>Seus Pedidos</button>

            <section className={styles.sessao}>
                <section className={styles.sessao_topo}>
                    <h3>Minha Bio</h3>
                    // oculta o botão "Escrever"
                    {!isEditing && <button>Escrever ➔</button>}
                </section>

                {isEditing ? (
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className={styles.textarea_edit}
                    />
                ) : (
                    <p className={styles.bio_texto}>{bio}</p>
                )}
            </section>

            <section className={styles.sessao}>
                <section className={styles.sessao_topo}>
                    <h3>Gêneros Favoritos</h3>
                    <button>Adicionar ➔</button>
                </section>
                <section className={styles.generos_container}>
                    <span className={`${styles.genero_item} ${styles.romance}`}>Romance</span>
                    <span className={`${styles.genero_item} ${styles.suspense}`}>Suspense</span>
                    <span className={`${styles.genero_item} ${styles.ficcao}`}>Ficção</span>
                </section>
            </section>

            <section className={styles.favoritos}>
                <h2>Favoritados</h2>
                <Image className={styles.coracao} src="/Conta/coracao.png" alt="coração" width={25} height={25} />
            </section>
            <section className={styles.favoritos_lista}>
                {livros.slice(0, 13).map((livro) => (
                    <Favoritos key={livro.key} livro={livro} />
                ))}
            </section>
        </section>
    );
}