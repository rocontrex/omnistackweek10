const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express();

mongoose.connect('mongodb+srv://rodrigo:admin123@cluster0-atihd.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json)
app.use(routes)
//Metodos HTTP: GET, PUT, POST, DELETE
//Tipos de parametros
//Query Params: request.query(Filtros, ordenação, paginação...)
//Route Params: request.params(Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não Relacional)

app.listen(3333);