const text = "Hi, I'm Shreya Bondre";
let index = 0;

function typing(){

document.querySelector(".typing").innerHTML =
text.slice(0,index++);

if(index > text.length){
index = 0;
}

}

setInterval(typing,150);