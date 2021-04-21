//class ; instance variable and instance methods

class Employee {
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
console.log(emp.id,emp.name,emp.isWorking,emp.calculateSalary())
emp.id=900;
//emp.id ="hello" //error