const mongoose = require('mongoose')

const modeloGenero = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("genero",modeloGenero)