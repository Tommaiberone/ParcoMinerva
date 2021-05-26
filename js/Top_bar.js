var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));

var HomeActive = '';
var preHome = '../index/';
if (dir == "/index") {
    HomeActive= 'active';
    preHome = '';
}
    
var AttrazioniActive = '';
var preAttrazioni = '../Attractions/';
if (dir == "/Attractions") {
    AttrazioniActive= 'active';
    preAttrazioni = '';
}

var ContattiActive = '';
var preContatti = '../contatti/';
if (dir == "/contatti") {
    ContattiActive= 'active';
    preContatti = '';
}

var BigliettiActive = '';
var preBiglietti = '../biglietti/';
if (dir == "/biglietti") {
    BigliettiActive= 'active';
    preBiglietti = '';
}


var contatti = ''+
'        <div id = "Wrapper">'+ //Opens a div that wraps all the content in the page (it's meant to
                                //have the bottom bar sticking to the bottom of the page even if the
                                //page content does not cover the entire screen)
    '        <div id = "HoverSpace" class = "container-fluid sticky-top">'+
    '            <br>'+
    '            <nav id = "navibar" class = "navbar navbar-expand-md navbar-light  border border-primary border-2 shadow ms-0 me-0 " style = "border-radius: 25px; background-color: #e3f2fd;">'+
    ''+             
    '                <!-- Logo -->'+
    '                <a class = "navbar-brand ms-3" href = "../index/index.html">'+
    '                    <img src = "../images/logo-sapienza-new.jpg" style = "width: 120px; height: 40px; margin-top: -10%; margin-bottom: -7%; margin-left: -8%;" class = "rounded rounded-pill">'+
    '                </a>'+
    ''+
    ''+
    '                <button style = "margin-right:3%;" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
    '                    <span  class="navbar-toggler-icon"></span>'+
    '                </button>'+
    ''+
    ''+
    '             <div class="collapse navbar-collapse" id="navbarSupportedContent">'+
    '                <!-- Links Home - Attrazioni - Contatti - Biglietti -->'+
    '                <ul class = "navbar-nav ms-auto">'+
    '                    <li class = "nav-item">'+
    '                        <a class = "nav-link ' + HomeActive + ' " href = "' + preHome + 'index.html"> <b> Home </b> </a>'+
    '                    </li>'+
    ''+
    '                    <li class = "nav-item">'+
    '                        <a class = "nav-link ' + AttrazioniActive + ' " href = "' + preAttrazioni + 'attractions.html"> <b> Attrazioni </b> </a>'+
    '                    </li>'+
    ''+
    '                    <li class = "nav-item">'+
    '                        <a class = "nav-link ' + ContattiActive + ' " href = "' + preContatti + 'contatti.html"> <b> Contatti </b> </a>'+
    '                    </li>'+
    ''+
    '                    <li class = "nav-item">'+
    '                        <a class = "nav-link ' + BigliettiActive + ' " href = "' + preBiglietti + 'biglietti.html"> <b> Biglietti </b> </a>'+
    '                    </li>'+
    '                </ul>'+
    ''+
    '                <!-- Link Login/SignUp -->'+
    '                <ul class = "navbar-nav ms-auto me-3">'+
    '                    <li class = "nav-item">'+
    '                        <a id = "signup" type = "button" class = "btn btn-primary rounded me-2" href = "../login-register/register.html"> <b> Registrati </b> </a>'+
    '                    </li>'+
    ''+
    '                    <li class = "nav-item">'+
    '                        <a id = "login" type = "button" class = "btn btn-primary rounded" href = "../login-register/login.html"> <b> Accedi </b> </a>'+
    '                    </li>'+
    ''+
    '                    <li class = "nav-item">'+
    '                        <a id = "logout" type = "button" class = "btn btn-danger rounded" onclick ="logout();"> <b> Logout </b> </a>'+
    '                    </li>'+
    ''+                    
    '                    <li class = "nav-item">'+
    '                        <a id = "acquista" type = "button" class = "btn btn-primary rounded" href = "../login-register/PHP/bentornato.php"> <b> Acquista </b> </a>'+
    '                    </li>'+
    ''+
    '                </ul>'+
    '              </div>'+
    '            </nav>'+
    '        </div>';
	
document.write(contatti);