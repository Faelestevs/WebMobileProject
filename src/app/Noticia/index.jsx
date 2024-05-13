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

            const titulo = json.articles.title;
            const link = json.link;
            const imagem = json.results[0].image_url;

            setDados({titulo, link, imagem});

        } catch (error) {
            console.error(error);
            setDados(null)
        }

    } 

    useEffect(() => {fetchNoticia(), []})

    // <p>{dados.titulo}</p>

    return(
            <section>
                
            </section>
    )
}


export default Noticia