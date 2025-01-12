//Function that retains access to its lexical scope

function outer() {
    var outerVar = 'I am out side';

    function inner() {
        console.log(outerVar); // Accessing outerVar from the outer scope
    }

    return inner;
}

const innerFunc = outer();
innerFunc(); // "I am out side"