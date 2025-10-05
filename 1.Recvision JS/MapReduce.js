
//Map Function

const elements =[1,32,2,53,6,3];

const elements2 = elements.map(function(n){
    return n*n;
})

const ele = elements.map(function(n){
    return n+2;
})
console.log("Map with +2 : ",ele)
console.log(elements2)
const sum = elements.map(function(n){
    return n+n;
})
console.log(sum);

//Reduce Function

console.log("Reduce function: ");

const numbers=[1,2,3,4,5,1];
const sumOfAllValues = numbers.reduce(function(acc, n){
   return acc+=n;
})
console.log(sumOfAllValues);

console.log(numbers.includes(3));
console.log(numbers.includes(44));