//import {connection} from '../mysql'
function datos(){
    //import { insertCuenta } from '../mysql';
    const name = document.querySelector('#name').value; 
    const cedula = document.querySelector('#cedula').value; 
    const email = document.querySelector('#email').value; 
    const telefono = document.querySelector('#telefono').value; 
    const dir = document.querySelector('#direccion').value; 
    const num = document.querySelector('#number').value;
    const direc = dir + " " + num;
    
    //insertCuenta(cedula,name,telefono,email,direc);
    console.log(name, cedula, email, telefono, direc);
}