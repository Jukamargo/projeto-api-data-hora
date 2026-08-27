const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Permite receber JSON
app.use(express.json());

// Servir os arquivos do frontend
app.use(express.static(path.join(__dirname, "public")));

// ===============================
// API DE DATA E HORA
// ===============================

app.get("/api/datetime", (req, res) => {
  const agora = new Date();

  const diasSemana = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
  ];

  const dia = String(agora.getDate()).padStart(2, "0");
  const mes = String(agora.getMonth() + 1).padStart(2, "0");
  const ano = agora.getFullYear();

  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");
  const segundos = String(agora.getSeconds()).padStart(2, "0");

  res.json({
    data: `${dia}/${mes}/${ano}`,
    hora: `${horas}:${minutos}:${segundos}`,
    diaSemana: diasSemana[agora.getDay()],
    timestamp: agora.getTime()
  });
});

// ===============================
// ROTA PRINCIPAL
// ===============================

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ===============================
// INICIAR SERVIDOR
// ===============================

app.listen(PORT, () => {
  console.log(`🦇 Servidor rodando em http://localhost:${PORT}`);
});