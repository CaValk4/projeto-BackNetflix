const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');	



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

router.post('/', async (req, res)=>{

    try {
        const filme = req.body;
        console.log(filme)
        const response = await new Filme(filme).save();
         res.json({ error: false, filme: response });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
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