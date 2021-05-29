
function update(val) {

    stringa=repeat(val);
    $('#range-stelline').html(stringa);
}

function repeat(val) {
    stella= "&#9733";
    stringa="";
    for (let i = 0; i < val; i++) {
        stringa +=stella;   
    }

    return stringa;

}

function accedi_o_recensisci() {
    setTimeout(accedi_o_recensisci2, 300);
    
}

function accedi_o_recensisci2() {
    if(sessionStorage.getItem('email') || localStorage.getItem('email')) {
        $('#accedi_per').css('display','none');
        $('#recensisci').css('display','inline-block');
    }
    else {
        $('#accedi_per').css('display','inline-block');
        $('#recensisci').css('display','none');
    }
}


