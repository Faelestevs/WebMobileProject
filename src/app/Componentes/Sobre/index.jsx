import Navegacao from "../Navegacao";
import styles from "./sobre.module.css";
import Link from "next/link"

const Sobre = () => {
    return(
        <>
        <Navegacao />
        <div className={styles.mainSobre}>
        <section className={styles.corpoSobre}>
            <header className={styles.tituloSobre}>
                Autoria
            </header>
            <footer className={styles.inferiorBoxSobre}>
                <ul className={styles.autoresSobre}>
                    <li>Fernando Seong Jae Yoo</li>
                    <li>Guilherme Silva Dias</li>
                    <li>Raffael Rodrigues Esteves</li>
                </ul>
                Universidade Presbiteriana Mackenzie
            </footer>
            <div className={styles.divFechaPagina}>
                <Link className={styles.linkFecha} href="/Home"><img className={styles.fechaJanelaVerde} src="./imagens/closeIonGreen.png"></img></Link>
            </div>
        </section>
        <img className={styles.imgCientista} src="./imagens/cientista.png"></img>
        </div>
        </>
    )
}

export default Sobre