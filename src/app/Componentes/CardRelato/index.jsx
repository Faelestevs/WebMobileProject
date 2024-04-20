import styles from "./cardRelato.module.css";

const CardRelato = ({usuario, cidade, imgPerfil, relato, data}) => {
    return (
        <>
        <section className={styles.corpoRelatoUser}>            
            <header>
                <div className={styles.espacoSuperiorRelato}>
                <img src={imgPerfil} className={styles.perfilUser}></img>
                <div className={styles.espacoTextoUser}>
                    <h2 className={styles.username}>{usuario}</h2>
                    <p className={styles.userLocal}>{cidade}</p> 
                </div>
                </div>
                <footer className={styles.corpoTextoRelato}>
                    <p className={styles.textoRelato}>{relato}</p>
                    <p className={styles.dataPostagem}>{data}</p>
                </footer>
            </header>
        </section>
        </>
    )
}

export default CardRelato