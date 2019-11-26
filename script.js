let arrRand = [];

for (let i = 0; i < 10; i++) {
    arrRand.push(Math.floor(Math.random() * 10));
}

const map = a => a * 3;
const filter = a => a % 2 === 0;
const reduce = (accumulator, current) => accumulator + current;

const evenSeries = arrRand.map(map).filter(filter).reduce(reduce);

console.log(evenSeries);