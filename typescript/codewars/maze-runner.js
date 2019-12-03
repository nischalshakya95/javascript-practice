var MazeRunner = /** @class */ (function () {
    function MazeRunner(maze) {
        this._maze = maze;
    }
    MazeRunner.prototype.solve = function () {
        for (var i = 0; i < this._maze.length; i++) {
            console.log(this._maze[i].indexOf(3));
            console.log(this._maze[i].indexOf(2));
        }
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
var mazeRunner = new MazeRunner(maze);
mazeRunner.solve();
