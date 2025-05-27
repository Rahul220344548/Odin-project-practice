
function sumRange(n) {
    if (n == 1) return 1;
    else {
        return n + sumRange(n - 1);
    }
}

function power(n, e) {
    if (e == 0) return 1;
    return n * power(n, e - 1)
}

function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}


n = 5
e = 6
console.log(factorial(n))