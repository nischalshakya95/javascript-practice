class MazeRunner {

    private readonly _maze: number[][];

    private readonly _direction: string[];

    private startXY: number[] = [];

    private endXY: number[] = [];

    constructor(maze: number[][], direction: string[]) {
        this._maze = maze;
        this._direction = direction;
    }

    solve() {
        for (let i = 0; i < this._maze.length; i++) {
            let startColumnIndex = this._maze[i].indexOf(3);
            let endColumnIndex = this._maze[i].indexOf(2);
            if (startColumnIndex !== -1) {
                this.startXY.push(i);
                this.startXY.push(startColumnIndex);
            }
            if (endColumnIndex !== -1) {
                this.endXY.push(i);
                this.endXY.push(endColumnIndex);
            }
        }
    }

    move() {
        for (let d of this._direction) {
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
            if (this._maze[this.startXY[0]][this.startXY[1]] === this._maze[this.endXY[0]][this.endXY[1]]) {
                return 'Finish';
            } else if (this.startXY[0] < 0
                || this.startXY[1] < 0
                || this._maze.length <= this.startXY[0]
                || this._maze.length <= this.startXY[1]
                || this._maze[this.startXY[1]][this.startXY[0]] === 1) {
                return 'Dead';
            }
        }
        return 'Lost';
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
let mazeRunner = new MazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"]);
mazeRunner.solve();
console.log(mazeRunner.move());

export function add(numberOne: number, numberTwo: number) {
    return numberOne + numberTwo;
}