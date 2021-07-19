function validar(valor){
    if(valor == ''){
        return true;
    }
    else{
        return false;
    }
}
function dataSave(){
    const name = document.getElementById('nombre');
    const email = document.getElementById('correo');
    const cedula = document.getElementById('cedula');
    const phone = document.getElementById('telefono');
    const direc = document.getElementById('direccion');
    const number = document.getElementById('numero');
    const city = document.getElementById('ciudad');

    name.readOnly = true;
    email.readOnly = true;
    cedula.readOnly = true;
    phone.readOnly = true;
    direc.readOnly = true;
    number.readOnly = true;
    city.readOnly = true;

    // if(validar(name.value) && validar(email.value) && validar(cedula.value) && validar(phone.value) && validar(direc.value) && validar(number.value) && validar(city.value) == false){
    //     name.readOnly = true;
    //     email.readOnly = true;
    //     cedula.readOnly = true;
    //     phone.readOnly = true;
    //     direc.readOnly = true;
    //     number.readOnly = true;
    //     city.readOnly = true;
    // }
    // else if(validar(name.value) || validar(email.value) || validar(cedula.value) || validar(phone.value) || validar(direc.value) || validar(number.value) || validar(city.value) == true){
    //     alert('Por favor, llene todos los datos')
    // }
    
}

function dataEdit(){
    const name = document.getElementById('nombre');
    const email = document.getElementById('correo');
    const cedula = document.getElementById('cedula');
    const phone = document.getElementById('telefono');
    const direc = document.getElementById('direccion');
    const number = document.getElementById('numero');
    const city = document.getElementById('ciudad');

    name.readOnly = false;
    email.readOnly = false;
    cedula.readOnly = false;
    phone.readOnly = false;
    direc.readOnly = false;
    number.readOnly = false;
    city.readOnly = false;
}