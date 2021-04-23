import { TODOS } from '../mock-data/todos';
import { Todo } from '../types/todotype';

export class TodoService {
    constructor() {

    }
    findAll(): Array<Todo> {
        return TODOS;
    }
}