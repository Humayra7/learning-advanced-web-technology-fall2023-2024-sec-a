"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = /** @class */ (function () {
    function Course(courseName, teacher) {
        this.students = [];
        this.name = courseName;
        this.teacher = teacher;
    }
    Course.prototype.enrollStudent = function (student) {
        this.students.push(student);
        console.log("".concat(student.name, " enrolled in \"").concat(this.name, "\"."));
    };
    return Course;
}());
exports.default = Course;
