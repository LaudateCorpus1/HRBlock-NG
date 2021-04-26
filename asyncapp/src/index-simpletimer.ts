

//timer ; used to delay something

//blocking code
function sayHello() {
    return 'Hello'
}
function sayHai() {
    return 'Hai'
}


//non blocking
function delay(callback: Function) {
    setTimeout(callback, 5000)
}
console.log(sayHello());
delay(function () {
    console.log('i am delayed')
});
console.log(sayHai());
