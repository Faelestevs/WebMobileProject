"use client"

import { useEffect, useState } from "react";
import styles from "./clima.module.css";

const Clima = () => {
    const [dados, setDados] = useState();
    const [texto, setTexto] = useState("");

    let cidade = "São Paulo"

    const fetchClima = async (cidade) => {
        
        

        try {
            const chaveAPI = "715d8b62cec24f68efe0585389419b01";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveAPI}&units=metric&lang=pt`;

            const resultado = await fetch(url);
            const json = await resultado.json();
            
            const imagem = json.weather[0].icon;
            const umidade = json.main.humidity;
            const temperatura = json.main.temp;
            const des = json.weather[0].description;
            const descricao = des[0].toUpperCase() + des.substring(1);
            setDados({cidade, imagem, temperatura, umidade, descricao});

            if(temperatura > 30 ){setTexto("Hidrate-se muito bem")}
            if(temperatura > 25 ){setTexto("Hoje é um bom dia para caminhar")}
            if(temperatura > 20 ){setTexto("Hoje o tempo está agradável")}
            if(temperatura < 20 ){setTexto("Um excelente dia para tomar um café")}
            if(temperatura < 15 ){setTexto("Lembre-se de levar um agasalho")}

        } catch (error) {
            console.error(error);
            setDados(null);
        }

    }


    useEffect(() => {fetchClima(cidade)}, [cidade]);

    if(!dados){return <container className={styles.espacoCard}><section className={styles.cardClima}>Carregando...</section></container>}

    return (
        <container className={styles.espacoCard}>
        <section className={styles.cardClima}>
            <header className={styles.superiorCard}>
                <div className={styles.temperatura}>{dados.temperatura}ºC</div>
                <img className={styles.icone} src={`https://openweathermap.org/img/wn/${dados.imagem}.png`}/>
            </header>
            <div className={styles.dadosAdicionais}>
                <div className={styles.umidade}>
                    <img className={styles.gota} src="./imagens/gota.png" />
                    <p>{dados.umidade}%</p>
                </div>
                
                <p>{dados.descricao}</p>
            </div>
            <footer className={styles.sectionCidade}>
                <div className={styles.fonteCidade}>Agora em {dados.cidade}</div>
            </footer>
        </section>
        <p className={styles.textoMotivacional}>{texto}</p>
        </container>
    )

}

export default Clima