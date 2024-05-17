import Clima from '@/app/Componentes/Clima';
import Navegacao from '../Navegacao';
import styles from './climaNoticia.module.css';
import Noticia from '@/app/Componentes/Noticia';

const ClimaNoticia = () => {

    return (
        <>
        <Navegacao />
        <Clima />
        <Noticia />
        </>
    )
}

export default ClimaNoticia