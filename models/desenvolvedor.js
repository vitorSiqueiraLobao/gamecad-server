const mongoose = require('mongoose')
const modeloDesenvolvedor = new mongoose.Schema({
   
    nome:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model("desenvolvedor",modeloDesenvolvedor)