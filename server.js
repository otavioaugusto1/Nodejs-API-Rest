const http = require('http');

//request -> solicitação que o server recebe do cliente/apo
//response -> resposta enviada pelo servidor

//criação do servidor
http.createServer((request,response) =>{
    response.writeHead(200, {'Content-type': 'application/json'})

    response.end(JSON.stringify({
        message:"Minha primeira aplicação com Node.js"
    }))
    // esse comando .end é o que realmente envia na página
    

}).listen(4001, () => console.log("Servidor está rodando na porta 4001"))

//comando para executar o servidor: node server.js