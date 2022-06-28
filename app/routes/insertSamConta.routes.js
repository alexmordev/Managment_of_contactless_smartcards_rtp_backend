const express = require('express');
const router = express.Router();

const contador = require('../controllers/insert_conta.Controller');
const sam = require('../controllers/insert_sam.Controller');
const consultaContador = require('../controllers/consultaBase');


//ruta pruebaController
router.post( '/api/contadores',contador.insertContadores )
router.post( '/api/sams',sam.insertSam )


//consulta contadores para
router.get('/api/consultaContador', consultaContador.getConsulta)
router.get('/api/consultaSams', consultaContador.consultSam)


module.exports = router;