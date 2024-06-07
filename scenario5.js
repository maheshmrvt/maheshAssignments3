//Function declarations are hoisted in a similar manner to variable declarations

foo(); // "Hai, Hello"

function foo() {
    console.log("Hai, Hello");
}


//the variable bar is hoisted, but its assignment to the function is not, leading to an error

//bar(); // TypeError: bar is not a function

var bar = function () {
    console.log("Hai, Hello");
};