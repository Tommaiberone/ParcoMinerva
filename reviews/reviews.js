
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


