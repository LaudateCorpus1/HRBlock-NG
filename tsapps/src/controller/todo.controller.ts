//import { TodoService } from '../services/todo.service';
import { TodoService } from '../services';
//import { Todo } from '../types/todotype';
import { Todo } from '../types';

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