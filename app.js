//comando para executar após a instalação do nodemon:
// npm run dev
const express = require("express");
const {randomUUID} = require("crypto")
const fs = require("fs");

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

    fs.writeFile("Products.json",JSON.stringify(products),(err) => {
        if(err){
            console.log(err)
        }else{
            console.log("Produto inserido.")
        }
    })
    return response.json(product)
})

app.get("/products",(request,response) =>{
    return response.json(products)
})

app.get("/products/:id", (request,response) => {
    const {id} = request.params;
    const product = products.find(product => product.id === id)
    return response.json(product)
})

app.put("/products/:id", (request,response) =>{
    const {id} = request.params;
    const {name, price} = request.body;

    const productIndex = products.findIndex(product => product.id === id)
    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    }

    return response.json({message: "Produto alterado com sucesso!"})
})

app.delete("/products/:id", (request, response) =>{
    const {id} = request.params;
    const productIndex = products.findIndex(product => product.id === id)
    products.splice(productIndex,1);
    return response.json({message: "Produto removido com sucesso!"})
})


app.listen(4002, () => console.log("Servidor está rodando na porta 4002"))
