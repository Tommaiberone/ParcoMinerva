
// wrapper to form validation functions
function validateForm(event) {

    var email = $("#email").val();
    var pass = $("#password").val();
    var checkbox = $('#checkBOX').is(":checked");

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

// verifica che l'utente sia già loggato: se loggato reindirizza alla schermata di acquisto dei biglietti
function checkStorage() {
    if (localStorage.getItem("email") && localStorage.getItem("name")) 
        window.location.href = './PHP/bentornato.php?name=' + localStorage.getItem("name") + '&email=' + localStorage.getItem("email");
    else if (sessionStorage.getItem("email") && sessionStorage.getItem("name")) 
        window.location.href = './PHP/bentornato.php?name=' + sessionStorage.getItem("name") + '&email=' + sessionStorage.getItem("email");
}

// Aggiorna il costo totale dei biglietti scelti
function update(val, num) {
        
    // Disattiva i pulsanti se la data inserita è precedente a quella odierna
    if (num==5 && !CheckDate()) {
        $('#acquista').removeAttr("enabled");
        $('#amico').removeAttr("enabled");
        $('#acquista').attr("disabled","disabled");
        $('#amico').attr("disabled","disabled");
    }
    
    // Riattiva i pulsanti se la data è stata inserita correttamente
    if (num==5 && CheckDate()) {
        $('#acquista').removeAttr("disabled");
        $('#amico').removeAttr("disabled");
        $('#acquista').attr("enabled","enabled");
        $('#amico').attr("enabled","enabled");
    }
    
    // Fa comparire la data per i biglietti base
    else if(num==1 && val!=0) {
        $('#data-biglietto').css("display", "inline");

        // Disattiva i pulsanti se la data non è inserita
        if (!CheckDate()) {
            $('#acquista').removeAttr("enabled");
            $('#amico').removeAttr("enabled");
            $('#acquista').attr("disabled","disabled");
            $('#amico').attr("disabled","disabled");
        }
    }
        
    else if(num==1 && val==0) {
        $('#data-biglietto').css("display", "none");
        $('#acquista').removeAttr("disabled");
        $('#amico').removeAttr("disabled");
        $('#acquista').attr("enabled","enabled");
        $('#amico').attr("enabled","enabled");
    }

    $('#range-value' + num).text(val);

    var total = parseInt($('#range-value1').text())*10;
    total += parseInt($('#range-value2').text())*12;
    total += parseInt($('#range-value3').text())*16;
    total += parseInt($('#range-value4').text())*100;

    $('#importo-totale').text(total);
}

// Verifica che la data sia maggiore di quella odierna
function CheckDate() {

    var CurrentDate = new Date();
    console.log("CurrentDate = " + CurrentDate);

    var UserDate = new Date($('#data').val());
    UserDate.setHours(UserDate.getHours() + 15);
    console.log("UserDate = " + UserDate);

    if(UserDate >= CurrentDate ){
        return true;
    }else{
        return false;
    }
}

// Verifica che si sia comprato almeno un biglietto e rimanda alla schermata di ringraziamento
function verify() {
    if($('#importo-totale').text()==0){
        alert("Scegli almeno un biglietto da acquistare");
        return false;
    } return true;
}



