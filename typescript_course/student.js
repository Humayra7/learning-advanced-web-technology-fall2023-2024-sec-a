"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name) {
        this.enrolledCourses = [];
        this.name = name;
    }
    Student.prototype.enroll = function (courseName) {
        this.enrolledCourses.push(courseName);
        console.log("".concat(this.name, " enrolled in \"").concat(courseName, "\"."));
    };
    return Student;
}());
exports.default = Student;
