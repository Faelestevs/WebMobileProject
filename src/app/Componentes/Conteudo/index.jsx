import styles from "./conteudo.module.css";

const Conteudo = ({titulo, texto}) => {
    return (
        <div className={styles.corpoConteudo}>
            <section className={styles.tituloTopico}>
                {titulo}
            </section>
            <p className={styles.textoTopico}>{texto}</p>
        </div>
    );
}

export default Conteudo