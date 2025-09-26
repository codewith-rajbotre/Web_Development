function main(){
    const name = "MyName"
    function ThisIsName(){
        console.log(name)
    }
    ThisIsName();
}
main()

function outer() {
  let count = 0; // variable in outer scope

  function inner() {
    count++; // inner function uses outer variable
    console.log("Count:", count);
  }

  return inner; // return the inner function
}

const counter = outer(); // outer executes once
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3


// Features of Closure:

function OuterCounter(){
    let count = 0 ;
    function innerIncrementByTwo(){
         count=count+2;
         console.log(count);
    }
    return innerIncrementByTwo;
}

const callerVariable = OuterCounter();
callerVariable();
callerVariable();