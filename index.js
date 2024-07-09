const express = require("express");
const app = express();

app.get("/teste", (req, res)=>{
    // regra de negocio
    console.log('find route!')
    res.json({mensagem: "ok"});
});

app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000");
});