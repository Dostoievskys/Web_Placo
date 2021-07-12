const mysql = require('mysql')
//const { hostname } = require('os')

const connection = mysql.createConnection({
    host:'us-cdbr-east-04.cleardb.com',
    user:'b6234591d20298',
    password:'b7b86aa0',
    database:'heroku_8a3f56e4dcd4acf'

})

connection.connect( (err) =>{
    if(err) throw err
    console.log('La conexion funciona')

})

connection.query('SELECT id, nombre_producto,stock FROM producto',(err,rows) =>{
    if(err) throw err
    console.log('los datos son estos:\n')
    console.log(rows)

})

connection.end()