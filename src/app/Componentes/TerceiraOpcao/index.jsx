import Conteudo from "../Conteudo"
import Navegacao from "../Navegacao"

let dadosPag3 = [
    {
        titulo: "Prevenção",
        texto: 
        <><p>A prevenção ao câncer envolve a redução da exposição aos fatores de risco:</p>
        <p className="titulo-texto-topico">Não fumar</p>
        <p>Evitar o uso dessas substâncias, irá impedir que seu você e as pessoas ao redor entre em contato com mais de 4.700 substâncias tóxicas e cancerígenas presentes na fumaça.</p>
        <p className="titulo-texto-topico">Alimentação saudável</p>
        <p>Manter uma alimentação variável e equilibrada de alimentos como frutas, legumes, grãos, cereais integrais e proteínas consumidos diariamente, contribuirá para o aumento da sua qualidade de vida e evitar a formação do câncer.</p>
        <p className="titulo-texto-topico">Mantenha o peso corporal adequado</p>
        <p>Estar acima do peso contribui para o desenvolvimento do câncer, por isso, é essencial manter o controle sobre o seu peso por meio de uma alimentação saldável e a realização de exercícios com regularidade.</p>
        <p className="titulo-texto-topico">Pratique atividades físicas diariamente</p>
        <p>Manter-se ativo é importante para a prevenção do câncer, fazer caminhada, academia, dançar, cuidar da casa, entre outros são exemplos atividades que você pode fazer para se manter em movimento.</p>
        <p className="titulo-texto-topico">Evitar a ingestão de bebidas alcoólicas</p>
        <p>O consumo de bebidas alcoólicas, independentemente da quantidade, contribui para o risco de desenvolvimento de câncer, que aliado ao uso de tabaco, aumenta ainda mais as chances de desenvolver a doença.</p>
        <p className="titulo-texto-topico">Evitar exposição ao sol</p>
        <p>Fazer uso de protetor solar diariamente, evitar tomar sol das 10h até 16h ou usar chapéu e roupa para evitar a exposição direta.</p>
        <p className="titulo-texto-topico">Fazer exames preventivos</p>
        <p>Mulheres entre 25 e 64 devem fazer exame ginecológico a cada três anos e os homens a partir dos 40 anos para o exame de próstata. Ambos com o intuito de realizar a detecção precoce de um possível câncer.</p>
        </>
    }
]

const TerceiraOpcao = () => {
    return(
        <>
        <Navegacao />
        {dadosPag3.map((dadosPag3) => <Conteudo key={dadosPag3.titulo} {...dadosPag3} />)}
        </>
    )
}

export default TerceiraOpcao