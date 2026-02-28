//1. Callback funtion

function first(name, callback) {
  console.log(" first function : " + name);
  callback();
}

function second() {
  console.log(" second function : ");
}

first(" person name is vaibhav ", second);

//2. Timeout Function
console.log("start");

setTimeout(function(){
    console.log("inside set timeout");
}, 2000);

console.log("end");

//3. Callback handling functions

function calc (x, y, callback){
    return callback(x, y);
}

function add( a,b ){
       return a+b;
}

function mul( a,b ){
    return a*b;
}
result = calc(10, 12, mul);
console.log("Calc result is :",result);

// document 

document.getElementById("btn1").addEventListener("click", function(){
    console.log("Button clicked");
});

//Problem with Callback (callback hell problem arise)


function first(callback){
      setTimeout(()=>{
        console.log("Set timeout function first");
        callback();
      }, 2000);
}

function second(callback){
    setTimeout(()=>{
        console.log("Set timeout function second");
        callback();
    }, 2000);
}

function third(callback){
   setTimeout(()=>{
    console.log("Set timeout function third");
    callback();
   },2000);
}


first(()=>{
    second(()=>{
        third(()=>{
            console.log("inside callback hell");
        })
    })
})