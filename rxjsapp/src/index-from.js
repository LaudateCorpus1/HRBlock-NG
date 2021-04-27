
import { from } from 'rxjs';

//observable from array
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const observable = from(source);

observable.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));


//promise
const promise = Promise.resolve('Hello!!');
const promiseSource = from(promise);
promiseSource.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));


//collection as Observable
const map = new Map();
map.set(1,"subramanian");
map.set(2,"Shirisha");

const mapSource=from(map);
mapSource.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));

//char array strings
const stringSource=from('Hello world');
stringSource.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));
