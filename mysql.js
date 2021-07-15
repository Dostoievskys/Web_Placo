// import { createConnection } from 'mysql'
const mysql = require('mysql')

const connection = createConnection({
    host:'us-cdbr-east-04.cleardb.com',
    user:'b6234591d20298',
    password:'b7b86aa0',
    database:'heroku_8a3f56e4dcd4acf'
})

connection.connect( (err) =>{
    if(err) throw err
    console.log('La conexion funciona')
})

/*connection.query('SELECT id, nombre_producto,stock FROM producto',(err,rows) =>{
    if(err) throw err
    console.log('los datos son estos:\n')
    console.log(rows)
})*/

function insertCuenta(c,n,t,e,d){
    const ins = 'INSERT INTO usuario_persona (cedula, nombre, telefono_contacto, correo_contacto, direccion) VALUES($1,$2,$3$,$4,$5)';
    connection.query(ins,[c,n,t,e,d]);
}

connection.end()
export default {insertCuenta};