console.log("This is a project related to DOM.");
window.alert("Hello this is a website using the concepts of DOM") ;
let a=document.getElementById("one");
let b=document.getElementsByClassName("FirstClass");
console.log(b);

let c=document.getElementsByTagName("p");
console.log(c);

//Query Selector
let q=document.querySelector("p");//First Element
console.log(q);
let l=document.querySelectorAll("p");//All elements
console.log(l);
let m=document.querySelectorAll(".FirstClass");//First Element
console.log(m);



