var BirthdayCandle = /** @class */ (function () {
    function BirthdayCandle(age, candleArr) {
        this._candleArr = [];
        this._age = age;
        this._candleArr = candleArr;
    }
    BirthdayCandle.prototype.calculate = function () {
        var _this = this;
        return this._candleArr.filter(function (c) {
            return c === _this.findMax(_this._candleArr, _this._candleArr.length);
        }).length;
    };
    BirthdayCandle.prototype.findMax = function (arr, n) {
        return n === 1 ? arr[0] : this.max(arr[n - 1], this.findMax(arr, n - 1));
    };
    BirthdayCandle.prototype.max = function (n1, n2) {
        return n1 > n2 ? n1 : n2;
    };
    return BirthdayCandle;
}());
var birthdayCandle = new BirthdayCandle(10, [18, 90, 90, 13, 90, 75, 90, 8, 90, 43]);
console.log(birthdayCandle.calculate());
