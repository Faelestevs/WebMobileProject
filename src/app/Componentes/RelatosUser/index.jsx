"use client"

import CardRelato from "../CardRelato";
import Navegacao from "../Navegacao";
import styles from "./relatosUser.module.css";
import {useState, useEffect } from "react";
import { getRelato } from "@/app/util/api";


const RelatosUser = () => {
    const [relatos, setRelatos] = useState(null);

    const readRelato = async () => {
        const dados = await getRelato();
        setRelatos(dados);
    }

    useEffect(() => { readRelato(); }, [] )
    
    return (
        <>
        <Navegacao />
        <div className={styles.tituloTopicoRelatos}><p className={styles.tituloRelatos}>Relatos</p></div>
        {relatos ? (relatos.map((relato, index) => <CardRelato key={`relato${index}`} relato={relato} />)) : (<p className={styles.loadingRelato}>Carregando Relatos...</p>)}
        </>
    )
}

export default RelatosUser