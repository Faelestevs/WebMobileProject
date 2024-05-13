"use client"

import { createContext, useEffect, useState } from "react";
import Navegacao from "../Navegacao";
import styles from "./relatar.module.css";
import { criarRelato, getRelato } from "../../util/api.js"

const Relatar = () => {

    const [relatos, setRelatos] = useState(null);
    const [inputNome, setInputNome] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputCidade, setInputCidade] = useState("");
    const [inputComentario, setInputComentario] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const readRelato = async () => {
        const dados = await getRelato();
        setRelatos(dados);
    }

    const novoRelato = async () => {

        const nome = inputNome.trim();
        const email = inputEmail.trim();
        const cidade = inputCidade.trim();
        const comentario = inputComentario.trim();
        
        var dataAtual = new Date();

        const dia = dataAtual.getDate();

        let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

        const mesAtual = dataAtual.getMonth()
    
        const listaMes = meses[mesAtual]
    
        const mes = listaMes

        setErrorMessage("");

        if(nome === "" || email === "" || cidade === "" || comentario === "") {
            setErrorMessage("Os campos não devem ficar em branco");
            return;
        }

        await criarRelato({nome, cidade, comentario, dia, mes});
        await readRelato();
        setInputNome("");
        setInputEmail("");
        setInputCidade("");
        setInputComentario("");

    }

    useEffect(() => { readRelato(); }, [] )

    return(
        <>
        <Navegacao />
        <section className={styles.corpoRelatos}>
        <h2 className={styles.tituloRelatar}>Relatar</h2>
        <img src="./imagens/imfRelatos.png" className={styles.imagemRelatos}></img>
        <p className={styles.textoRelatoMotivador}>Experiências que Transformam: Compartilhando Aprendizados e Inspirações</p>
            <form className={styles.formRelatos}>
                <input type="text" placeholder="Nome" value={inputNome} className={styles.campo} required onChange={(e) => {setInputNome(e.target.value)}}/>
                <input type="text" placeholder="Cidade" value={inputCidade} className={styles.campo} required onChange={(e) => {setInputCidade(e.target.value)}}/>
                <input type="email" placeholder="E-mail" value={inputEmail} className={styles.campo} required onChange={(e) => {setInputEmail(e.target.value)}}/>
                <textarea className={styles.campoComentario} value={inputComentario} placeholder="Comente aqui..." required onChange={(e) => {setInputComentario(e.target.value)}}></textarea>
                <button className={styles.botaoConfirmar} onClick={novoRelato}>Publicar</button>
            </form>
        </section>
        </>
    )
}

export default Relatar