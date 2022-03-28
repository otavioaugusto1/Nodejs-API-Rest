const http = require('http');

//request -> solicitação que o server recebe do cliente/apo
//response -> resposta enviada pelo servidor

//criação do servidor
http.createServer((request,response) =>{
    response.writeHead(200, {'Content-type': 'application/json'})

    //tratativa de rotas
    // esse comando .end é o que realmente envia na página
    if (request.url === '/produto'){
        response.end(JSON.stringify({
            message:"Rota de produto"
        }))
    }

    if (request.url === '/usuario'){
        response.end(JSON.stringify({
            message:"Rota de usuario"
        }))
    }

    response.end(JSON.stringify({
        message: "Qualquer outra rota"
    }))

    

}).listen(4001, () => console.log("Servidor está rodando na porta 4001"))

//comando para executar o servidor: node server.js