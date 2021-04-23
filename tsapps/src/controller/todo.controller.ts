import { TodoService } from '../services/todo.service';
import { Todo } from '../types/todotype';

// //dependency injection
// export class TodoController {
//     todoService: TodoService;
//     //TodoService
//     constructor(todoService: TodoService) {
//         this.todoService = todoService;
//     }
//     //controller api
//     findAll(): Array<Todo> {
//         return this.todoService.findAll();
//     }
// }
//dependency injection
export class TodoController {
    //TodoService
    constructor(private todoService: TodoService) { }
    //controller api
    findAll(): Array<Todo> {
        return this.todoService.findAll();
    }
}