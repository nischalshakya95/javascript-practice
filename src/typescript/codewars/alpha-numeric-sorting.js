var AlphaNumericSorting = /** @class */ (function () {
    function AlphaNumericSorting() {
    }
    AlphaNumericSorting.prototype.order = function (words) {
        return words.split(' ')
            .sort(function (a, b) { return +a.match(/\d+/) - +b.match(/\d+/); })
            .join(' ');
    };
    return AlphaNumericSorting;
}());
var alphaNumericSorting = new AlphaNumericSorting();
console.log(alphaNumericSorting.order('is21 Thi1s T4est 3a'));
