
// wrapper to form validation functions
function validateForm(event) {

    var email = $("#email").val();
    var pass = $("#password").val();
    var checkbox = $('#checkBOX').is(":checked");

    if (! validateEmail(email)) return false;

    if (! validatePassword(pass)) return false; 

    //rememberMeCheck(checkbox, email);
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

// validazione del remember me
//N.B: se "ricordati di me" è checkato, lo username viene salvato nel localStorage, e verrà ricordato anche se il browser sarà chiuso
//     se "ricordati di me" NON è checkato, lo username viene salvato nel sessionStorage, e verrà dimenticato alla chiusura del browser 
/*function rememberMeCheck(checkbox, email){
    if (checkbox) localStorage.setItem("email", email);
    else sessionStorage.setItem("email", email);
}*/


// verifica che l'utente sia già loggato: se loggato reindirizza alla schermata di acquisto dei biglietti
function checkStorage() {
    if (localStorage.getItem("email") && localStorage.getItem("name")) window.location.href = './PHP/bentornato.php?name=' + localStorage.getItem("name") + '&email=' + localStorage.getItem("email");
}





