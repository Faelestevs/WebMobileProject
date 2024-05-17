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

    if (!dados) return <section>Carregando...</section>

    return(
            <section>
                {dados.map((artigo, index) => {
                    return (
                    <section key={`artigo${index}`}>
                        <div ><h2 href={artigo.url}>{artigo.title}</h2></div>
                        <div>{artigo.author}</div>
                        <div>{artigo.publishedAt}</div>
                        <a href={artigo.url}>Clique aqui</a>
                    </section>
                )
                })}
                
            </section>
    )
}


export default Noticia