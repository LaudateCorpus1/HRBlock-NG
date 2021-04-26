//main
import { TodoController } from './controller';
//import * as Constants from  './types'
import { TodoService } from './services';

const main = () => {
    let todoService = new TodoService();
    //di
    let ctrl = new TodoController(todoService);
    console.log(ctrl.findAll())
}
main();