
function rotateImage(ind){

    let test= document.getElementById("scrollImage"+ind);

    if (ind==1) {
        if(test.style.transform!="rotate(0deg)")
            test.style.transform="rotate(0deg)";
        else test.style.transform="rotate(180deg)";
    }

    else {
        // alert("giovanni");
        if(test.style.transform!="rotate(180deg)" )
            test.style.transform="rotate(180deg)";
        else test.style.transform="rotate(0deg)";
    }
        
    

}