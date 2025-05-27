
function Animal(animal) {
    return animal + " is my favourite animal!";
}

// console.log(Animal("Gorilla"))

function hello(n) {
    return n*n
}
// console.log(hello(10));


function add7(number) {
    return number + 7;
}
// console.log(add7(8));

function multiply(x, y) {
    return x * y;
}

// console.log(multiply(10, 15));


function capitalize(name) {
    let firstletter = name.charAt(0).toUpperCase();
    let rest = name.substring(1).toLowerCase();
    return firstletter + rest;; 
}

// console.log(capitalize("gORILLA"));


function lastletter(name) {
    const length = name.length - 1;
    return name.charAt(length);
}

// console.log(lastletter("rahul"));

function min(a, b) {
    
    if ( a < b) {
        return a;
    } else {
        return b;
    }

}

// console.log(min(-1, 1));


// Arrow Function

let sum = (a, b) => a + b;

console.log(sum(10, 2));