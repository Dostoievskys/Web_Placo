function register() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    console.log('funcion registro')
    console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('register')
            //document.querySelector('#signInForm').submit();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}