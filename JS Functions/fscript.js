let fruits=["apple","Mango","Graphes"," BlackBerry"];
for(let i=0;i<fruits.length;i++){
       console.log(fruits[i]);
}

function Addition(i, j){
    let a=i;
    let b=j;
    let c=a+b;
    console.log("The Addition of a and b is  :"+c);
}
Addition(5,8);

function strings(firstName,lastName){
    let fullName=firstName+ lastName;
    console.log(fullName);

}
strings("Raj","Botre");
let str="New Rule is Don't Regret for Anything";
countVowel(str);
//Count Vowels Functions
function countVowel(str){

    let count=0;
    for(const char of str){
        if(
            char=="a"||
            char=="e"||
            char=="i"||
            char=="o"||
            char=="u"
        ){
            count++;
        }
        console.log(count);
    }


}

//Arrow Function

const Multi=(a,b)=>{return a*b};
console.log (Multi);

