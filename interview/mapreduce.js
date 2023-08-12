//map function is used for mapping the elements with some operation into it 

const arr=[2,3,4,5]

const multi =arr.map((n)=>{
        return n*3;

});
console.log(multi);


//The filter() method creates a new array filled with elements that pass a test provided by a function

const filter_fun =arr.filter((num)=>{
    return num>2;
});

console.log(filter_fun);

//reduce method is used to reduce and accumalting the arrays into one value that can evaluted through function 

const reduce_method=arr.reduce((curr,acc)=>{
        return curr+acc
},0);
console.log(reduce_method);

//polyfill :-Polyfills are pieces of code that provide modern functionality to older browsers that lack native support for those features

//interview question

let collection = [{'box_red': 10, 'box_green': 6, 'box_blue': 8, 'box_pink': 2}];

//return name 
//for loop

let names=[];
for (let i = 0;  i< collection.length; i++) {
    names.push(collection[i].box_red.value);

    
}
console.log(names);

