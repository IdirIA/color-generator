const textContainer = document.querySelector("div");
const backGround = document.querySelector("body");

let red;
let green;
let blue;

setInterval(()=>{
    red = Math.floor(Math.random()*255);
    green = Math.floor(Math.random()*255);
    blue = Math.floor(Math.random()*255);
    textContainer.innerHTML=`rgb(${red}, ${green}, ${blue})`;
    backGround.style.background=textContainer.innerHTML;
},1000);