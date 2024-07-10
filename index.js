const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan('dev'));

//LISTAR TODOS OS REGISTROS
app.get("/", (req, res)=>{
    // regra de negocio
    res.json({mensagem: "GET ALL RECORDS"});
});
//PEGAR REGISTRO A PARTIR DO ID
app.get('/:id', (req, res)=>{

    const id = req.params.id;
    res.json({ mensagem: `GET JUST THE RECORD WITH ID: ${id}`});
});

//CRIAR UM REGISTRO

app.post('/', (req, res)=>{

    const body = req.body;
    res.json({ mensagem: "POST"})
})

//EDITAR DADOS DO REGISTRO

app.put('/:id', (req, res)=>{

    const id = req.params.id;
    res.json({ mensagem: `EDIT JUST THE RECORD WITH ID: ${id}`});
})

//DELETAR REGISTRO P/ ID

app.delete('/:id', (req, res)=>{

    const id = req.params.id;
    res.json({ mensagem: `DELETE JUST THE RECORD WITH ID: ${id}`});
})
app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000");
});