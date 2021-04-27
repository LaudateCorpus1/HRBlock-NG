
import { range, from } from 'rxjs';
import { filter ,last, first,map, take} from 'rxjs/operators'
import { TODOS } from './mock-data/todos'


const source = range(1, 10);

//even numbers /  odd numbers

const evenNumbers = source.pipe(
    filter(value => {
        return value % 2 === 0
    })
);
evenNumbers.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));

//double the even numbers

const doubledEvenNumbers = source.pipe(
    filter(value => {
        return value % 2 === 0
    }),
    map(value => value * 2)
);
doubledEvenNumbers.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));



const todoStream = from(TODOS)

const completedTodos = todoStream.pipe(
    filter(todo => todo.completed),
    //last()
    //first()
    take(10)

)
completedTodos.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));
