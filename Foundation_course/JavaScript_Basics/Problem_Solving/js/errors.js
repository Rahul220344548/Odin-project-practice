

try {
    // let a = undefinedVariable;
    throw new ReferenceError("Hello");
} catch (e) {
    console.log(e instanceof ReferenceError); // true
    console.log(e.message); // "undefinedVariable is not defined"
    console.log(e.name); // "ReferenceError"
    console.log(e.stack); // Stack of the error
}