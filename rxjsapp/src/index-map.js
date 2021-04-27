import { of } from 'rxjs';
import { map } from 'rxjs/operators'

// const numbers = of(1, 2, 3, 4, 5);

// //data processing using transformation; double it

// const result = numbers.pipe(

//     map(value => {
//         //transformation logic
//         return value * 2;
//     })
// );

// result.subscribe(data => console.log(data),
//     err => console.log(err), () => console.log('done'));

////data processing using transformation; double it
// const numbers = of(1, 2, 3, 4, 5).pipe(
//     map(value => {
//         //transformation logic
//         return value * 2;
//     })
// );

// numbers.subscribe(data => console.log(data),
//     err => console.log(err), () => console.log('done'));

of(1, 2, 3, 4, 5).pipe(
    map(value => {
        //transformation logic
        return value * 2;
    })
).subscribe(data => console.log(data),
    err => console.log(err), () => console.log('done'));