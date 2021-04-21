
class Employee {
    //direct hardcoded
    id: number = 1
    name: string = "Subramanian";
    isWorking: boolean = true;
    //instance methods
    calculateSalary(): number {
        return 1000;
    }
}
//emp is just reference variable
//new is operator to create instance
//Employee() constructor call.
let emp = new Employee();
console.log(emp.id, emp.name, emp.isWorking, emp.calculateSalary())
//after object creation
emp.id = 900;
emp.name ="ram"
emp.isWorking =false
//emp.id ="hello" //erro
console.log(emp.id, emp.name, emp.isWorking, emp.calculateSalary())
