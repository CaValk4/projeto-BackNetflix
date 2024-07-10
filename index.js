const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

const routes = require('./src/routes/filmes.routes')

app.use('/', routes)
app.use(morgan('dev'));
app.use(bodyParser.json());

//LISTAR TODOS OS REGISTROS

app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000");
});