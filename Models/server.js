const express = require('express');
const cors = require( 'cors' );

class Server{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
        this.port = process.env.port;
    }
    middlewares(){
        this.app.use( express.static( 'public') )
        this.app.use( express.json() );
        this.app.use( cors() );
    }
    routes(){
        this.app.use( '/sam-commands', require( '../routes/pin' ) )
    }
    listen(){
        this.app.listen( this.port, ()=>{
            console.log(`Listening on the port ${this.port}`);
        });
    }

}
module.exports= Server;