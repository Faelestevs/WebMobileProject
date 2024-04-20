import Navegacao from "../Navegacao";
import styles from "./relatar.module.css";

const Relatar = () => {

    return(
        <>
        <Navegacao />
        <section className={styles.corpoRelatos}>
        <h2 className={styles.tituloRelatar}>Relatar</h2>
        <img src="./imagens/imfRelatos.png" className={styles.imagemRelatos}></img>
        <p className={styles.textoRelatoMotivador}>Experiências que Transformam: Compartilhando Aprendizados e Inspirações</p>
            <form className={styles.formRelatos}>
                <textarea className={styles.campoComentario} placeholder="Comente aqui..."></textarea>
                <button className={styles.botaoConfirmar}>Publicar</button>
            </form>
        </section>
        </>
    )
}



export default Relatar