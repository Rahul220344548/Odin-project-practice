var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

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

function contains(obj, searchValue) {

    if (typeof obj !== "object" || obj === null) {
        return obj === searchValue;
    } else {
        for (const value of Object.values(obj)) {
            if (contains(value, searchValue)) {
                return true;
            }
        }
    }
    return false;

}

n = 5
e = 6
arr1 = [1, 2, 3, 4]
arr = [1, 10, 41, 27, 13, 38]
flattenArr = [1, [2, [3, 4]], 5]
let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]);


function countElementsInArray(arr) {
    if (arr.length == 0) return 0;
    arr.shift();
    return 1 + countElementsInArray(arr)
}

function flattenArray(array) {

    let result = []

    for (const element of array) {
        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element))
        } else {
            result.push(element)
        }
    }
    return result;
}

function parseAMultiDimensionalArr(arr) {

}

function filterEven(arr) {
    let result = []
    if (arr.length === 0) return 0;

    let first = arr[0]
    if (first % 2 == 0) {
        result = p
    }


}
console.log(filterEven(arr1))