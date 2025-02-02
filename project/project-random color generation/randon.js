let btn=document.querySelector("button");
let div=document.querySelector(".color");
let h1=document.querySelector("h1");
btn.addEventListener("click",()=>{
    h1.innerText=(`rgb(${randomColor()},${randomColor()},${randomColor()})`)
    div.style.backgroundColor=(`rgb(${randomColor()},${randomColor()},${randomColor()})`)
})

let randomColor=function(){
    let color1= Math.floor(Math.random()*255);
    return color1;
}