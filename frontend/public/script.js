const dataElement = document.getElementById("data");
const horaElement = document.getElementById("hora");
const diaSemanaElement = document.getElementById("diaSemana");
const statusElement = document.getElementById("status");

async function buscarDataHora() {

    try {

        const resposta = await fetch("/api/datetime");

        if (!resposta.ok) {
            throw new Error("Erro ao consultar a API");
        }

        const dados = await resposta.json();

        dataElement.textContent = dados.data;

        horaElement.textContent = dados.hora;

        diaSemanaElement.textContent = dados.diaSemana;

        statusElement.textContent = "API conectada • tempo atualizado";

    } catch (erro) {

        console.error(erro);

        statusElement.textContent =
            "não foi possível conectar com a API";
    }
}

// Primeira consulta
buscarDataHora();

// Atualiza a cada segundo
setInterval(buscarDataHora, 1000);