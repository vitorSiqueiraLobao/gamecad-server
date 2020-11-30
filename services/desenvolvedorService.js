const Desenvolvedor = require('../models/desenvolvedor')

//get all desenvolvedor 
exports.getAll = async (req, res) =>{
    const desenvolvedores = await Desenvolvedor.find()
    res.send(desenvolvedores)
}

//get desenvolvedor by id
exports.getById = async (req, res) =>{
    const desenvolvedor = await Desenvolvedor.findById(req.params.id)
    res.send(desenvolvedor)
}

//create a new desenvolvedor
exports.createDesenvolvedor = async (req, res) =>{
    console.log(req.params)
    const desenvolvedor = new Desenvolvedor({
        nome: req.body.nome
    })

    try{
        const a1 = await desenvolvedor.save()
        res.json(a1)
    }catch(err){
        res.send(err)
    }
}

//modify desenvolvedor by id
exports.updateDesenvolvedor = async (req, res) =>{
    try{
        const dev = await Desenvolvedor.findByIdAndUpdate(req.params.id, req.body)
        res.json(dev)
    }catch(err){
        res.send(err)
    }
}

//desenvolvedor desenvolvedor by id
exports.deleteDesenvolvedor = async (req, res) =>{
    const dev = await Desenvolvedor.findByIdAndDelete(req.params.id)
    res.send(dev)
}