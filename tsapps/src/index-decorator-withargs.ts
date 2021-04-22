
function Logger(config: any) {
    return function (target: any) {
        console.log("\x1b[44m%s\x1b[0m", `${config.type} - ${config.message} on ${new Date()}`);
    }
}

//decorator with input

function Course(courseName: string) {
    //logic should be inside  inner function, that function should be returned
    return function (target: any) {
        //logic for decorator
        Object.defineProperty(target.prototype, "subject", {
            value: courseName
        });
    }
}
type TeacherType = {
    id: number,
    name: string
}
function Teacher(teacher: TeacherType) {
    //logic should be inside  inner function, that function should be returned
    return function (target: any) {
        //logic for decorator
        Object.defineProperty(target.prototype, "trainer", {
            value: teacher
        });
    }
}

@Course('Rxjs')
@Teacher({ id: 1, name: 'Karthik' })
@Logger({
    message: 'Have latest Version',
    type: 'Warning'
})
class Student {
    constructor(public firstName: string, public lastName: string) { }
}
// let student = new Student("Subramanian", "Murugan") as CourseType
let student = new Student("Subramanian", "Murugan") as any //type coericion
console.log(`${student.firstName} ${student.lastName} is learning ${student.subject} from ${student.trainer.name} `)

