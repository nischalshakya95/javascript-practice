class BetweenTwoSets {

    protected _arrOne: number[] = [];

    protected _arrTwo: number[] = [];

    protected _arrIntersection: number [] = [];

    protected _multiplesOne: number[];

    protected _multiplesTwo: number[];

    protected _factor: number[] = [];

    constructor(arrOne: number[], arrTwo: number[]) {
        this._arrOne = arrOne;
        this._arrTwo = arrTwo;
    }

    generateMultiplication(number: number, n: number) {
        let arr: number[] = [];
        for (let i = 1; i <= n; i++) {
            arr.push(number * i);
        }
        return arr;
    }

    getFactor() {
        let min = this.findMin(this._arrTwo, this._arrTwo.length);
        this._multiplesOne = this.generateMultiplication(this._arrOne[0], min / this._arrOne[0]);
        this._multiplesTwo = this.generateMultiplication(this._arrOne[1], min / this._arrOne[1]);
        this._arrIntersection = this.getCommonElement(this._multiplesOne, this._multiplesTwo);

        for (let arrIntersection of this._arrIntersection) {
            let divisible;
            for (let arrTwo of this._arrTwo) {
                if (arrTwo % arrIntersection === 0) {
                    divisible = true;
                } else {
                    divisible = false;
                    break;
                }
            }
            if (divisible) this._factor.push(arrIntersection);
        }

        return this._factor.length;
    }

    getCommonElement(arrOne: number[], arrTwo: number[]) {
        return arrOne.filter(ao => {
            return arrTwo.indexOf(ao) != -1;
        });
    }

    findMin(arr, n) {
        return n === 1 ? arr[0] : this.min(arr[n - 1], this.findMin(arr, n - 1));
    }

    min(n1, n2) {
        return n1 < n2 ? n1 : n2;
    }
}

let betweenTwoSets = new BetweenTwoSets([2, 4], [16, 32, 96]);
console.log(betweenTwoSets.getFactor());