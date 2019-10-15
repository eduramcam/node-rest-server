require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
const mongoose = require('mongoose');


// body parser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/usuario'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) throw err;
        console.log('Base de datos ONLINE');
    });

app.listen(process.env.PORT, () => {
    console.log(`Escuchando por el puerto: ${process.env.PORT}`);
});