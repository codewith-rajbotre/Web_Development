// let promise = new Promise((resolve, reject)=>{
//         console.log("I am a promise");
// })
// console.log(promise);


const getPromise = ()=>{
   return new Promise((resolve, reject)=>{
    console.log("I am a Promise");
    // resolve("success");
    reject("error Comes");

  });
};

let promise = getPromise();
promise.then((res)=>{
  console.log("Promise Fullfilled",res);
});

promise.catch((err)=>{
  console.log("error occoured!!", err);
});


//Promise example 

// function getData(getDataId, getNextData){
//   return new Promise((resolve, reject)=>{
//          setTimeout(()=>{
//             console.log("data",getDataId);
//             resolve("Success")
//             if(getNextData){
//               getNextData();
//             }
//          },2000);
//   });
// }