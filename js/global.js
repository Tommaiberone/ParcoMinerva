//Controls the fade-in/fade-out of the bar
var barra = document.getElementById("navibar");
var prevScrollpos = window.scrollY;
var hoverSpace = $('body');

window.onscroll = function() {
        
    var currentScrollPos = window.scrollY;
        
    //Hides the bar if the cursor is under a certain threshold 
    hoverSpace.on('mousemove', function(event) {
            
        if(event.clientY < 150) {
            barra.style.top = "0";
        } else if (window.scrollY > 100){
            barra.style.top = "-300px";
        }
    });
        
    //Hides the bar if the cuser scrolls down the page
    if (prevScrollpos > currentScrollPos) {
        barra.style.top = "0";
    } else if(window.scrollY > 100){
        barra.style.top = "-300px";
    }
    prevScrollpos = currentScrollPos;

}

function update(val, num) {
    
    $('#range-value' + num).text(val)

    var total = parseInt($('#range-value1').text())*10;
    total += parseInt($('#range-value2').text())*12;
    total += parseInt($('#range-value3').text())*16;
    total += parseInt($('#range-value4').text())*100;

    $('#importo-totale').text(total);
}

    

