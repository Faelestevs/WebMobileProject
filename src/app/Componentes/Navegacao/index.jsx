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
            <nav className={menu}>
                <img src="./imagens/hambuger.png" onClick={clique} className={styles.hamburguerBotao}></img>
                <ul className={styles.menu}>
                    <li className={styles.botaoFechar}><img onClick={fecha} src="./imagens/closeIcon.png"/></li>
                    <li className={styles.li}><Link href="/Home" className={styles.opcaoNavegacao}>Home</Link></li>
                    <li className={styles.li}><Link href="/RelatarPost" className={styles.opcaoNavegacao}>Relatar</Link></li>
                    <li className={styles.li}><Link href="/Relatos" className={styles.opcaoNavegacao}>Relatos</Link></li>
                    <li className={styles.li}><Link href="/About" className={styles.opcaoNavegacao}>Sobre</Link></li>
                    <li className={styles.li}><Link href="/Registro" className={styles.opcaoNavegacao}>Registre-se</Link></li>
                </ul>
            </nav>
        )
    }


export default Navegacao