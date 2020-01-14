const express = require('express');

const app = express();

app.use(express.json)

//Metodos HTTP: GET, PUT, POST, DELETE
//Tipos de parametros
//Query Params: request.query(Filtros, ordenação, paginação...)
//Route Params: request.params(Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não Relacional)

app.get('/', (request, response) => {
    console.log(request.query)
    return response.json({ message: 'Hello Omnistack' });
});

app.listen(3333);