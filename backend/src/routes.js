const express = require("express");
const crypto = require("crypto");

const routes = express.Router();

routes.post("/ongs", (request, response) => {
  const { name, email, whatsapp, city } = request.body;

  const id = crypto.randomBytes(4).toString("HEX");

  return response.json({
    aluno: "Yure Araujo"
  });
});

module.exports = routes;
