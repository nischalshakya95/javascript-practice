let arr = [2, 3, 20, 7, 8, 10];

function findMax(arr, n) {
    return n == 1 ? arr[0] : max(arr[n - 1], findMax(arr, n - 1));
}

function max(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}

function sum(arr) {
    return arr.length === 0 ? 0 : arr[0] + sum(arr.slice(1));
}

console.log('maximum ', findMax(arr, arr.length));

console.log('factorual ', factorial(10));

console.log('sum ',sum(arr));

let result = 4 * 5 - 2 + (2 * 1) + 2;
console.log('result ', result);