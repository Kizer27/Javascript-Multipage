document.addEventListener('DOMContentLoaded', start) 
function start(){
    let poster = document.getElementById("movieimg");
    let subtitle = document.createElement("p");
    subtitle.innerHTML = "Princess Bride Movie Poster";
    poster.after(subtitle); 
}
alert("Did  you know princesss Bride was based off a book?")