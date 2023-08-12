// An object is a collection of properties, and a property is an association between a name (or key) and a value

let object ={
    name:"ayush",
    roll:200971540018,

    say:function(){
        console.log("hello ayush ")
    }

}

for(let key in object){
    console.log(key," ",object[key]);

}
object.say()


//same thing works in array so in js their is no array is 
const arr=[2,3,4,5];

arr.shift();
console.log(arr);

//because it take same reference of first key and shift will key of 0 index then shift will works

//function is also treated as a object  

function fn(){
    console.log(" i am function of fn");

}

fn.prop="property of prop";
fn.myfn=function(){
    console.log("i am created myfn function ");
}

console.log(fn());
console.log(fn.myfn());
console.log(fn.prop);