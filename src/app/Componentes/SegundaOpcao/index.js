import Conteudo from "../Conteudo"
import Navegacao from "../Navegacao"

let dadosPag2 = [
    {
        titulo: "Tratamento",
        texto: <><p>O tratamento do câncer pode ser feito de várias maneiras de tratamento combinadas, sendo a principal a cirurgia oncológica, que pode ser empregada em conjunto com a radioterapia, quimioterapia e transplante de medula óssea, conforme cada caso. O tratamento será escolhido pelo médico de acordo com a gravidade e extensão da doença.</p>
        <h2>Radioterapia</h2><p>Tratamento no qual se utilizam radiações para destruir um tumor ou impedir que suas células aumentem, ela é indolor e pode ser usada em conjunto com a quimioterapia e a cirurgia oncológica.</p>
        <h2>Quimioterapia</h2><p>Tratamento que utiliza medicamento para destruir as células doentes que formam o tumor. Dentro do corpo, cada medicamento possui uma ação diferente e por tal motivo são utilizados vários tipos de cada vez. O medicamento se mistura ao sangue e é transportado para todo o corpo, destruindo as células cancerígenas.</p>
        <h2>Transplante de medula óssea</h2>
        <p>É um tratamento para algumas doenças malignas que afetam as células do sangue, como a Leucemia, que é um câncer no sangue. O tratamento consiste na substituição da medula óssea doente por células normais com o intuito de reconstituí-la.</p></>
    },
    {
        titulo: "Diagnóstico Precoce",
        texto: <p>O diagnóstico precoce do câncer é uma maneira muito efetiva de identificar e tratar já nos estágios iniciais da condição, necessitando de um tratamento mais simples e menos agressivos para o recuo total da doença. A maioria dos cânceres são possíveis de identificar com antecedência e iniciar o acompanhamento médico. Já o rastreamento é destinado à população que não apresenta sintomas da doença, que tem o objetivo de identificar o câncer na fase pré-clínica, só que atualmente só existe indicação de rastreamento do câncer de mama e do colo do útero.</p>
    },
    {
        titulo: "Bem-Estar Mental",
        texto: <p>O diagnóstico de câncer pode ter um impacto muito grande na vida do paciente, podendo mudar seus planos, objetivos e principalmente prejudicar a sua saúde mental. Segundo Bottino et al, entre 22% e 29% dos pacientes diagnosticados com câncer também desenvolvem transtornos mentais como a depressão e ansiedade. A combinação das condições pode acarretar em um maior tempo de tratamento do paciente, que encontra-se desmotivado e com medo do agravamento da doença, por isso, é importante que essas pessoas contem com o apoio incondicional dos familiares e contem com auxilio psicológico na contribuição da melhora do estado de saúde do paciente.</p>
    }
]

const SegundaOpcao = () => {
    return(
        <>
        <Navegacao />
        {dadosPag2.map((dadosPag2) => <Conteudo {...dadosPag2} />)}
        </>
    )
}

export default SegundaOpcao