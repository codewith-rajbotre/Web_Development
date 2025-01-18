let  h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+" from Apna College";
console.dir(h2.innerText);
let divs=document.querySelectorAll(".box");
console.log(divs);
let index=1;
for (div of divs){
    div.innerText='new unique value  index ${index}';
    index ++;
}