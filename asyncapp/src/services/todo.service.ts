import { TODOS } from '../mock-data/todos';
import { Todo } from '../types';

export class TodoService {
    constructor() {

    }
    //sync
    // findAll(): Array<Todo> {
    //     return TODOS;
    // }
    //simulate delay using callbacks
    // findAll(callback: any): void {
    //     setTimeout(callback, 5000, TODOS);
    // }
    findAll(): Promise<Todo[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, TODOS);
        });
    }
}