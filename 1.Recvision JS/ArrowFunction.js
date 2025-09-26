// Normal function
function add(a, b) {
  return a + b;
}

const substracting = (b,c )=> b-c;

console.log(substracting(3,2));
console.log(substracting(45,2));
// Arrow function
const addArrow = (a, b) => a + b;

// Default params
const greet = (name = "Guest") => `Hello, ${name}!`;

console.log(addArrow(5, 3));   // 8
console.log(greet());          // Hello, Guest!
console.log(greet("Jara"));    // Hello, Jara!
