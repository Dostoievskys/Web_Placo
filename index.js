//Se cargan los modulos necesarios
const express = require('express');
//const path = require('path');

//Se crea una express app 
const app = express();
//app.use(express.static(path.join(__dirname,'static')));

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/catalogo', (req, res) => {
    res.sendFile(__dirname + '/static/catalogo.html');
});


app.listen(3000);
console.log('Web in port 3000');