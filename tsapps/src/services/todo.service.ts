import { TODOS } from '../mock-data/todos';
//import { Todo } from '../types/todotype';
import { Todo } from '../types';
export class TodoService {
    constructor() {

    }
    findAll(): Array<Todo> {
        return TODOS;
    }
}