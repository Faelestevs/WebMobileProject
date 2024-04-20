"use client";

import Navegacao from "../Navegacao";
import Opcao from "../Opcao";
import styles from "./telaOpcoes.module.css"

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
        <div className={styles.paginaEscolheOpcao}>
            <Navegacao />
            {dadosOpcoes.map((dadosOpcoes) => <Opcao key={dadosOpcoes.texto} {...dadosOpcoes} />)} 
        </div>
    );
}

export default TelaOpcoes