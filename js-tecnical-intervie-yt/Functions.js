// Named Functions

function sum(a,b){
    return a+b
}
console.log(sum(5,5));

// anonymous function 

let multiply = function(c,d){
    return c*d;
}

console.log(multiply(2,3))

//arrow function

let divide = (x,y) => x/y;

console.log(divide(4,2))

//Callback Function - passing an argument of an function to another function

function addition(i,j){
    return i + j
}

let i =3, j=6 ;
let result = addition(i,j)
//console.log(result);

function operation(q,w, opp){
    var opp = operation(q,w);
    console.log(opp)
}

operation(3,4,addition)

