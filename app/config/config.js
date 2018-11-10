const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
/**
 * This is a class for config
 */
module.exports = class Config {
    constructor(){
        const server = http.createServer(app);
        server.listen(3000,()=>console.log('server is run'));
    }

    setExpress(){
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}))
    }

}