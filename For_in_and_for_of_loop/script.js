console.log("Example of for in loop");

const person = {fname:"mahesh" , lname:"Deshpande", age: 93 };

let tdocument ="";

for(let ele in person){
    tdocument += person[ele];
}

console.log("tdocumet :", tdocument);


console.log("Examples of for of loop");

const name = "exampleOfForOfLoop";

let text = "";

for(const anyVariable of name ){
    text += anyVariable +"\n";

}

console.log(text)