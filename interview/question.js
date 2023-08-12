{/* <script>
const grade =["ayush","ranjan"];

grades:function () {
    console.log(this.name)
}
</script> */}
//----let vs var

// <script>
//     function example(){
//         if(true){
//             var count=10;
//             console.log(count);//output:10

//         }
//     }
//     console.log(count); // output:10;
// </script>
// // var is a function scope type of variable we can redeclared the same variable using var keywords 

// <script>
//     function example(){
//         if(true){
//             let count=10;
//             console.log(count);//output:10

//         }
//     }
//     console.log(count); // error;
// </script>
// // var is a block scope type of variable we cannot  redeclared the same variable using var keywords 
// constant difference
// const z=10;
// z=20;
// console.log(z);


// for..of and for... in 

// let arr=[1,2,34,454]

// for(let val of arr){
//     console.log(val);

// }

// const person ={
//     name:john,
//     sex:male,
//     age:20
// };

// for(let key in person){
//     console.log(person[key]);
// }

// arr.forEach(function(item)  {
//     console.log(item);
// });

// object.values(person).forEach(value=>{
//     console.log(value);
// })
//difference between == and === 
// var x=5;
// var y='5';

// if(x==y){
//     console.log('executed');


// }
// //output will be excuted
// // in case of === it is doesn't perform any type coercion in execution

// if(x===y){
//     console.log('not executed');
// }
//named function in js
// function  sum (a,b) {
//      return a+b;

//     };

// console.log(sum(2,3));
// anonymous function in js 
// console.log(function(a,b){
// return a*b;

// }(a,b))
//function expresson in js 
// const add=function(a,b){
//     return a+b;

// };
// console.log(add(4,5));

// function add(a,b){
//     return a+b;

// }
// console.log(add(4,5));// normal function 

// const add= (x,y)=> x+y;

// console.log(add(5,6));//converted it into arrow function
//call back function

// const array=[2,3,4,5,6];

// function lognumbers(array){
//     console.log(array);

// }
// array.forEach(lognumbers);
//WHEN a function is passed as an arguments to another function this is called as an call back function
//event handling 

{/* <button id='demo'>click me</button>

const button= document.getElementById(demo);

button.addEventListener('click',function()){
    alert('button is clicked');


}
click is event name while function is performing the parameter which is being clicked through event evnet handle  */}

// function hof(func){
//     func();

// }
//  hof(sayhell);

//  function sayhell(){
//     console.log('hello sir');

//  }
// this is the example of higher order function in js which  take function as a argument and return function as a result

// asynchronous operation

// console.log("before execution ") --1

// setTimeout(() => {
//     console.log("inside the function")--3
// }, 2000);

// console.log("excuted after ")--2

// create a promise constructor by using promise method 
//my promise function
// const mypromise =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const randomnumber= Math.floor(Math.random *10);

//         if(randomnumber>10){
//             resolve("executed successfully");
//         }
//         else{
//             reject("finding the error in function")
//         }
//     },2000)
// });
// mypromise.then((result) =>{
//     console.log(result);
    
// });

// mypromise.catch((error)=>{
//    console.log(error);
// });
// class and object in js

// class car{
//     static nowheel=4;

//     constructor(name,model){
//         model=this.model;
//         name=this.name;

//     }
//     start(){
//         console.log(`${this.model} started`);

//     }
// }

// const newcar=new car('honda','23443342');

// closure

// var sum=function(a,b,c){
//     return {

//         gettwosum:function(a,b){
//             return a+b;
//         },

//         getthreesum:function(a,b,c){
//         return a+b+c;
//         }

//     }
// }

// var store=sum(2,4,5);

// console.log(store.getthreesum());

// Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function 
// in the inner scope of a function. Lexical scoping is the process used to define the scope of a variable by its position in the source code.


// async , promise , callback

// const datas=[
//     {name:"ajay",profession:"softwareen"},
//     {name:"ranjan",profession:"sde1 "}

// ];


// function getdatas(){
//     setTimeout(()=>{
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=<li>{data.name}</li>

//         })
//         document.body.innerHTML=output;

//     },1000)
// }
// // callback function 
// function createdata(newdata){
// return new promise((resolve,reject)=>{


// setTimeout(() => {
//     datas.push(newdata)
//     let erorr=false;
//     if(!error){
//         resolve();
//     }
//     else{
//         reject("fgfgthwerg");

//     }

// }, 2000);
// })
// }
// createdata({name:"ranjan",profession:"sde2"})
// .then(getdatas).catch(err=>console.log(err));


// async function start(){
//     await createdata({name:"ranjan",profession:"sde2"})
//     getdatas();
// }
// start();

//call bind ,apply 
let user={
    "name":"ayush",
    "age":20,
    // printdetails:function () {
    //     console.log(this.name);
    // }
}

let printdetails=function (state,ftl) {
    console.log(this.name+" "+state +" "+ftl );
}
printdetails.apply(user,["dff","defe"])

let user1={
    "name":"ayush ranjan",
    "age":30,
    // printdetails:function () {
    //     console.log(this.name);
    // }

}
// printdetails.call(user1,"delhit","degert") 

// only difference btw call and apply
// and bind function is used to store that value and invoke as per requirement
let bindd=printdetails.bind(user1,"delhitvvfdcs","degert");
console.log(bindd());
