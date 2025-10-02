class Hello{
    constructor(){
         console.log("Constructor called");
    }
    printHello(){
           console.log("Hello, this is printHello function");
    }
}

class Wedding extends Hello{
    printWelcome(){
        console.log("Wedding");
    }
}

let w1 = new Wedding;
w1.printWelcome();
w1.printHello();

const h1 = new Hello;
h1.printHello();