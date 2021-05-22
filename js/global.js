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
    
    $('#range-value' + num).text(val)

    var total = parseInt($('#range-value1').text())*10;
    total += parseInt($('#range-value2').text())*12;
    total += parseInt($('#range-value3').text())*16;
    total += parseInt($('#range-value4').text())*100;

    $('#importo-totale').text(total);
}

// Verica che si sia comprato almeno un biglietto e rimanda alla schermata di ringraziamento
function verify() {
    if($('#importo-totale').text()==0) alert("Scegli almeno un biglietto da acquistare");
    else window.location.href = "../../index/grazie.html";
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
    if (sessionStorage.getItem("email") || localStorage.getItem("email")) {
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
        alert("Hai effettuato il logout con successo");
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = '../../index/index.html';
    }    
}

    

