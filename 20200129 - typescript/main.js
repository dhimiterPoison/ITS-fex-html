var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.getFullName = function () {
            return _this.firstName + " " + _this.lastName;
        };
    }
    User.prototype.getDescription = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, company) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.company = company;
        return _this;
    }
    return Employee;
}(User));
var u1 = new User("Andrea", "Dottor");
// var userName = u1.firstName;
//var x = u1.getFullName();
var e1 = new Employee("Andrea", "Dottor", "ITS");
var list = [];
list.push(u1);
list.push(e1);
var pnl = document.getElementById("mioDiv"); // div
var txt = document.getElementById("txtInput"); // input type="text"
