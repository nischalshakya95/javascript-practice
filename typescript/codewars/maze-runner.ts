class MazeRunner {

    private readonly _maze: number[][];

    constructor(maze: number[][]) {
        this._maze = maze;
    }

    solve() {
        for (let i = 0; i < this._maze.length; i++) {
            console.log(this._maze[i].indexOf(3));
            console.log(this._maze[i].indexOf(2));
        }
    }
}

let maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1]
];
let mazeRunner = new MazeRunner(maze);
mazeRunner.solve();