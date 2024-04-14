import Link from "next/link"
import './Opcao.css';
import TelaOpcoes from "../TelaOpcoes";


// inserir props
const Opcao = ({imagem, texto, pagina}) => {
    return (
        <Link href={pagina} className="link-opcao">
        <div className='botoes-opcao'>
        <section className='espaco-opcao'>
            <img src={imagem} className='imagem-opcao'></img>
            <h2 className='texto-opcao'>{texto}</h2>
        </section>
        </div>
        </Link>
    );
}

export default Opcao