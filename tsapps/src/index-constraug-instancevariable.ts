

// class Employee {
//     //just declare variable
//     // public id: number
//     // public name: string
//     // public isWorking: boolean;
//     //constructor args variables ; instance variables
//     constructor(public id: number, public  name: string = "foo", public isWorking: boolean = false) {
//         this.id = id;
//         this.name = name;
//         this.isWorking = isWorking;
//     }
//     //instance methods
//     public calculateSalary(): number {
//         return 1000;
//     }
// }


class Employee {
    constructor(public id: number, public name: string = "foo", public isWorking: boolean = false) { }
    //instance methods
    public calculateSalary(): number {
        return 1000;
    }
}

let emp = new Employee(1, "subramanian", true);

console.log(emp.id, emp.name, emp.isWorking, emp.calculateSalary())
