
//let vs const

let a: number = 10;
console.log(a)
//reassign a
a = 90;
console.log(a)

const PI: number = 3.14;
console.log(PI)
//PI = 90.8;

class Employee{
    readonly firstName:string ='subramaian'
    department:string ='training'
}
let emp = new Employee();
console.log(emp.firstName,emp.department);
//emp.firstName ='Geetha'
emp.department ='dev';
console.log(emp.firstName,emp.department);
