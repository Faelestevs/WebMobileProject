import Navegacao from '../Navegacao';
import styles from './formulario.module.css';

const Formulario = () => {
    return (
        <>
        <Navegacao />
        <form className={styles.formulario}>
            <label>Nome</label>
            <input type='text'></input>
            <label>E-mail</label>
            <input type='text'></input>
            <label>Telefone</label>
            <input type='number'></input>
            <div className={styles.campoCidadeSexo}>
            <div className={styles.campo}>
            <label>Cidade</label>
            <input type='text' className={styles.campoCidade}></input>
            </div>
            <div className={styles.campo}>
            <label>Sexo</label>
            <select className={styles.campoSexo}>
                <option defaultValue={"Escolher"}>Escolher</option>
                <option value="Não informar">Não informar</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
            </select>
            </div>
            </div>
            <button className={styles.botaoConfirmar}>Confirmar</button>
        </form>
        </>
    )
}

export default Formulario