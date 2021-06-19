function register() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    console.log('funcion registro')
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('register')
            if(document.getElementById('persona').checked){
                document.getElementById("signInForm").action = "/cuentausuario.html";
            }
            else{
                document.getElementById("signInForm").action = "/cuentaempresa.html";
            }
            document.querySelector('#signInForm').submit();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}