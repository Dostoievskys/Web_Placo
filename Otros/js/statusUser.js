firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("cuenta").style.display = "block";
        document.getElementById("cerrarSesion").style.display = "block";
    } else {
        // No user is signed in.
    }
});