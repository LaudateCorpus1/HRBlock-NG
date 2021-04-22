//decorators : 

//declare decorator

function Course(target: any) {
    console.log('Course decorator is activated')
    //logic for decorator
    Object.defineProperty(target.prototype, "subject", {
        value: 'Typescript'
    });

}

class CourseType {
    firstName?: string;
    lastName?: string;
    subject?: string;
}

//apply decorator/annotate

@Course
class Student {
    constructor(public firstName: string, public lastName: string) { }
}
// let student = new Student("Subramanian", "Murugan") as CourseType
let student = new Student("Subramanian", "Murugan") as any //type coericion
console.log(`${student.firstName} ${student.lastName} is learning ${student.subject} `)