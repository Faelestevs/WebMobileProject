import Navegacao from '../Navegacao';
import './Formulario.css';

const Formulario = () => {
    return (
        <>
        <Navegacao />
        <form className='formulario'>
            <label>Nome</label>
            <input type='text'></input>
            <label>E-mail</label>
            <input type='text'></input>
            <label>Telefone</label>
            <input type='number'></input>
            <div className='campo-cidade-sexo'>
            <div className='campo'>
            <label>Cidade</label>
            <input type='text' className='campo-cidade'></input>
            </div>
            <div className='campo'>
            <label>Sexo</label>
            <select className='campo-sexo'>
                <option defaultValue={"Escolher"}>Escolher</option>
                <option value="Não informar">Não informar</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
            </select>
            </div>
            </div>
            <button className='botao-confirmar'>Confirmar</button>
        </form>
        </>
    )
}

export default Formulario