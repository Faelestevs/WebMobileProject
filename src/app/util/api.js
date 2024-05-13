const URL = `http://localhost:8000/relatos` ;

const criarRelato = async (relato) => {

    try{
        const stringRelato = JSON.stringify(relato);
        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: stringRelato
        }
        let resposta = await fetch(URL, options);
        let dados = await resposta.json();
        return dados;
    } catch (error) {
        console.error("Erro ao carregar os relatos.")
    }

}

const getRelato = async () => {
    try {
        let resposta = await fetch(URL);
        let dados = await resposta.json();
        return dados;
    } catch (error) {
        console.error("Erro ao carregar os relatos.")
    }
}

export {criarRelato, getRelato}