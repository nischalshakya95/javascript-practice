let arrRand = [];

for (let i = 0; i < 10; i++) {
    arrRand.push(Math.floor(Math.random() * 10));
}

const map = a => a * 3;
const filter = a => a % 2 === 0;
const reduce = (accumulator, current) => accumulator + current;

const evenSeries = arrRand.map(map).filter(filter).reduce(reduce);

console.log(evenSeries);

let arrSum = [1, 2, 3, 4, 5];
const sum = arrSum.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);
console.log(sum);

function recursiveSum(arr) {
    return arr.length === 0 ? 0 : arr[0] + recursiveSum(arr.slice(1));
}

console.log(recursiveSum(arrSum));

function pow(number, power) {
    return power === 1 ? number : number * pow(number, power - 1);
}

console.log(pow(5, 4));