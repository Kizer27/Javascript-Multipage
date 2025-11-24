document.addEventListener('DOMContentLoaded', start) 
function start(){
    let title = document.getElementById("intro");
    title.addEventListener("click", sizer);

    function sizer(){
        this.style.fontSize = "70px";
    }
}