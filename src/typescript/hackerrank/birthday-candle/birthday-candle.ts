export class BirthdayCandle {

    protected _age: number;

    protected _candleArr: number[] = [];

    constructor(age: number, candleArr: number[]) {
        this._age = age;
        this._candleArr = candleArr;
    }

    getNoOfCandleCanBeBlown() {
        return this._candleArr.filter(c => {
            return c === this.findMax(this._candleArr, this._candleArr.length);
        }).length;
    }

    findMax(arr: number[], n: number): number {
        return n === 1 ? arr[0] : this.max(arr[n - 1], this.findMax(arr, n - 1));
    }

    max(n1: number, n2: number): number {
        return n1 > n2 ? n1 : n2;
    }
}

console.log(new BirthdayCandle(10, [18, 90, 90, 13, 90, 75, 90, 8, 90, 43]).getNoOfCandleCanBeBlown());