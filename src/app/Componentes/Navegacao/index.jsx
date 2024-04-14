"use client"

import NavegaPagina from "../NavegaPagina";
import "./Navegacao.css"
import { useState } from "react";

const Navegacao = () => {

    const [navegar, setNavegar] = useState(false)

    if (navegar === false) {return <section className="navegacao-barra">
    <img src="./imagens/logowithGreenFill.png" className="logo-navegacao"></img>
    <img onClick={(navegar) => setNavegar(true)} src="./imagens/hambuger.png" className="hamburguer-botao"></img>
    </section>}
    else if (navegar === true) {return <NavegaPagina />}
    
}


export default Navegacao