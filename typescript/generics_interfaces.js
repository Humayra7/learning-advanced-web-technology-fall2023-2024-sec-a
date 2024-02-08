var Employee2 = /** @class */ (function () {
    function Employee2(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee2.prototype.display = function () {
        console.log("ID = ".concat(this.id, ", name = ").concat(this.name));
    };
    return Employee2;
}());
var emp3 = new Employee2(1, "steve");
emp3.display();
