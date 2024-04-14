import "./CardRelato.css";



const CardRelato = ({usuario, cidade, imgPerfil, relato, data}) => {
    return (
        <>
        <section className="corpo-relato-user">            
            <header>
                <div className="espaco-superior-relato">
                <img src={imgPerfil} className="perfil-user"></img>
                <div className="espaco-texto-user">
                    <h2 className="username">{usuario}</h2>
                    <p className="user-local">{cidade}</p> 
                </div>
                </div>
                <footer className="corpo-texto-relato">
                    <p className="texto-relato">{relato}</p>
                    <p className="data-postagem">{data}</p>
                </footer>
            </header>
        </section>
        </>
    )
}

export default CardRelato