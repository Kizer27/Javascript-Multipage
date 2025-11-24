function gameList(){
        let newgame = document.createElement("li");
        newgame.innerHTML = prompt("What's your favorite video game?");
        document.getElementById("games").appendChild(newgame);
}