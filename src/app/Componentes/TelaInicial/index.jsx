"use client";

import styles from './telaInicial.module.css';
import Link from "next/link"

const TelaInicial = () => {

    return (
        <div className={styles.corpo}>
        <header className={styles.superiorTelaInicial}><img src='./imagens/logoLayer.png' className={styles.logo}></img></header>
        <section className={styles.centroTelaInicial}>
            <img src="./imagens/mainCharacter.png" className={styles.imgPrimeira}></img>
            <h2 className={styles.textoTelaInicial}>Vamos combater o câncer</h2>
            <footer className={styles.inferiorTelaInicial}><Link href="/Home" className={styles.textoBotao} >Conhecer</Link></footer>
        </section>
        </div>
    );
}

export default TelaInicial