import { TODOS } from '../mock-data/todos'
import { from } from 'rxjs';

export class TodoService {
    constructor() {
    }
    //Observable
    findAll() {
        return from(TODOS);
    }
}