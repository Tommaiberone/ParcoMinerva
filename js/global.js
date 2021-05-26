//Controls the fade-in/fade-out of the bar
var barra = document.getElementById("navibar");
var prevScrollpos = window.scrollY;
var hoverSpace = $('body');

window.onscroll = function() {
        
    var currentScrollPos = window.scrollY;
        
    //Hides the bar if the cursor is under a certain threshold 
    hoverSpace.on('mousemove', function(event) {
            
        if(event.clientY < 150)
            barra.style.top = "0";
        else if (window.scrollY > 100)
            barra.style.top = "-300px";
    });
        
    //Hides the bar if the cuser scrolls down the page
    if (prevScrollpos > currentScrollPos) 
        barra.style.top = "0";
    else if(window.scrollY > 100)
        barra.style.top = "-500px";

    prevScrollpos = currentScrollPos;

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
    var UserDate = new Date($('#data').val());
    
    if(UserDate > CurrentDate){
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

function Bump_on_click_global () {
    window.scroll(0,870);
    $('.offerte .card').css({'animation' : 'pop 0.3s ease-in-out', 'animation-delay': '0.6s', 'animation-duration': '0.6s'} );
    setTimeout(reset_bump_global, 1200);
}

function reset_bump_global () {
    $('.offerte .card').css({'animation' : 'none'});
}


// nasconde/visualizza i bottoni di login, registrazione e logout
function login_signup_hide (){
    if (localStorage.getItem("email") || sessionStorage.getItem("email")) {
        $("#login").css("display","none");
        $("#signup").css("display","none");
        $("#logout").css("display","inline");
    }
    /*else {
        $("#login").css("display","inline");
        $("#signup").css("display","inline");
        $("#logout").css("display","none");
    }*/
}   

// logout -- pulisce sia localstorage che sessionstorage e reindirizza alla home
function logout() {
    if (confirm ("Sei sicuro di voler effettuare il logout?")) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = '../../index/index.html';
        alert("Hai effettuato il logout con successo");
    }    
}

    

