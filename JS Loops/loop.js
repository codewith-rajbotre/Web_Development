let b=2;

for(let a=1;a<=10;a++){
    let c=a*b;
    console.log("\n ",c);
}


//FOR_OF LOOP IN JS
let str="Raj JARA";
let size=0;
for (let val of str){
    console.log(val);
    size++;
}
console.log("Size of String str is  :",size);


//FOR_IN LOOP IN JS
let student={
    name:"Raj",
    age:20,
    cgpa:8.5,
    isPass:"PASS",
}
for(let key in student){
    console.log("Key:",key,", Value:",student[key]);
}