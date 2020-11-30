const mongoose = require('mongoose')
const Desenvolvedor = require('./desenvolvedor')
const modeloJogo = new mongoose.Schema({
   
    nome:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    desenvolvedor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'desenvolvedor',
        required: true
    },
    genero:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'genero',
        required: true
    },
    avaliacaoGeral:{
        type:Number,
        required: true
    },
    imagemUrl:{
        type: String,
        required: true
    },
    avalicoes:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'avaliacao',
        required: true
    }

})
module.exports = mongoose.model("jogo",modeloJogo)