var varname =10;
console.log("var declared at line will be printing",varname);

function fn(){
    console.log("for fn function new  js execution is create ",varname);
    //this is hoisting of line 5 console so printing undefined ;
    var varname=20;

    varname++;
    console.log("updated value of varname will be printed",varname);

    if(varname){
        var varname=25;
        console.log("same assigned memory will be used",varname);
        varname++;

    }
    console.log(varname,"update value if is printned");
}
fn();
console.log(varname,"global value of varname printed");