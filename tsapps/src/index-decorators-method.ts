
function Course(courseName: string = 'Type Script') {
    return function (target: any) {
        //biz logic
        Object.defineProperty(target.prototype, 'courseName', { value: courseName })
    }

}

function Input(label: string) {
    //target would be object(Student) and key would be firstName ...
    return function (target: any, key: string) {
        //logic
        Object.defineProperty(target, key, {
            get: () => label
        });
    }
}

function expandAble(value: boolean = true) {
    return function (target: any, prop: any, propdescriptor: PropertyDescriptor) {
        propdescriptor.writable = value;
        console.log('target',target);
        console.log('prop',prop);
        console.log('propdescriptor',propdescriptor)
    }
}


@Course()
class Student {
    @Input('Subramanian')
    firstName;
    @Input('Murugan')
    lastName;
    constructor(firstName?: string, lastName: string = '') {
        this.firstName = firstName
        this.lastName = lastName;
    }
    @expandAble(false)
    public calculateCost(): number {
        return 1000;
    }
}
let student = new Student() as any;
console.log(`${student.firstName} ${student.lastName} is learning ${student.courseName}`)
console.log(`Cost for the course ${student.calculateCost()}`)
//new cost ; this is default overriding; what if nobody should override.
student.calculateCost = function () {
    return 100;
};
console.log(`Cost for the course ${student.calculateCost()}`)
