
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

// const allAreLessThanSeven = all(arr, function (num) {
//     return num < 7;
// });


function productOfArrayIter(arr) {
    total = 1
    if (arr.length == 0) {
        return 1
    } else {
        arr.forEach(element => {
            total *= element
        });
    }
    return total
}

function productOfArray(arr) {

    if (arr.length == 0) return 1;
    return arr.shift() * productOfArray(arr1)

}

n = 5
e = 6
arr1 = [1, 2, 3]
arr2 = [1, 2, 3, 10]
arr = [1, 10, 41, 27, 13, 38]
console.log(productOfArray(arr2))

