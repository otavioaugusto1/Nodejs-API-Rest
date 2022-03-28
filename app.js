//comando para executar após a instalação do nodemon:
// npm run dev
const express = require("express");

const app = express()

const products = []

/**
 * POST => Inserir 
 * GET => Buscar um ou mais dados
 * PUT => Alterar
 * DELETE => Remover
 */

/**
 * body => Sempre que eu quiser enviar dados para minha aplicação
 * params => parâmetros da url (de rota) ex: /product/123456789
 * Query => /product?id=2345432345432
 */
app.post('/')


app.listen(4002, () => console.log("Servidor está rodando na porta 4002"))
