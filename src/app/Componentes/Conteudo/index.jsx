import "./Conteudo.css";

const Conteudo = ({titulo, texto}) => {
    return (
        <div className="corpo-conteudo">
            <section className="titulo-topico">
                {titulo}
            </section>
            <p className="texto-topico">{texto}</p>
        </div>
    );
}

export default Conteudo