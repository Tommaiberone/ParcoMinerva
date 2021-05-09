
// wrapper to form validation functions
function validateForm(event) {

    var email = $("#email").val();
    var pass = $("#password").val();

    if (! validateEmail(email)) return false;

    if (! validatePassword(pass)) return false; 
}

//validazione dell'email
function validateEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var len = email.length;

    if (len == 0){
        alert("Inserisci l'email");
        return false;
    }

    if ( !(email.match(validRegex)) ) {
        alert("La tua mail deve essere del tipo nome@dominio.com/it");
        return false;
    }
    return true;
}

//validazione delle password
function validatePassword(pass) {
    var len = pass.length;

    if (len == 0) {
        alert("Inserisci la password");
        return false;
    }

    if (len < 8 || len > 22) {
        alert("La password deve avere almeno 8 caratteri e al massimo 22");
        return false;
    }
    return true;
}