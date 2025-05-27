
function displayPrimeNumbers(n) {

    let index = 2;
    while ( index < n) {
        if (index % 2 !== 0) {
            console.log(index);
        }
        index++;
    }
}

let n = 10;
displayPrimeNumbers(n);

