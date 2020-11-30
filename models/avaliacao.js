const mongoose = require('mongoose')

const modeloAvaliacao = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    avaliacao:{
        type: Number,
        required: true
    },
    resenha:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model("avaliacao",modeloAvaliacao)