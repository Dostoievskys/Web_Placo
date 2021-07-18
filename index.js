// * Se cargan los modulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const {Productos} = require('./static/js/database/mysql');
const app = express(); //Se crea una express app 

// * Elementos que necesita usar la app
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: false })); //extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)

// * Rutas GET
app.get('/', (req, res) => { //inicio
    res.sendFile(__dirname + '/index.html');
});

app.get('/catalogo', (req, res) => { //catalogo
    Productos();
    res.sendFile(__dirname + '/static/catalogo.html');
});

app.get('/contacto', (req, res) => { //contacto
    res.sendFile(__dirname + '/static/contacto.html');
});

// app.get('/catalogo/pedido', (req, res) => { //pedido
//     res.sendFile(__dirname + '/static/pedido.html');
// });

app.post('/catalogo/pedido', (req, res) => { //pedido
    console.log(req.body)
    // let datosjs = rows;
    // let data = JSON.stringify(datosjs);
    // fs.writeFileSync('./static/js/prodDatos.json', data);
    
    res.sendFile(__dirname + '/static/pedido.html');
});

app.get('/catalogo/pedido/user/terms', (req, res) => {
    res.sendFile(__dirname + '/static/terminos/terms.html');
});

app.listen(3000);
console.log('Web in port 3000');