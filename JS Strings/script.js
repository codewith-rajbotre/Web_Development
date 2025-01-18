const product={
    name:"pen",
    price:100,
};
console.log("The name of product is ",product.name,"and its price is ",product.price);


//Instead of above line of code We use TEMPLATE LITERALS to print our output.The  syntax was `  In this symbol we have to write our code `
let str=`The name of product is ${product.name} and its price is ${product.price}`;
console.log(str);