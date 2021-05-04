
// wrapper to form validation functions
function validateForm() {
    var nome = $("#nome").val();
    var cognome = $("#cognome").val();
    var username = $("#username").val();
    var email = $("#email").val();
    var pass1 = $("#password1").val();
    var pass2 = $("#password2").val();



    if (validateNome(nome));
    
    if (validateCognome(cognome));

    if (validateUserName(username));

    if (validateEmail(email));

    if (validatePassword(pass1, pass2));

}

// validazione del nome
function validateNome(nome) {
    var len = nome.length;

    if (len == 0 || !(/^[A-Za-z\s]+$/.test(nome)) ) {
        alert("Devi inserire il tuo nome");
        return false;
    }

    if (len < 2){
        alert("Il tuo nome non può essere minore di 2 lettere");
        return false;
    }

    if (! isNaN(nome)) {
        alert ("Il tuo nome non può essere costituito da numeri");
        return false; 
    }
}

//validazione del cognome
function validateCognome(cognome) {
    var len = cognome.length;

    if (len == 0 || !(/^[A-Za-z\s]+$/.test(cognome))) {
        alert("Devi inserire il tuo cognome");
        return false;
    }

    if (len < 2){
        alert("Il tuo cognome non può essere minore di 2 lettere");
        return false;
    }

    if (! isNaN(cognome)) {
        alert ("Il tuo cognome non può essere costituito da numeri");
        return false; 
    }
}

//validazione dello user name
function validateUserName(username) {
    var len = username.length;

    if (len == 0) {
        alert("Devi inserire il tuo username");
        return false;
    }

    if (len < 2) {
        alert("Il tuo nome utente non può avere meno di due caratteri");
        return false;
    }
}

//validazione dell'email
function validateEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var len = email.length;

    if (len == 0){
        alert("Devi inserire la tua mail");
        return false;
    }

    if ( !(email.match(validRegex)) ) {
        alert("La tua mail deve essere del tipo nome@dominio.com/it");
        return false;
    }
}

//validazione delle password

function validatePassword(pass1, pass2) {
    var len1 = pass1.length;
    var len2 = pass2.length;

    if (len1 == 0) {
        alert("Devi inserire la password");
        return false;
    }

    if (len2 == 0 || len2 != len1) {
        alert("Le due password devono coincidere");
        return false;
    }

    if (len < 8 || len > 22) {
        alert("La password deve avere almeno 8 caratteri e al massimo 22");
        return false;
    }
}