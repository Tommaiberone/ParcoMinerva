
// When the user scrolls down, it hides the navbar
function hideOnScroll() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navibar").style.top = "0";
        } else {
            document.getElementById("navibar").style.top = "-300px";
        }
        prevScrollpos = currentScrollPos;
    }
}






