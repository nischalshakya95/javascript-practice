class BirthdayCandle {

    protected _age: number;

    protected _candleArr = [];

    constructor(age, candleArr) {
        this._age = age;
        this._candleArr = candleArr;
    }

    getNoOfCandleCanBeBlown() {
        return this._candleArr.filter(c => {
            return c === this.findMax(this._candleArr, this._candleArr.length);
        }).length;
    }

    findMax(arr, n) {
        return n === 1 ? arr[0] : this.max(arr[n - 1], this.findMax(arr, n - 1));
    }

    max(n1, n2) {
        return n1 > n2 ? n1 : n2;
    }
}

let birthdayCandle = new BirthdayCandle(10, [18, 90, 90, 13, 90, 75, 90, 8, 90, 43]);
console.log(birthdayCandle.getNoOfCandleCanBeBlown());