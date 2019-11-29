class GradingStudents {

    protected _noOfStudents: number;

    protected _grades: number[] = [];

    constructor(noOfStudents: number, grades: number[] = []) {
        this._noOfStudents = noOfStudents;
        this._grades = grades;
    }

    callBack(mark: number) {
        let ceilingMark = Math.ceil(mark / 5) * 5;
        return ((ceilingMark - mark) >= 3 || ceilingMark < 40) ? mark : ceilingMark;
    }

    map<E>(callback, items: Array<E>): Array<E> {
        let arr: Array<E> = [];
        for (let i in items) {
            arr.push(callback(items[i]));
        }
        return arr;
    }

    getGrade() {
        return this.map<number>(this.callBack, this._grades);
    }

}

let gradingStudent = new GradingStudents(4, [73, 67, 38, 33]);
console.log(gradingStudent.getGrade());