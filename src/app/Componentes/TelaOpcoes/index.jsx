"use client";

import Navegacao from "../Navegacao";
import Opcao from "../Opcao";
import styles from "./telaOpcoes.module.css"

let dadosOpcoes = [
    {
        imagem: "./imagens/imagemOpcao1.png",
        texto: "O que é câncer?",
        pagina: "/TopicoCancer",
        descricao: "Conheça mais sobre a doença, os tipos mais comuns, suas causas e os fatores de risco."
    },
    {
        imagem: "./imagens/imagemOpcao2.png",
        texto: "Tratamento",
        pagina: "/TopicoTratamento",
        descricao: "Saiba sobre o diagnóstico precoce, as formas de tratamento e manter o bem-estar mental."
    },
    {
        imagem: "./imagens/imagemOpcao3.png",
        texto: "Prevenção",
        pagina: "/TopicoPrevencao",
        descricao: "Descubra como prevenir a doença por meio de hábitos saudáveis."
    }
]

const TelaOpcoes = () => {

    return (
        <div className={styles.paginaEscolheOpcao}>
            <Navegacao />
            <div className={styles.selecaoOpcoes}>
                {dadosOpcoes.map((dadosOpcoes) => <Opcao key={dadosOpcoes.texto} {...dadosOpcoes} />)}
            </div>
        </div>
    );
}

export default TelaOpcoes