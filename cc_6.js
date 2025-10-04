// Employee Class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(name, dept, teamSize) {
        super(name, dept);
        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} manages ${this.teamSize} people in ${this.department}`;
    }
}