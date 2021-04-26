import { from } from 'rxjs';

//observable from array
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const observable = from(source);

observable.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));