console.log("This is Inside Promise");
let prom1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Yes I have done Promise");
        resolve("Hello");
    },3000);


  }  )
  prom1.then((a)=>{
    console.log(a);
  }).catch((err)=>{
    console.log(err);
  })
