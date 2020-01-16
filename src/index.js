const 
express = require('express'),
mongoose = require('mongoose'),
routes = require('./routes'),
dotenv = require('dotenv'),
app = express();

dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);
//Metodos HTTP: GET, PUT, POST, DELETE
//Tipos de parametros
//Query Params: request.query(Filtros, ordenação, paginação...)
//Route Params: request.params(Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não Relacional)

app.listen(3333);