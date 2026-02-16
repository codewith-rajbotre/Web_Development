const sets = new Set([11,21,32,4,23]);
document.getElementById("h1element").innerHTML = "The set has " + sets.size + " values";
let value = 0;


let letters = new Set(['b', 'b', 'c', 'f']);

let text = "";
for (const x of letters){
       text +=x;
       console.log(text);
}

console.log(letters)
letters.add('8');
letters.add('2ewoi');
console.log(letters)

console.log(letters.size);


let textValue = "";

letters.forEach(function(value){
    textValue +=value;
});

console.log(textValue)


const A = new Set(['1', '5', '6']);
const B = new Set(['2', '5', '8']);

const U = A.union(B);
console.log("Union of set A and B: ", U);
const C = A.intersection(B);
console.log("Intersection of set A and B : ",C);

