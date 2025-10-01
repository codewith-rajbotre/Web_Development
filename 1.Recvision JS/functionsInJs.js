function Hello(){
    console.log("Hello function called");
}
Hello()

//Function expressions

const X = function(a,b){return (a*b)};
let z = X(3,2);
console.log(z);




//arrow function

const ar = (a,b)=>(a+b);
let x = ar(3,2);
console.log(x)


let ml = this;
console.log(ml);



const employee ={
    firstName: "Mandar",
    lastName: "Kul",
    fullName : function(){
        return this.firstName +" "+ this.lastName;
    }
}
console.log(employee.fullName())
