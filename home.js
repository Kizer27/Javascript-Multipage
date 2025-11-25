document.addEventListener('DOMContentLoaded', start) 
function start(){
    let subtitle = document.createElement("h2");
    subtitle.innerHTML = "Click the Names to Navigate This Page";
    subtitle.style.textAlign = "center";
    let title = document.getElementById("intro");
    title.addEventListener("click", sizer);
    title.after(subtitle);

    function sizer(){
        this.style.fontSize = "70px";
    }

    document.addEventListener("keydown", function(e){
        if(e.code == "Space"){
            e.preventDefault();
            colorChange();
        }
    });
}

function colorChange(){
    if(document.body.style.backgroundColor == "lightblue"){
        document.body.style.backgroundColor = "white";
    }else {
        document.body.style.backgroundColor = "lightblue";
    }
}