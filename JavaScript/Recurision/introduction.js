
function pow(x, n) {

    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }

}

// console.log(pow(2, 3))

function sumIter(n) {
    let result = 0;
    for (let i = 0; i < n + 1; i++) {
        result += i
    }
    return result
}

function sumTo(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumTo(n - 1)
    }
}

function fact(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fact(n - 1)
    }
}

n = 5
console.log(fact(n))

