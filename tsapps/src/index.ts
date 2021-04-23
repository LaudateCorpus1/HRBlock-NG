//main
import { TodoController } from './controller/todo.controller';
import { TodoService } from './services/todo.service';

const main = () => {
    let todoService = new TodoService();
    //di
    let ctrl = new TodoController(todoService);
    console.log(ctrl.findAll())
}
main();