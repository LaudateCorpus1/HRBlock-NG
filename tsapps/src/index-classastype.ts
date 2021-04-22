
class Employee {
    id: number;
    name: string;
    salary?: number;
    isWorking?: boolean;
}

//object literal ; how to represent type for object properties

let employee: Employee = {
    id: 1,
    name: 'subramanian',
    salary: 10000,
    isWorking: true
}
//use case 2
let emp: Employee = {
    id: 2,
    name: 'ram'
}

let printEmployeeDetails = (employee: Employee): Employee => {
    return employee;
}
printEmployeeDetails(emp);