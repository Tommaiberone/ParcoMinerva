
// wrapper to form validation functions
function validateForm(event) {

    var nome = $("#nome").val();
    var cognome = $("#cognome").val();
    var username = $("#username").val();
    var email = $("#email").val();
    var pass1 = $("#password1").val();
    var pass2 = $("#password2").val();

    if (! validateNome(nome)) return false; 
    
    if (! validateCognome(cognome)) return false; 

    if (! validateUserName(username)) return false; 

    if (! validateEmail(email)) return false;

    if (! validatePassword(pass1, pass2)) return false; 
}

function validateFormIntestatario(event) {

    var email = $("#emailAmico").val();
    var nome = $("#nomeAmico").val();
    var cognome = $("#CognomeAmico").val();
    
    if (! validateEmail(email)) return false;

    if (! validateNome(nome)) return false; 
    
    if (! validateCognome(cognome)) return false; 

    return true;
    
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
    return true;
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
    return true;
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
    return true;
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
    return true;
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

    if (len1 < 8 || len1 > 22) {
        alert("La password deve avere almeno 8 caratteri e al massimo 22");
        return false;
    }
    return true;
}


// verifica che l'utente sia già loggato: se loggato reindirizza alla schermata di acquisto dei biglietti
function checkStorage() {
    if (sessionStorage.getItem("email")) window.location.href = './PHP/bentornato.php?name=' + sessionStorage.getItem("email");

    else if (localStorage.getItem("email")) window.location.href = './PHP/bentornato.php?name=' + localStorage.getItem("email");
}


// codice del form della funzionalità di "regala i biglietti ad un amico"
$("#regalaBTN").click(function(event) {

    if (!validateFormIntestatario()) return false;

    var acquistoForm = $('#acquistoForm').serialize();
    console.log(acquistoForm);
    
    var intestatario = $("#intestatario").serialize();
    console.log(intestatario);

    var toSubmit = acquistoForm + "&" + intestatario;
    console.log(toSubmit);

    if (localStorage.getItem('name')) {
        var postCheck = $.post('grazie.php?name=' + localStorage.getItem('name'), toSubmit);
        if (postCheck) {
            console.log("local");
            window.location.href = 'grazie.php?name=' + localStorage.getItem('name');
            return false;
        }
        else alert("Qualcosa è andato storto");
    }
    else if (sessionStorage.getItem('name')) {
        var postCheck = $.post('grazie.php?name=' + sessionStorage.getItem('name'), toSubmit);
        if (postCheck) {
            console.log("session");
            window.location.href = 'grazie.php?name=' + sessionStorage.getItem('name'); 
            return false;
        }
        else alert("Qualcosa è andato storto");
    }

});
