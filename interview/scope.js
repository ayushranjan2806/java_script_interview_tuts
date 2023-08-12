console.log("first line of code",varname);

var varname =10;
//definition of function b;

function b(){
    console.log("function is created and takes value of varname ",varname);

}

function c(){
    console.log("varname called inside a function ",varname);

    var varname =20;

    console.log("varname of b is called inside a function c",varname);
    // IT takes value from outside the definition function of b
    b();
}
c();