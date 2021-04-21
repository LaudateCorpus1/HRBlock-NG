
//return type is infered based on values
function getMessage() {
    return "Hello";
}
console.log(getMessage())

//return type is also infered based on parameters
function getValue(value: any) {
    return value;
}
console.log(getValue(100))
console.log(getValue("test"))

//explicit type
function getValue1(value: string): string {
    return value;
}
console.log(getValue1("100"))

function getValue2(value: string): any {
    return value;
}
console.log(getValue2("100"))

//dont want return ; dont keep without any type;

function doStuff(value: string): void {
    console.log(value)
    // return; //empty return is void
}
doStuff("100");

// let add = (a: number, b: number): number => {
//     return a + b;
// }
//only line of code; only return statement;remove {} and return statement
let add = (a: number, b: number): number => a + b;
console.log(add(1, 1))

