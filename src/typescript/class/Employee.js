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
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Employee.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this._name = name;
    }
    Object.defineProperty(Department.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Department;
}());
var GenericService = /** @class */ (function () {
    function GenericService() {
        this.t = [];
    }
    GenericService.prototype.save = function (t) {
        this.t.push(t);
    };
    GenericService.prototype.get = function () {
        return this.t;
    };
    return GenericService;
}());
var EmployeeService = /** @class */ (function (_super) {
    __extends(EmployeeService, _super);
    function EmployeeService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmployeeService.prototype.preSave = function (t) {
        t.firstName = t.firstName.toUpperCase();
        return t;
    };
    EmployeeService.prototype.save = function (t) {
        _super.prototype.save.call(this, this.preSave(t));
    };
    EmployeeService.prototype.get = function () {
        return _super.prototype.get.call(this);
    };
    return EmployeeService;
}(GenericService));
var DepartmentService = /** @class */ (function (_super) {
    __extends(DepartmentService, _super);
    function DepartmentService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DepartmentService;
}(GenericService));
var employeeService = new EmployeeService();
var departmentService = new DepartmentService();
var employeeOne = new Employee('Nischal', 'Shakya');
var employeeTwo = new Employee('Naruto', 'Uzumaki');
var employeeThree = new Employee('Kamado', 'Tanjiro');
var departmentOne = new Department('Finance');
employeeService.save(employeeOne);
employeeService.save(employeeTwo);
employeeService.save(employeeThree);
departmentService.save(departmentOne);
console.log(employeeService.get());
console.log(departmentService.get());
