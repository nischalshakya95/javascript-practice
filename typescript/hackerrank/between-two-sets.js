var BetweenTwoSets = /** @class */ (function () {
    function BetweenTwoSets(arrOne, arrTwo) {
        this._arrOne = [];
        this._arrTwo = [];
        this._arrIntersection = [];
        this._factor = [];
        this._arrOne = arrOne;
        this._arrTwo = arrTwo;
    }
    BetweenTwoSets.prototype.generateMultiplication = function (number, n) {
        var arr = [];
        for (var i = 1; i <= n; i++) {
            arr.push(number * i);
        }
        return arr;
    };
    BetweenTwoSets.prototype.getFactor = function () {
        var min = this.findMin(this._arrTwo, this._arrTwo.length);
        this._multiplesOne = this.generateMultiplication(this._arrOne[0], min / this._arrOne[0]);
        this._multiplesTwo = this.generateMultiplication(this._arrOne[1], min / this._arrOne[1]);
        this._arrIntersection = this.getCommonElement(this._multiplesOne, this._multiplesTwo);
        for (var _i = 0, _a = this._arrIntersection; _i < _a.length; _i++) {
            var arrIntersection = _a[_i];
            var divisible = void 0;
            for (var _b = 0, _c = this._arrTwo; _b < _c.length; _b++) {
                var arrTwo = _c[_b];
                if (arrTwo % arrIntersection === 0) {
                    divisible = true;
                }
                else {
                    divisible = false;
                    break;
                }
            }
            if (divisible)
                this._factor.push(arrIntersection);
        }
        return this._factor.length;
    };
    BetweenTwoSets.prototype.getCommonElement = function (arrOne, arrTwo) {
        return arrOne.filter(function (ao) {
            return arrTwo.indexOf(ao) != -1;
        });
    };
    BetweenTwoSets.prototype.findMin = function (arr, n) {
        return n === 1 ? arr[0] : this.min(arr[n - 1], this.findMin(arr, n - 1));
    };
    BetweenTwoSets.prototype.min = function (n1, n2) {
        return n1 < n2 ? n1 : n2;
    };
    return BetweenTwoSets;
}());
var betweenTwoSets = new BetweenTwoSets([2, 4], [16, 32, 96]);
betweenTwoSets.getFactor();
console.log(betweenTwoSets);
