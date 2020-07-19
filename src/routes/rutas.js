const { Router } = require('express')
const router = Router()

const  EjecutarController = require('../components/controllers/productos.controllers')

arreglo=[]

router.route('/busqueda')
  .get(async function(req, res) {
    arreglo = await EjecutarController.executeTransfer(req,res)
    res.render('index', { title: req.query.title });
  })


module.exports= router