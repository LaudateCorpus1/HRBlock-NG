//main
import { TodoController } from './controller';
//import * as Constants from  './types'
import { TodoService } from './services';
var main = function () {
    var todoService = new TodoService();
    //di
    var ctrl = new TodoController(todoService);
    console.log(ctrl.findAll());
};
main();
