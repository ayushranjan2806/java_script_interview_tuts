
const person1 = {
    name:"Ayush",
    age:"ranjan"
}
const person={...person1}
person1.name="ranjan";
console.log(person1);
console.log(person);

for(var i=0;i<10;i++){
    setTimeout(() => {
        console.log(i)
    }, 10);
}