const Avaliacao = require('../models/avaliacao')

//get all avaliacoes
exports.getAll = async(req, res) =>{
    const avaliacoes = await Avaliacao.find()
    res.send(avaliacoes)
}

//get avaliacao by id
exports.getById = async (req, res) =>{
    const avaliacao = await Avaliacao.findById(req.params.id)
    res.send(avaliacao)
}

//create a new avaliacao
exports.newAvaliacao =  async (req, res) =>{
    console.log(req.body)
    const avaliacao = new Avaliacao({
        titulo : req.body.titulo,
        avaliacao : req.body.avaliacao,
        resenha : req.body.resenha
    })

    try{
        const a1 = await avaliacao.save()
        res.json(a1)
    }catch(err){
        res.send(err)
    }
}

//modify avaliacao by id
exports.modifyAvaliacao = async (req, res) =>{
    try{
        const avaliacao = await Avaliacao.findByIdAndUpdate(req.params.id, req.body)
        res.json(avaliacao)
    }catch(err){
        res.send(err)
    }
}

//delete avaliacao by id
exports.deleteAvaliacao = async (req, res) =>{
    const avaliacao = await Avaliacao.findByIdAndDelete(req.params.id)
    res.send("deleted")
}