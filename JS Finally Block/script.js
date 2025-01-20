console.log("Use of Finally Block")
//Mainly Finally Block is needed in Functions when function contains a return statement 

function main(){
    let a=2,b=4;
    try{
        console.log("In try block");
        return true;
    }catch{
        console.log("In catch Block");
        return false;
    }
    finally{
        console.log("In final block");
    }
    console.log("Outside the  try catch block");
}
main()