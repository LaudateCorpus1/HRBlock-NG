
function sayHello() {
    console.log('hello')
}
sayHello();

//variable pattern; anonmous
let hai = function () {
    console.log('hai')
};
hai()
//es 6 way of declaring function: arrow functions
let greet = () => {
    console.log('greet')
};
greet();
//arrow deep
//if funciton has one line,remove {}
let greet1 = () =>console.log('greet')
greet1();
