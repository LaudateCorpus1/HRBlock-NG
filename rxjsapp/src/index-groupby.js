import { of, interval, from } from 'rxjs';
import { mergeMap, map, groupBy, toArray } from 'rxjs/operators';

//
const users = [
    { name: 'subramanian', age: 39 },
    { name: 'murugan', age: 55 },
    { name: 'karthik', age: 55 },
    { name: 'shirisha', age:10 },
    { name: 'geetha', age: 39 },
]
const source = from(users);

//groupBy age
const result = source.pipe(
    groupBy(users => users.age),
    mergeMap(group => group.pipe(toArray()))
);
result.subscribe(x => console.log(x));