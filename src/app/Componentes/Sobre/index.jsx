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
                <div className={styles.autoresSobre}>
                    <p>Fernando Seong Jae Yoo</p>
                    <p>Guilherme Silva Dias</p>
                    <p>Raffael Rodrigues Esteves</p>
                </div>
                Universidade Presbiteriana Mackenzie
            </footer>
            <div className={styles.divFechaPagina}>
                <Link className={styles.linkFecha} href="/Home"><img className={styles.fechaJanelaVerde} src="./imagens/closeIonGreen.png"></img></Link>
            </div>
        </section>
        </div>
        </>
    )
}

export default Sobre