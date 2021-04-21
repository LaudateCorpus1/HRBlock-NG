//args and parameters

//here message is arg and its type is infered during function call value
// function sayHello(message) {
//     console.log(message)
// }
// sayHello('hello')
// sayHello(10)
// sayHello(true)

//explicit
function sayHai(message: string) {
    console.log(message)
}
sayHai('Hello')
//sayHai(100)
function sayGreet(message: any) {
    console.log(message)
}
sayGreet('Hello')
sayGreet(100)

//what if i want to force to use type of args 
function sayHello1(message: any) {
    console.log(message)
}
//
let add = (a: number, b: number) => {
    let c = a + b;
    console.log(c);
}
add(10,10)
//return type;