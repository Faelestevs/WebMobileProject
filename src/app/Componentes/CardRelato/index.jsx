"use client"

import styles from "./cardRelato.module.css";

const CardRelato = ({relato}) => {
    return (
        <>
        <section className={styles.corpoRelatoUser}>            
            <header>
                <div className={styles.espacoSuperiorRelato}>
                <img src={relato.imagem} className={styles.perfilUser}></img>
                <div className={styles.espacoTextoUser}>
                    <h2 className={styles.username}>{relato.nome}</h2>
                    <p className={styles.userLocal}>{relato.cidade}</p> 
                </div>
                </div>
                <footer className={styles.corpoTextoRelato}>
                    <p className={styles.textoRelato}>{relato.comentario}</p>
                    <p className={styles.dataPostagem}>{relato.dia} de {relato.mes}</p>
                </footer>
            </header>
        </section>
        </>
    )
}

export default CardRelato