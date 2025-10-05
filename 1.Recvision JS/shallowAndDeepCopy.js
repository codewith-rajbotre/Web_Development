let obj1 = {a:1, b:{c:2}};
let shallow = {...obj1}; // nested object still shared
let deep = JSON.parse(JSON.stringify(obj1)); // fully new
console.log(shallow)
console.log(deep)