//main
import { TodoController } from './controller/todo.controller';
import { TodoService } from './services/todo.service';
var main = function () {
    var todoService = new TodoService();
    //di
    var ctrl = new TodoController(todoService);
    console.log(ctrl.findAll());
};
main();
