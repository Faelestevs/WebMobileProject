import Conteudo from "../Conteudo";
import Navegacao from "../Navegacao";

let dadosPag1 = [
    {
        titulo: "O que é câncer?",
        texto: 
        <>
            <p>Segundo o ministério da saúde, o câncer é o nome dado a um conjunto de mais de 100 doenças que possuem como caráter comum o crescimento desordenado das células. A anomalia é desenvolvida pela rápida divisão das células que, agrupadas, formam tumores que invadem tecidos e outros órgãos, quando um tumor surge em um local distante da origem e se espalha na circulação sanguínea chamada de metástase.</p>
            <p>O câncer é causado por mutações genéticas nas células, que dispostas de um erro na sua formação, pode surgir uma célula doente que causa câncer ao se proliferar e pode surgir em qualquer parte do corpo, que dependendo do local pode ser mais agressivo ou não. Em 2020 no Brasil, os tipos de cânceres mais comuns são de próstata entre os homens, com mais de 65 mil casos, e de mama entre as mulheres com mais de 66 mil casos.</p>
        </>
    },
    {
        titulo: "Causas",
        texto: 
        <>
            <p>O câncer pode se desenvolver por diversos fatores que envolvem causas internas como a predisposição genética, a capacidade de defesa imunológica do indivíduo, a causas externas relacionadas ao meio ambiente, costumes, alimentação, hábitos e a qualidade de vida da pessoa.
            O envelhecimento também é um fator que contribui para o surgimento do câncer, pois as células de uma pessoa com idade avançada foram expostas por mais tempo aos fatores de risco para câncer.</p>
        </>
    },
    {
        titulo: "Fatores de Risco",
        texto: <ul>
            <li>Tabagismo;</li>
            <li>Hábitos alimentares ruins (alimentos processados e industrializados);</li>
            <li>Alcoolismo;</li><li>Hábitos sexuais sem proteção;</li>
            <li>Medicamentos;</li>
            <li>Fatores ocupacionais (ocupação lida com elementos causadores de câncer: indústria química);</li>
            <li>Radiação solar;</li>
            <li>Sedentarismo;</li>
            <li>Meio ambiente (água, ar e terra poluída);</li>
            <li>Pré-disposição genética.</li>
            </ul>
    }
]

const PrimeiraOpcao = () => {
    return (
        <>
        <Navegacao />
        {dadosPag1.map((dadosPag1) => <Conteudo key={dadosPag1.texto} {...dadosPag1} />)}
        </>
    );
}

export default PrimeiraOpcao