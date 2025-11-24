function dcList(){
        let newDC = document.createElement("li");
        newDC.innerHTML = prompt("What's your favorite attraction in DC?");
        document.getElementById("attractions").appendChild(newDC);
}

document.addEventListener('DOMContentLoaded', start) 
function start(){
    let capitol = document.getElementById("opener");
    let map = document.createElement("img");
    map.style.src = "https://upload.wikimedia.org/wikipedia/commons/f/f5/Map_of_usa_highlighting_dc.png"
}