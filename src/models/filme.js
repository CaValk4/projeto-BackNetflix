const mongoose = require("mongoose");

const Filme = mongoose.model('Filme', { 
    titulo: {
        type: String,
        required: true,
    },
    atores: Array,
    ano: Number,
    detalhes: Object,
    premiações: [Object]
 });

 module.exports = Filme;