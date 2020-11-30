const Jogo = require('../models/jogos')

//get all jogos
exports.getAll = async(req, res) =>{
    const jogos = await Jogo.find()
    res.send(jogos)
}

//get jogo by id
exports.getById = async (req, res) =>{
    const jogo = await Jogo.findById(req.params.id)
    res.send(jogo)
}

//create a new jogo
exports.newJogo =  async (req, res) =>{
    const jogo = new Jogo({
        nome: req.body.nome,
        descricao: req.body.descricao,
        desenvolvedor: req.body.desenvolvedor.id,
        genero: req.body.genero.id,
        avaliacaoGeral:0,
        imagemUrl: req.body.imagemUrl,
        avaliacoes: req.body.avaliacoes
    })

    try{
        const a1 = await jogo.save()
        res.json(a1)
    }catch(err){
        res.send(err)
    }
}

//modify game by id
exports.modifyGame = async (req, res) =>{
    try{
        const jogo = await Jogo.findByIdAndUpdate(req.params.id, req.body)
        res.json(jogo)
    }catch(err){
        res.send(err)
    }
}

//delete game by id
exports.deleteGame = async (req, res) =>{
    const jogo = await Jogo.findByIdAndDelete(req.params.id)
    res.send("deleted")
}