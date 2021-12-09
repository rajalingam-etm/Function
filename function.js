let addno1 = 11;
let addno2 = 55;


//Function declaration
function Add() {

    let result = addno1 + addno2;
    console.log(result);
}

//function Expression

var Add1 = function Add() { //function add() --> it means named function expression
    let add1 = 22;
    let add2 = 33;
    let result = add1 + add2;
    console.log(result);
}


var Add2 = function() { //function() --> it means Anoynomous function expression
    let add11 = 24;
    let add22 = 333;
    let result = add11 + add22;
    console.log(result);
}


var Add3 = () => { //var Add = () =>      --> it means arrow function 
    let add111 = 234;
    let add222 = 3333;
    let result = add111 + add222;
    console.log(result);
}




//function declaration pass
Add();
Add1();
Add2();
Add3();