import Navegacao from "../Navegacao";
import "./Relatar.css";

const Relatar = () => {

    return(
        <>
        <Navegacao />
        <section className="corpo-relatos">
        <h2 className="titulo-relatar">Relatar</h2>
        <img src="./imagens/imfRelatos.png" className="imagem-relatos"></img>
        <p className="texto-relato-motivador">Experiências que Transformam: Compartilhando Aprendizados e Inspirações</p>
            <form className="form-relatos">
                <textarea className="campo-comentario" placeholder="Comente aqui..."></textarea>
                <button className="botao-confirmar">Publicar</button>
            </form>
        </section>
        </>
    )
}



export default Relatar