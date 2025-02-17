let btn=document.querySelector(".btn1");
let btn1=document.querySelector(".btn2");

btn.addEventListener("click",()=>{
    alert("btn1 is clicked");

})

btn1.addEventListener("click",()=>{
    alert("btn2 is clicked");
    console.log("btn clicked")
})
// let h1=document.createElement("h1");
// h1.innerText=("hello");
// document.body.appendChild(h1);