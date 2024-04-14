"use client";

import { useState } from "react";
import Navegacao from "../Navegacao";
import Opcao from "../Opcao";
import "./TelaOpcoes.css"

let dadosOpcoes = [
    {
        imagem: "./imagens/imagemOpcao1.png",
        texto: "O que é câncer?",
        pagina: "/TopicoCancer"
    },
    {
        imagem: "./imagens/imagemOpcao2.png",
        texto: "Tratamento",
        pagina: "/TopicoTratamento"
    },
    {
        imagem: "./imagens/imagemOpcao3.png",
        texto: "Prevenção",
        pagina: "/TopicoPrevencao"
    }
]

const TelaOpcoes = () => {

    return (
        <div className="pagina-escolhe-opcao">
            <Navegacao  />
            {dadosOpcoes.map((dadosOpcoes) => <Opcao {...dadosOpcoes} />)}
            
        </div>
    );
}

export default TelaOpcoes