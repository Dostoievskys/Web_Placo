function go() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('sign up')
            user = userCredential;
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                  var uid = user.uid;
                  console.log('uid: ', uid); //Usuario identificado
                } else {
                  // User is signed out
                }
              });
            // document.querySelector('#signInForm').submit();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}
let res = document.querySelector("#res");

res.addEventListener("click", function() {
    const email = document.querySelector('#emailR').value;
    firebase.auth().sendPasswordResetEmail(email)
        .then(function() {
            console.log('send email')
            document.querySelector('#resetForm').submit();
        })
})