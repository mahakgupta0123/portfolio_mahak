let btn=document.querySelector("button");
let div=document.querySelector(".color");
let h1=document.querySelector("h1");
let button=document.querySelector(".redirect")
btn.addEventListener("click",()=>{
    h1.innerText=(`rgb(${randomColor()},${randomColor()},${randomColor()})`)
    div.style.backgroundColor=(`rgb(${randomColor()},${randomColor()},${randomColor()})`)
})

let randomColor=function(){
    let color1= Math.floor(Math.random()*255);
    return color1;
}

button.addEventListener("click", ()=>{
    // let a=document.createElement("a");
    // a.href="https://stackoverflow.com/questions/57394024/redirecting-page-from-form-with-addeventlistener-method"
    redirect();
})

function redirect(){
    window.location.href ="https://stackoverflow.com/questions/57394024/redirecting-page-from-form-with-addeventlistener-method"
}