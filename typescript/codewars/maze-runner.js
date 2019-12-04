var MazeRunner = /** @class */ (function () {
    function MazeRunner(maze, direction) {
        this.startXY = [];
        this.endXY = [];
        this._maze = maze;
        this._direction = direction;
    }
    MazeRunner.prototype.solve = function () {
        for (var i = 0; i < this._maze.length; i++) {
            var startColumnIndex = this._maze[i].indexOf(3);
            var endColumnIndex = this._maze[i].indexOf(2);
            if (startColumnIndex !== -1) {
                this.startXY.push(i);
                this.startXY.push(startColumnIndex);
            }
            if (endColumnIndex !== -1) {
                this.endXY.push(i);
                this.endXY.push(endColumnIndex);
            }
        }
    };
    MazeRunner.prototype.move = function () {
        for (var _i = 0, _a = this._direction; _i < _a.length; _i++) {
            var d = _a[_i];
            switch (d) {
                case "N":
                    this.startXY[1] = this.startXY[1] - 1;
                    break;
                case "S":
                    this.startXY[1] = this.startXY[1] + 1;
                    break;
                case "E":
                    this.startXY[0] = this.startXY[0] + 1;
                    break;
                case "W":
                    this.startXY[0] = this.startXY[0] - 1;
                    break;
            }
            if (this.startXY[0] < 0 || this.startXY[1] < 0 || this._maze.length <= this.startXY[0] || this._maze.length <= this.startXY[1]) {
                return 'Dead';
            }
            else if (this._maze[this.startXY[0]][this.startXY[1]] === 1) {
                return 'Dead';
            }
            else if (this._maze[this.startXY[0]][this.startXY[1]] === this._maze[this.endXY[0]][this.endXY[1]]) {
                return 'Finish';
            }
        }
        return 'Lost';
    };
    return MazeRunner;
}());
var maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1]
];
var mazeRunner = new MazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"]);
mazeRunner.solve();
console.log(mazeRunner.move());
console.log(mazeRunner);
