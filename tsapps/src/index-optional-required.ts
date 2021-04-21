
//optional parameters; parameters can be skipped
let greet = (name: string, message?: string, when?: string): void => {
    console.log(`name ${name} message ${message} when ${when}`)
};
greet("subramanian");

//default args
let greetMe = (name: string = "name", message: string = "message", when: string = "when"): void => {
    console.log(`name ${name} message ${message} when ${when}`)
};
greetMe()
greetMe("Ram")
greetMe("Ram", "hello", "today")

// let sayGreet = (name: string = "name", message: string = "message", when: string): void => {
//     console.log(`name ${name} message ${message} when ${when}`)
// };
// sayGreet("ram", "hello")