class GradingStudents {

    protected _noOfStudents: number;

    protected _grades: number[] = [];

    constructor(noOfStudents: number, grades: number[] = []) {
        this._noOfStudents = noOfStudents;
        this._grades = grades;
    }

    getRoundedValue(mark: number): number {
        let ceilingMark = Math.ceil(mark / 5) * 5;
        return ((ceilingMark - mark) >= 3 || ceilingMark < 40) ? mark : ceilingMark;
    }

    iterateThroughMarks(getRoundedValue, items: Array<number>): Array<number> {
        let arr: Array<number> = [];
        for (let i in items) {
            arr.push(getRoundedValue(items[i]));
        }
        return arr;
    }

    getGrade() {
        return this.iterateThroughMarks(this.getRoundedValue, this._grades);
    }

}

let gradingStudent = new GradingStudents(4, [73, 67, 38, 33]);
console.log(gradingStudent.getGrade());