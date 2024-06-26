"use client"

import styles from "./navegacao.module.css"
import Link from "next/link";
import { useState } from "react";

const Navegacao = () => {
    return (
        <section className={styles.navegacaoBarra}>
            <img src="./imagens/logowithGreenFill.png" className={styles.logoNavegacao}></img>
            <Menu />
        </section>
    )
}

function Menu() {
    const [menu, setMenu] = useState(styles.navMenu);

    const clique = () => {
        setMenu(styles.navMenuActive)
    }

    const fecha = () => {
        setMenu(styles.navMenu)
    }
    
        return (
            <nav className={menu} id={styles.menu}>
                <img src="./imagens/hambuger.png" onClick={clique} className={styles.hamburguerBotao}></img>
                <ul className={styles.opcoesMenu}>
                    <li className={styles.botaoFechar}><img onClick={fecha} src="./imagens/closeIcon.png"/></li>
                    <li className={styles.li}><Link href="/Home" className={styles.opcaoNavegacao}>Início</Link></li>
                    <li className={styles.li}><Link href="/RelatarPost" className={styles.opcaoNavegacao}>Relatar</Link></li>
                    <li className={styles.li}><Link href="/Relatos" className={styles.opcaoNavegacao}>Relatos</Link></li>
                    <li className={styles.li}><Link href="/Descubra" className={styles.opcaoNavegacao}>Descubra</Link></li>
                    <li className={styles.li}><Link href="/About" className={styles.opcaoNavegacao}>Sobre</Link></li>
                </ul>
            </nav>
        )
    }


export default Navegacao