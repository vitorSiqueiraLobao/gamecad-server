const Genero = require('../models/genero')

//get all genero 
exports.getAll = async (req, res) =>{
    const generoes = await Genero.find()
    res.send(generoes)
}

//get genero by id
exports.getById = async (req, res) =>{
    const genero = await Genero.findById(req.params.id)
    res.send(genero)
}

//create a new genero
exports.createGenero = async (req, res) =>{
    const genero = new Genero({
        nome: req.body.nome
    })

    try{
        const a1 = await genero.save()
        res.json(a1)
    }catch(err){
        res.send(err)
    }
}

//modify genero by id
exports.updateGenero = async (req, res) =>{
    try{
        const dev = await Genero.findByIdAndUpdate(req.params.id, req.body)
        res.json(dev)
    }catch(err){
        res.send(err)
    }
}

//genero genero by id
exports.deleteGenero = async (req, res) =>{
    const dev = await Genero.findByIdAndDelete(req.params.id)
    res.send(dev)
}