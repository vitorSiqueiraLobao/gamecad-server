const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/gamecad'


//rotas
const rotasJogos = require("./routes/jogos")
const rotasDesenvolvedores = require("./routes/desenvolvedores")
const rotasGeneros = require("./routes/generos")
const rotaAvaliacoes = require("./routes/avaliacoes")

const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',()=>{
    console.log('database connected')
})
app.use(express.json())
const port = 3000

app.listen(port,()=>{
    console.log('server is running')
})



//routes
app.use("/jogos",rotasJogos)
app.use("/desenvolvedores",rotasDesenvolvedores)
app.use("/generos",rotasGeneros)
app.use("/avaliacoes",rotaAvaliacoes)