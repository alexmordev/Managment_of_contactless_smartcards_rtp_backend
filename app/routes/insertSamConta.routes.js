const express = require('express');
const router = express.Router();

const contador = require('../controllers/insert_conta.Controller');
const sam = require('../controllers/insert_sam.Controller');


//ruta pruebaController
router.post( '/api/contadores',contador.getContadores )
router.post( '/api/sams',sam.getSams )


module.exports = router;