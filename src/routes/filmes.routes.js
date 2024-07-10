const express = require('express');
const router = express.Router();	



router.get("/", (req, res)=>{
    // regra de negocio
    res.json({mensagem: "GET ALL RECORDS"});
});
//PEGAR REGISTRO A PARTIR DO ID
router.get('/:id', (req, res)=>{

    const id = req.params.id;
    res.json({ mensagem: `GET JUST THE RECORD WITH ID: ${id}`});
});

//CRIAR UM REGISTRO

router.post('/', (req, res)=>{

    const body = req.body;
    res.json(body)
});

//EDITAR DADOS DO REGISTRO

router.put('/:id', (req, res)=>{

    const id = req.params.id;
    res.json({ mensagem: `EDIT JUST THE RECORD WITH ID: ${id}`});
});

//DELETAR REGISTRO P/ ID

router.delete('/:id', (req, res)=>{

    const id = req.params.id;
    res.json({ mensagem: `DELETE JUST THE RECORD WITH ID: ${id}`});
});


module.exports = router;