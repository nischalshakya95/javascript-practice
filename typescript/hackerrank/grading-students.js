var GradingStudents = /** @class */ (function () {
    function GradingStudents(noOfStudents, grades) {
        if (grades === void 0) { grades = []; }
        this._grades = [];
        this._noOfStudents = noOfStudents;
        this._grades = grades;
    }
    GradingStudents.prototype.getRoundedValue = function (mark) {
        var ceilingMark = Math.ceil(mark / 5) * 5;
        return ((ceilingMark - mark) >= 3 || ceilingMark < 40) ? mark : ceilingMark;
    };
    GradingStudents.prototype.iterateThroughMarks = function (getRoundedValue, items) {
        var arr = [];
        for (var i in items) {
            arr.push(getRoundedValue(items[i]));
        }
        return arr;
    };
    GradingStudents.prototype.getGrade = function () {
        return this.iterateThroughMarks(this.getRoundedValue, this._grades);
    };
    return GradingStudents;
}());
var gradingStudent = new GradingStudents(4, [73, 67, 38, 33]);
console.log(gradingStudent.getGrade());
