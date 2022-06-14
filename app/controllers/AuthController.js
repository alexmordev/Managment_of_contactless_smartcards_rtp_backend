const { user } = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { password } = require('../../config/database')
const authConfig = require('../../config/auth')
const {cookieParser} = require('../server')
const { Router } = require('express');



module.exports = {

    //Login
    login(req, res) {

        const { email, password } = req.body;

        //Buscar users

        user.findOne({
            where: {
                email,
            }
        }).then(user => {
            if (!user) {
                res.status(406).json({ message: 'User not found', code:406 })
            } else {
                if (bcrypt.compareSync(password, user.password)) {

                    let token = jwt.sign({ user: user }, authConfig.secret, {
                        expiresIn: authConfig.expires //expiresIn-Tiempo que dura la expiracion
                    })

                    res.json({
                        user,
                        token,
                    })

                } else {
                    res.status(401).json({ msg: 'Incorrect password',code:401 })
                }
            }
        }).catch(err => { res.status(500).json(err) });

    },

    //Función de cookie
    coockie(req, res) {
        // res.setHeader('Set-Cookie', 'newUser=true')
        res.cookie('newUser', false)
        res.cookie('isEmployee', true)

        res.send('tienes las galletas!')

    },

    // Función de logout

    logout(req, res) {
        res.cookie('token','', {
            maxAge:1
        })
        res.redirect('/')
    },


    //Funcion para registro
    check_in(req, res) {
        //Encriptar contraseña
        res.lo
        let password = bcrypt.hashSync(req.body.password, +authConfig.rounds);//-Llamo de .env a rounds



        //Creación de users
        user.create({
            name: req.body.name,
            email: req.body.email,
            password: password
        }).then(user => {
            let token = jwt.sign({ user: user }, authConfig.secret, {
                expiresIn: authConfig.expires //expiresIn-Tiempo que dura la expiracion
            })

            res.json({
                user,
                token,
            })
        }).catch(err => {
            res.status(500).json(err)
        })
    }
}