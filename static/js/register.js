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

function register(email,password){
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('register')
            user = userCredential.apiKey;
            console.log('user: ',user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Error: ',errorCode)
        });
}

module.exports = register;