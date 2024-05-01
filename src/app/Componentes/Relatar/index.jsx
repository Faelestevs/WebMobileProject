"use client"

import Navegacao from "../Navegacao";
import styles from "./relatar.module.css";

const Relatar = () => {

    const evento = (e) => {
        e.preventDefault();
    }

    return(
        <>
        <Navegacao />
        <section className={styles.corpoRelatos}>
        <h2 className={styles.tituloRelatar}>Relatar</h2>
        <img src="./imagens/imfRelatos.png" className={styles.imagemRelatos}></img>
        <p className={styles.textoRelatoMotivador}>Experiências que Transformam: Compartilhando Aprendizados e Inspirações</p>
            <form className={styles.formRelatos}>
                <input type="text" placeholder="Nome" className={styles.campo} required/>
                <input type="text" placeholder="Cidade" className={styles.campo} required/>
                <input type="text" placeholder="E-mail" className={styles.campo} required/>
                <textarea className={styles.campoComentario} placeholder="Comente aqui..." required></textarea>
                <button className={styles.botaoConfirmar} onClick={evento}>Publicar</button>
            </form>
        </section>
        </>
    )
}



export default Relatar