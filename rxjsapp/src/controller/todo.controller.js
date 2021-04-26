import { TodoService } from '../services/todo.service';

export class TodoController {
    constructor(todoservice) {
        this.todoservice = todoservice;
    }
    findAll() {
        return this.todoservice.findAll();
    }
}