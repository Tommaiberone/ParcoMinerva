
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
        alert("Inserisci un nome valido");
        return false;
    }

    if (len < 2){
        alert("Inserisci un nome di almeno 2 lettere");
        return false;
    }

    if (! isNaN(nome)) {
        alert ("Non inserire numeri nel campo \"nome\"");
        return false; 
    }
}

//validazione del cognome
function validateCognome(cognome) {
    var len = cognome.length;

    if (len == 0 || !(/^[A-Za-z\s]+$/.test(cognome))) {
        alert("Inserisci un cognome valido");
        return false;
    }

    if (len < 2){
        alert("Inserisci un cognome di almeno 2 lettere");
        return false;
    }

    if (! isNaN(cognome)) {
        alert ("Non inserire numeri nel campo \"cognome\"");
        return false; 
    }
}

//validazione dello user name
function validateUserName(username) {
    var len = username.length;

    if (len == 0) {
        alert("Inserisci un username");
        return false;
    }

    if (len < 2) {
        alert("Inserisci un nome utente di almeno 2 lettere");
        return false;
    }
}

//validazione dell'email
function validateEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var len = email.length;

    if (len == 0){
        alert("Inserisci una email");
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
        alert("Inserisci una password");
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