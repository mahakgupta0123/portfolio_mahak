let player1=document.querySelector(".player1");
let player2=document.querySelector(".player2");
player1.addEventListener("click",()=>{
    console.log("player1 is playing");
    let div=document.createElement("div");
    div.innerText="now player1 will play"
    player1.appendChild(div)
})

player2.addEventListener("click",()=>{
    console.log("player2 is playing");
})
