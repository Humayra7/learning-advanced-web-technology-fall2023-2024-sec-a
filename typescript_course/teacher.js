"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = name;
        this.courses = [];
    }
    Teacher.prototype.createCourse = function (courseName) {
        this.courses.push(courseName);
        console.log("Course \"".concat(courseName, "\" created by ").concat(this.name, "."));
    };
    return Teacher;
}());
exports.default = Teacher;
