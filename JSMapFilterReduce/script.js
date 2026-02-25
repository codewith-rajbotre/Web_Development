let arr = [4,5,8,10,12];
let updateArr = arr.map(val=>val+2);

let updArr = arr.map(a=>a%2);
console.log("updated arr using Map % is :", updArr);
console.log("updated arr using map + is :", updateArr);

let uArr = arr.filter(a=>a%2==0);
console.log("filtered arr :", uArr);

let nArr = arr.reduce((acc, a)=>acc = acc+a );
console.log("after reducing arr : ", nArr);


