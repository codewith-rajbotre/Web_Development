console.log("Hello, Let's learn about Callbacks");
console.log("Hey,Great Learning");

setTimeout(()=>{
    console.log("I am inside timeout!")
},3000);
console.log("Hey,this is the end");

const callback =(arg )=>{
    console.log("In Callback function");
    console.log(arg);

}
const loadScript =(src, callback)=>{
    let sc = document.createElement("script");
    sc.src = src ;
    sc.onload = callback("JS");
    document.head.append(sc)
}
//prism jscd
//https://cdnjs.com/libraries/prism
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)