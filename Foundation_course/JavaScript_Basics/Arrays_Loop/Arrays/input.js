
function getInput() {
    let num;

    do {
        num = prompt("Enter a number greather than 100? ");
    } while (num <= 100 && num) 
    console.log("Success!");

    
}

getInput();
