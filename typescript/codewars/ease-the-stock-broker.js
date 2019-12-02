var EaseTheStockBroker = /** @class */ (function () {
    function EaseTheStockBroker() {
    }
    EaseTheStockBroker.balanceStatements = function (list) {
        var buy = 0;
        var sell = 0;
        var badCount = 0;
        var badString = "";
        list.split(', ').forEach(function (order) {
            if (!order)
                return;
            var items = order.split(' ');
            var quantity = items[1];
            var price = items[2];
            var status = items[3];
            if (price.indexOf('.') === -1 || isNaN(+price) || !status) {
                badString += order + " ;";
                badCount++;
                return;
            }
            if (status === 'B')
                buy += +quantity * parseFloat(price);
            else
                sell += +quantity * parseFloat(price);
        });
        return "Buy: " + Math.ceil(buy) + " Sell: " + Math.ceil(sell) + ((badCount > 0) ? ("; Badly formed " + badCount + ": " + badString) : '');
    };
    return EaseTheStockBroker;
}());
console.log(EaseTheStockBroker.balanceStatements('GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S'));
