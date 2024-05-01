import Link from "next/link"
import styles from './opcao.module.css';

// inserir props
const Opcao = ({imagem, texto, pagina, descricao}) => {
    return (
        <Link href={pagina} className={styles.linkOpcao}>
        <div className={styles.botoesOpcao}>
        <section className={styles.espacoOpcao}>
            <img src={imagem} className={styles.imagemOpcao}></img>
            <h2 className={styles.textoOpcao}>{texto}</h2>
            <p className={styles.descricao}>{descricao}</p>
        </section>
        </div>
        </Link>
    );
}

export default Opcao