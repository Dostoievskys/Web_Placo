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
    var Acart = [];
    var cart = {
        producto: '',
        price: '',
        cant: ''
    }
    var Ckeys = Object.keys(req.body)
    var Cvalues = Object.values(req.body)
    var total = req.body.total
    
    for(var j = 1 ; j <= total ; j++){
        var item = 'item_name_'+j;
        var amount = 'amount_'+j;
        var quantity = 'quantity_'+j;
        for(var i = 5 ; i < Ckeys.length ; i++){
            if(Ckeys[i] == item){
                cart.producto = Cvalues[i];
            }
            else if(Ckeys[i] == amount){
                cart.price = Cvalues[i];
            }
            else if(Ckeys[i] == quantity){
                cart.cant = Cvalues[i];
            }
            else{
                // console.log("Carrito Vacio")
            }
        }
        Acart.push(cart);
    }
    let data = JSON.stringify(Acart);
    fs.writeFileSync('./static/js/carrito.json', data);

    res.sendFile(__dirname + '/static/pedido.html');
});

app.get('/catalogo/pedido/user/terms', (req, res) => {
    res.sendFile(__dirname + '/static/terminos/terms.html');
});

app.get('/catalogo/pedido/PagoRealizado', (req, res) => {
    res.sendFile(__dirname + '/static/recibo.html');
});

app.listen(3000);
console.log('Web in port 3000');