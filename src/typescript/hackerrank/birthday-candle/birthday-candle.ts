class BirthdayCandle {

    getNoOfCandleCanBeBlown(age: number, candleArr: number[]): number | string {
        return candleArr.filter(c => {
            return c = this.findMaxFromArray(candleArr, candleArr.length);
        }).length;
    }

    isAgeEqualToNumber(age: number, candleArr: number[]): boolean {
        return age === candleArr.length;
    }

    findMaxFromArray(arr: number[], n: number): number {
        return n === 1 ? arr[0] : this.findMaxBetweenTwoNumber(arr[n - 1], this.findMaxFromArray(arr, n - 1));
    }

    findMaxBetweenTwoNumber(n1: number, n2: number): number {
        return n1 > n2 ? n1 : n2;
    }
}

console.log(new BirthdayCandle().getNoOfCandleCanBeBlown(10, [18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));