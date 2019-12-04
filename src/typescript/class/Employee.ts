class Employee {

    private _firstName: string;

    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}

class Department {

    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

class GenericService<T> {

    private readonly t: Array<T> = [];

    save(t: T) {
        this.t.push(t);
    }

    get() {
        return this.t;
    }
}

class EmployeeService extends GenericService<Employee> {

    preSave(t:Employee){
        t.firstName = t.firstName.toUpperCase();
        return t;
    }

    save(t: Employee) {
        super.save(this.preSave(t));
    }

    get(): Array<Employee> {
        return super.get();
    }
}

class DepartmentService extends GenericService<Department> {}


let employeeService = new EmployeeService();
let departmentService = new DepartmentService();

let employeeOne = new Employee('Nischal', 'Shakya');
let employeeTwo = new Employee('Naruto', 'Uzumaki');
let employeeThree = new Employee('Kamado', 'Tanjiro');

let departmentOne = new Department('Finance');

employeeService.save(employeeOne);
employeeService.save(employeeTwo);
employeeService.save(employeeThree);

departmentService.save(departmentOne);

console.log(employeeService.get());
console.log(departmentService.get());