//square of number is even or not
//.. imperative way 
var num=5;
const square=num*num;

let checkeven;

if(square%2==0){
    checkeven=true;
}
else{
    checkeven=false;
}
console.log(checkeven);
var num1=4;
//declarative way 
const checkfun=(num1)=>((num1*num1)%2==0?true:false

)
console.log(checkfun(4))

//pure and impure function 

const varname=20;
var varname=34;
function callfun(a){
    
    console.log("the sum of a and varname :",a+varname);
}

callfun(5);