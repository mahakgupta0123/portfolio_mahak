let player1=document.querySelector(".player1");
let player2=document.querySelector(".player2");
let h1=document.querySelector("h1");
const allDivs = [...document.querySelectorAll('.one div, .two div, .three div')];
let currentPlayer="player1"

player1.addEventListener("click",()=>{
    h1.innerText="now player1 will play"
   h1.style.backgroundColor="greenyellow";
   currentPlayer="player1";
})

player2.addEventListener("click",()=>{
    h1.innerText="now player2 will play"
   h1.style.backgroundColor="green";
   currentPlayer="player2"
})

allDivs.forEach(div => {
    div.addEventListener('click', function() {
        if (currentPlayer === "player2") {
            div.style.backgroundColor = "green";
        } else {
            div.style.backgroundColor = "greenyellow";
        }
    });
});