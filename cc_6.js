// Employee Class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department`;
    }
}

// Manager Class
class Manager extends Employee {
    constructor(name, dept, teamSize) {
        super(name, dept);
        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} manages ${this.teamSize} people in the ${this.department} department`;
    }
}


// Create company class
class Company {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    this.employees.forEach(e => console.log(e.describe()));
  }
}

// Employees and Managers
const emp1 = new Employee("Jimmy John", "Sandwich")
const emp2 = new Employee("Papa John", "Pizza")
const emp3 = new Employee("Colonel Sanders", "Chicken")

const man1 = new Manager("Cletus Lyle", "Finance", 20)
const man2 = new Manager("Chad Gideon", "Athletic", 5)
const man3 = new Manager("Gordon Hadley", "Culinary", 100)

const foodTitans = new Company("Food Titans");
[emp1, emp2, emp3, man1, man2, man3].forEach(e => foodTitans.addEmployee(e));

foodTitans.listEmployees();