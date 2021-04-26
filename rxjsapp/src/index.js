import { TodoController } from './controller/todo.controller';
import { TodoService } from './services/todo.service';

const main = () => {
    const ctrl = new TodoController(new TodoService())
    ctrl.findAll().subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));
}
main();