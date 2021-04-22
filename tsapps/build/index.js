var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Logger(config) {
    return function (target) {
        console.log("\x1b[44m%s\x1b[0m", config.type + " - " + config.message + " on " + new Date());
    };
}
//decorator with input
function Course(courseName) {
    //logic should be inside  inner function, that function should be returned
    return function (target) {
        //logic for decorator
        Object.defineProperty(target.prototype, "subject", {
            value: courseName
        });
    };
}
function Teacher(teacher) {
    //logic should be inside  inner function, that function should be returned
    return function (target) {
        //logic for decorator
        Object.defineProperty(target.prototype, "trainer", {
            value: teacher
        });
    };
}
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student = __decorate([
        Course('Rxjs'),
        Teacher({ id: 1, name: 'Karthik' }),
        Logger({
            message: 'Have latest Version',
            type: 'Warning'
        }),
        __metadata("design:paramtypes", [String, String])
    ], Student);
    return Student;
}());
// let student = new Student("Subramanian", "Murugan") as CourseType
var student = new Student("Subramanian", "Murugan"); //type coericion
console.log(student.firstName + " " + student.lastName + " is learning " + student.subject + " from " + student.trainer.name + " ");
