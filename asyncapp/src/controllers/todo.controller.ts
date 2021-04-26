import { TodoService } from '../services';
import { Todo } from '../types';

// //dependency injection
export class TodoController {

    //TodoService
    constructor(private todoService: TodoService) { }
    //controller api
    findAll(): Promise<Todo[]> {
        // this.todoService.findAll((todos: any) => {
        //     console.log('callback')
        //     console.log(todos);
        // })
        // this.todoService.findAll()
        //     .then(todos => console.log(todos))
        //     .catch(err => console.log(err))
        //     .finally(() => console.log('done'))
        return this.todoService.findAll();
    }
}