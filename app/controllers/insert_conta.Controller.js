const { contadores } = require('../models/index')
// const { sam } = require('../models/index')
const { Router } = require('express');

const getContadores = async(req, res) =>{
    const
    {
       sam,
       tarjeta,
       c00,
       c01,
       c02,
       c03,
       c04,
       c05,
       c06,
       c07,
       c08,
       c09,
       c10,
       c11,
       c12,
       c13,
       c14,
       c15,
       c16,
       c17,
       c18,
       c19,
       c20,
       c21,
       c22,
       c23,
       c24,
       c25,
       c26,
       estatus,
       movimiento,
       folio,
       fecha_hora
    } = req.body
    // console.log(req.body)

    return await contadores.create({
        sam: req.body.sam,
        tarjeta: req.body.tarjeta,
         c00:req.body.c00,
         c01:req.body.c01,
         c02:req.body.c02,
         c03:req.body.c03,
         c04:req.body.c04,
         c05:req.body.c05,
         c06:req.body.c06,
         c07:req.body.c07,
         c08:req.body.c08,
         c09:req.body.c09,
         c10:req.body.c10,
         c11:req.body.c11,
         c12:req.body.c12,
         c13:req.body.c13,
         c14:req.body.c14,
         c15:req.body.c15,
         c16:req.body.c16,
         c17:req.body.c17,
         c18:req.body.c18,
         c19:req.body.c19,
         c20:req.body.c20,
         c21:req.body.c21,
         c22:req.body.c22,
         c23:req.body.c23,
         c24:req.body.c24,
         c25:req.body.c25,
         c26:req.body.c26,
        estatus: req.body.estatus,
        movimiento: req.body.movimiento,
        folio: req.body.folio,
        fecha_hora: req.body.fecha_hora,
    }).then(contadores => {
        if (contadores) {
            res.send(contadores);
        } else {
            res.status(400).send('Error inserting record');
        }
    })   
}

module.exports = {
    getContadores
}