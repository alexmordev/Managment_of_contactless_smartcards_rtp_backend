const express = require('express')
const {logger} = require('./helpers/logger.js')
const { sequelize } = require('./models/index');
const cors = require('cors')

// logger.info('hello world')
class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Middlewares-funcion quese ejecuta al levantar el servidor
    this.middleware();
    this.app.use(express.json());

    //Rutas de api
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use( cors() );
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {

    this.app.use(require('./routes/routes'))
    // this.app.use( '/sam-commands', require( '../routes/pin' ) )

  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log('Conectado al servidor de RTP', process.env.PORT)
      sequelize.authenticate().then(() => {
        console.log('Connected to the database');
      })
      
    })


  }
}

module.exports = Server;
