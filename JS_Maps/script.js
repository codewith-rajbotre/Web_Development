const MapExample = new Map();

MapExample.set(1, "Buggati");
MapExample.set(2, "Rolls Royce");
MapExample.set(3, "Range Rover");

console.log(MapExample);


const bikes = new Map([
    ['A', "Bullet"],
    ['B', "KTM"],
    ['C',"Shine"]
]);

console.log("Bikes: ", bikes);
bikes.set('D', "Honda");
bikes.set(22, "Bikes with numbers");

console.log("Bikes: ", bikes);


console.log(typeof(bikes));

console.log("Size of bikes map : ", bikes.size);


const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value + " : "
})

console.log(text)


for(const w of fruits.entries()){
    text += w+"<br>"; 
}
console.log("w values is via iterator: ",text)


for(const x of fruits.values()){
    text += x;
}
console.log("The values are : ",text);