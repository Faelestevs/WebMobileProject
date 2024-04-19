import Navegacao from "../Navegacao";
import "./Sobre.css";
import Link from "next/link"

const Sobre = () => {
    return(
        <>
        <Navegacao />
        <div className="main-sobre">
        <section className="corpo-sobre">
            <header className="titulo-sobre">
                Autoria
            </header>
            <footer className="inferior-box-sobre">
                <ul className="autores-sobre">
                    <li>Fernando Seong Jae Yoo</li>
                    <li>Guilherme Silva Dias</li>
                    <li>Raffael Rodrigues Esteves</li>
                </ul>
                Universidade Presbiteriana Mackenzie
            </footer>
            <div className="div-fecha pagina">
                <Link className="link-fecha" href="/Home"><img className="fecha-janela-verde" src="./imagens/closeIonGreen.png"></img></Link>
            </div>
        </section>
        <img className="img-cientista" src="./imagens/cientista.png"></img>
        </div>
        </>
    )
}

export default Sobre