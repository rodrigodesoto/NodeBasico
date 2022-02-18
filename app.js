const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');

const url = config.bd_string;
const options = { useNewUrlParser: true };
mongoose.connect(url, options);
//mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('Erro ao conectar o Banco de Dados: '+ err);
})

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do Banco de Dados!');
})

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao Banco de Dados!');
})


//BODY PARSER
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const indexRoute = require('./Routes/index');
const userRoute = require('./Routes/users');

app.use('/', indexRoute);
app.use('/users', userRoute);

app.listen(3000);

module.exports = app;