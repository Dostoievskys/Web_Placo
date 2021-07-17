// * Se cargan los modulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const {insertPersona, insertEmpresa, Productos} = require('./static/database/mysql');
//const path = require('path');
const app = express(); //Se crea una express app 

// TODO Firebase *************************************
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyBGB3dHFcJSDKZOquvZyzTuODwvjKNZgW0",
    authDomain: "web-placo-f94d8.firebaseapp.com",
    projectId: "web-placo-f94d8",
    storageBucket: "web-placo-f94d8.appspot.com",
    messagingSenderId: "716112899362",
    appId: "1:716112899362:web:34b0c713a5433699fbc97b",
    measurementId: "G-21WQ2XFSBJ"
};
firebase.initializeApp(firebaseConfig);
// TODO ***********************************************

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

// app.get('/nosotros', (req, res) => { //nosotros
//     res.sendFile(__dirname + '/static/nosotros.html');
// });

app.get('/inicioSesion', (req, res) => { //inicio sesion
    res.sendFile(__dirname + '/static/login.html');
});

app.get('/register', (req, res) => { //registro
    res.sendFile(__dirname + '/static/register.html');
});

app.get('/register/user/persona', (req, res) => {
    res.sendFile(__dirname + '/static/persona.html');
});

app.get('/register/user/empresa', (req, res) => {
    res.sendFile(__dirname + '/static/empresa.html');
});

app.get('/register/user/terms', (req, res) => {
    res.sendFile(__dirname + '/static/terminos/terms.html');
});

// * Rutas POST
app.post('/registerdata', (req, res) => { //registro POST
    //Variables
    const eleccion = req.body.tuser;
    const email = req.body.email;
    const pass = req.body.password;
    // ? Creacion de JSON 
    // let data = JSON.stringify(cor);
    // fs.writeFileSync('./static/js/correo.json', data);
    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((userCredential) => {
            console.log('register')
            if(eleccion == 'persona'){
                console.log('Persona');
                res.redirect('/register/user/persona');
            }
            if(eleccion == 'empresa'){
                console.log('Empresa');
                res.redirect('/register/user/empresa');
            }
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Error: ',errorCode)
        });
});

app.post('/datosUsuario', (req, res) => {
    //let num1=req.body.numero1;
    const name = req.body.name; 
    const cedula = req.body.cedula; 
    const email = req.body.email; 
    const telefono = req.body.telefono; 
    const dir = req.body.direccion; 
    const num = req.body.number;
    const direc = dir + " " + num;
    // const ins = 'INSERT INTO usuario_persona (cedula, nombre, telefono_contacto, correo_contacto, direccion) VALUES($1,$2,$3$,$4,$5)';
    // connection.query(ins,[cedula,name,telefono,email,direc]);
    insertPersona(name, cedula, email, telefono, direc);
    console.log(name, cedula, email, telefono, direc);
    res.send('datos enviados');
});

app.post('/datosEmpresa', (req, res) => {
    //let num1=req.body.numero1;
    const name = req.body.name; 
    const nit = req.body.nit; 
    const email = req.body.email; 
    const telefono = req.body.telefono; 
    const dir = req.body.direccion; 
    const num = req.body.number;
    const direc = dir + " " + num;
    // const ins = 'INSERT INTO usuario_persona (cedula, nombre, telefono_contacto, correo_contacto, direccion) VALUES($1,$2,$3$,$4,$5)';
    // connection.query(ins,[cedula,name,telefono,email,direc]);
    insertEmpresa(name, nit, email, telefono, direc);
    console.log(name, nit, email, telefono, direc);
    res.send('datos enviados');
});

app.listen(3000);
console.log('Web in port 3000');