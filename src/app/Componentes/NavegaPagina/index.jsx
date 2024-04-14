import "./NavegaPagina.css";
import Link from "next/link"
import { useState } from "react";
import Navegacao from "../Navegacao";


const NavegaPagina = () => {

    const [fechar, setFechar] = useState(0);

    if (fechar === 0 )return (
        <section className="janela-navegacao">
            <div onClick={() => setFechar(1)} className="espaco-fecha-janela"><img className="fecha-janela" src="./imagens/closeIcon.png"></img></div>
            <Link href="/Home" className="opcao-navegacao-mobile">Home</Link>
            <Link href="/RelatarPost" className="opcao-navegacao-mobile">Relatar</Link>
            <Link href="/Relatos" className="opcao-navegacao-mobile">Relatos</Link>
            <Link href="/About" className="opcao-navegacao-mobile">Sobre</Link>
            <Link href="/Registro" className="opcao-navegacao-mobile">Registre-se</Link>
        </section>
    )
    else if ( fechar === 1) return(
        <Navegacao/>
    )
}

export default NavegaPagina