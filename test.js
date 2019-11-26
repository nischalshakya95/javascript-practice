let arr = [2, 3, 20, 7, 8, 10];

function findMax(arr, n) {
    return n === 1 ? arr[0] : max(arr[n - 1], findMax(arr, n - 1));
}

function max(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

function sum(arr) {
    return arr.length === 0 ? 0 : arr[0] + sum(arr.slice(1));
}

function pow(number, power) {
    return power === 1 ? number : number * pow(number, power - 1);
}

function recursiveSum(arr) {
    return arr.length === 0 ? 0 : arr[0] + recursiveSum(arr.slice(1));
}

console.log('maximum ', findMax(arr, arr.length));

console.log('factorial ', factorial(0));

console.log('sum ', sum(arr));

console.log('power of 2 * 5 ', pow(2, 5));

console.log('recursive sum of array ', recursiveSum(arr));