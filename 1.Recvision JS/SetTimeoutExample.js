function example(){
    console.log("first");

    setTimeout(()=>
    {
    console.log("Second");
    },4000);

    console.log("Third");
}
example();