const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando App
const app = express();

//Edited

try {

    //iniciando o DB
    mongoose.connect('mongodb://localhost:27017/nodeapi',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });


    requireDir('./src/models');
    const Product = mongoose.model('Product');

    app.use(express.json());
    app.use(cors())
    app.use('/api', require('./src/routes'));

    app.listen(3001);
    
    console.log('database set');

} catch (error) {
    console.error("can't start database");
    console.error(error);
}

