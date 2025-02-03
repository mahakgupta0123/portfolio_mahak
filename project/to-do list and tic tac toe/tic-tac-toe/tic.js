let player1=document.querySelector(".player1");
let player2=document.querySelector(".player2");
let h1=document.querySelector("h1");
player1.addEventListener("click",()=>{
    h1.innerText="now player1 will play"
   h1.style.backgroundColor="greenyellow";
})

player2.addEventListener("click",()=>{
    h1.innerText="now player2 will play"
   h1.style.backgroundColor="green";
})
