//function in js 

(function fd(){
    console.log("i am iife   immediately invoked function experssion , i don't required call experssion ")
})();

function hello(param){
    console.log("first printing then ",param);
    param();

    return " then return print";
}

function paramanfun(){
    console.log("param is printing");
}

let fisrtvar=hello(paramanfun);
console.log(fisrtvar);

function outer (){
    console.log("i am outer function");

    return function(){
        console.log("i am inner function");
    }
}

let out=outer();

console.log("outer",out);

out();

function real(){
    console.log("ayush");
}
function real(){
    console.log("ranjan");
}
function real(){
    console.log("placement mil jaye bhagwaan ");
}

real();
function real(){
    console.log("ayush");
}
function real(){
    console.log("ranjan");
}
real();
function real(){
    console.log("placement mil jaye bhagwaan ");
}

// the memory is allocated and it's will be assign the function which will be lastly declared i.e real() named if we called it's doest effect 
// as memory is allocated 

console.log("var",vared);
var vared;
console.log("vared",vared);
vared=10;

console.log(vared);


