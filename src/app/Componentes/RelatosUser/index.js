import CardRelato from "../CardRelato";
import Navegacao from "../Navegacao";
import "./RelatosUser.css";

let dadosRelatos = [
    {
        usuario: "Daniel José Raimundo",
        cidade: "São Paulo - SP",
        imgPerfil: "./imagens/daniel.png",
        relato: "Me chamo Daniel, tenho 45 anos, fui diagnosticado com linfoma em 2012. A doença me levou a repensar sobre minha vida e meus valores. Eu decidi não desanimar e continuar vivendo com a fé em um novo dia. Eu compartilhei minha história e incentivei pessoas que estavam passando pela mesma situação. Eu me tornei um símbolo de esperança e força para muitos.",
        data: "10 de Abril"
    },
    {
        usuario: "Bruna Ingrid",
        cidade: "Rio das Ostras - RJ",
        imgPerfil: "./imagens/bruna.png",
        relato: "Oi, eu sou a Bruna, tenho 32 anos, ano passado fui diagnosticada com câncer de mama. A doença me ensinou o valor da vida, da força interior e da importância da rede de apoio. Hoje, sou uma mulher mais resiliente e com uma nova perspectiva de vida. Compartilho minha história para inspirar outras mulheres a se cuidar, fazer exames preventivos e nunca desistir.",
        data: "15 de fevereiro"
    }
]

const RelatosUser = () => {
    return (
        <>
        <Navegacao />
        <div className="titulo-topico"><p className="titulo-relatos">Relatos</p></div>
        {dadosRelatos.map((dadosRelatos) => <CardRelato {...dadosRelatos} />)}
        </>
    )
}


export default RelatosUser