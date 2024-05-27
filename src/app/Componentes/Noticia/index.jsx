"use client"

import { useEffect, useState } from "react"
import styles from "./noticia.module.css"


const Noticia = () => {
    const [dados, setDados] = useState();

    const fetchNoticia = async () => {
        try {
            const API = "89d487f84055417c9360442db2a29877";
            const url = `https://newsapi.org/v2/top-headlines?country=br&category=health&sentiment=positive&apiKey=${API}`;

            const result = await fetch(url);
            const json = await result.json();
        
           
            if(json && json.articles.length > 0) {
                const articles = json.articles;
                if(articles.length <= 10) {
                    setDados(articles);
                } else {
                    setDados(articles.slice(0, 10));
                }
                return;
            }
            setDados([]);

        } catch (error) {
            console.error(error);
            setDados(null)
        }

    } 

    useEffect(() => {fetchNoticia()}, [])

    if (!dados) return <section className={styles.loading}>Carregando...</section>

    const formatarData = (dado) => {
        const ano = dado.slice(0,4);
        const mes = dado.slice(5,7);
        const dia = dado.slice(8,10)
        return dia+"/"+mes+"/"+ano
    }

    return(
            <section>
                {dados.map((artigo, index) => {
                    return (
                    <a href={artigo.url} key={`artigo${index}`} className={styles.cardNoticia}>
                        <header className={styles.headerNoticia}><h4 className={styles.tituloNoticia}>{artigo.title}</h4></header>
                        <footer className={styles.inferiorNoticia}>
                            <p className={styles.autoria}>{artigo.author}</p>
                            <p className={styles.dataPublicacao}>{formatarData(artigo.publishedAt)}</p>
                        </footer>
                    </a>
                )
                })}
                
            </section>
    )
}


export default Noticia