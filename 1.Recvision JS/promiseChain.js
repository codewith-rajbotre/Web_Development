function asyncFunction1(){
    return new Promise((resolve, reject)=>{
               setTimeout(()=>{
                    console.log("data1");
                    resolve("success");
               },3000)
    });
}
function asyncFunction2(){
    return new Promise((resolve, reject)=>{
               setTimeout(()=>{
                    console.log("data2");
                    resolve("success");
               },3000)
    });
}

console.log("Fetching data 1 ");
let p1 =asyncFunction1();
p1.then((res)=>{
    console.log(res);
})

console.log("Fetching data 2 ");
let p2 =asyncFunction2();
p2.then((res)=>{
    console.log(res);
})