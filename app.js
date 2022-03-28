//comando para executar após a instalação do nodemon:
// npm run dev
const express = require("express");
const {randomUUID} = require("crypto")

const app = express()
app.use(express.json())
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
 * Query => /product?id=2345432345432&value=122112211221
 */
app.post('/products', (request, response) =>{
    // Nome e preço => Name e price

    const {name, price} = request.body;
    const product = {
        id: randomUUID(),
        name,
        price
    }
    
    products.push(product)
    return response.json(product)
})

app.get("/products",(request,response) =>{
    return response.json(products)
})


app.listen(4002, () => console.log("Servidor está rodando na porta 4002"))
