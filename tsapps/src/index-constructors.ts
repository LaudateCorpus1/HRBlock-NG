
//constructor

class Employee {
    //just declare variable
    id: number
    name: string
    isWorking: boolean;
    //constructor args variables ; local variables
    constructor(id: number, name: string = "foo", isWorking: boolean = false) {
        this.id = id;
        this.name = name;
        this.isWorking = isWorking;
    }
    //instance methods
    calculateSalary(): number {
        return 1000;
    }
}
//let emp = new Employee(1);
let emp = new Employee(1, "subramanian", true);

console.log(emp.id, emp.name, emp.isWorking, emp.calculateSalary())
