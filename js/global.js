var barra = document.getElementById("navibar");


//Controls the fade-in/fade-out of the bar
function hideIF() {
    var prevScrollpos = window.pageYOffset;
    var hoverSpace = $('body');

    window.onscroll = function() {
        
        var currentScrollPos = window.pageYOffset;
        
        //Hides the bar if the cursor is under a certain threshold 

        if (currentScrollPos > 100) {

            hoverSpace.on('mousemove', function(event) {
            
                if(event.clientY < 150) {
                    barra.style.top = "0";
                } else {
                    barra.style.top = "-300px";
                }
            });
        }
        
        //Hides the bar if the cuser scrolls down the page

        if (prevScrollpos > currentScrollPos) {
            barra.style.top = "0";
        } else if(currentScrollPos > 100){
            barra.style.top = "-300px";
        }
        prevScrollpos = currentScrollPos;

    }

    
}



