"use client";

import './TelaInicial.css';
import Link from "next/link"

const TelaInicial = () => {

   

    return (
        <div className='corpo'>
        <header className='superior-tela-inicial'><img src='./imagens/logoLayer.png' className='logo'></img></header>
        <section className='centro-tela-inicial'>
            <img src="./imagens/mainCharacter.png" className='img-primeira'></img>
            <h2 className='texto-tela-inicial'>Vamos combater o câncer</h2>
            <footer className='inferior-tela-inicial'><Link href="/Home" className='textoBotao' >Conhecer</Link></footer>
        </section>
        </div>
    );
}

export default TelaInicial