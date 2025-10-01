// console.log("hello js");


//Integer variable
let a;
a=5;
console.log(a);

//Integer contanst
const m=45;
console.log(m);

//boolean varible using let
let booleanVariable = true ;
console.log(booleanVariable);


//Array in JS
const person = ["Mahesh", "Ankush","Dattatray"];
console.log(person);

person[1]= "Anukush Lendve";
console.log(person);

//Objects

const objectExample ={a:1, b:2, c:3};
console.log(objectExample)

objectExample[a] = 45;
console.log(objectExample);


//Operators in JS

let a1 =45;
let a2= 2;

let a3= a1+a2;
let a4= a1-a2;
let a5 = a1**a2;
console.log(a3, a4, a5);



 let b1= 5;
 let b2 = 33;
 let b3= 5;
 let b4 ="5";
console.log(b3==b4);
console.log(b3===b4);
 console.log(b1==b2);
 console.log(b1===b2);

 console.log(b1==b3);
 console.log(b1===b3);

 //Condtional Statements

 let c1= 33;
 let c2= 45;

 if(c1==c2){
    console.log("Inside if");
 }
 else{
    console.log("Inside else");
 }

 //Nullish coalscing operator

 let l = "first" ;
 let o= null;
 let  p = "second";
let q = null;
 let c = l ?? o;
 let d = o ?? p;
 let e = o ?? q;

 console.log(c);
 console.log(d);
 console.log(e);


 //Loop Function
 function looping(){
      for(let i=3; i<12 ; i++){
        if(i==5){
            console.log("Before continue");
            continue;
            console.log("after continue");
        }
        console.log(i);
      }
 }
 looping()

 //String Function
 function stringsInJS(){
    let text = "HELLO WORLD";
    let char = text.charAt(0);
    let char2 = text.charCodeAt(0);
    console.log(char, char2);
    let letter = text.at(2);
    console.log(letter);

 }
 stringsInJS();

//Functions in JS

 function Hello(){
    return "Name";
 }
 let my = Hello();
 console.log(my);

 //Function to adding a number and return a value

 function add(){
    let a=5;
    let b= 3;
    return a+b;
 }

 let myAddition = add();
 console.log(myAddition);

 //Date Format in JS'
 const dates = new Date();
 console.log(dates.toDateString());

 console.log(dates.getFullYear());


 //Arrays in JS

 const arr = ["Easy" , "To", "Learn"];
 console.log(arr);
 console.log(arr.toString());
 console.log(arr.length);
 console.log(arr.reverse());





