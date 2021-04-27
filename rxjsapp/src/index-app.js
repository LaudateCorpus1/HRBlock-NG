import { TodoController } from './controller/todo.controller';
import { TodoService } from './services/todo.service';
import { UtilityService } from './services/utility.service';

const main = () => {
    const ctrl = new TodoController(new TodoService())
    ctrl.findAll().subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));

    let utility = new UtilityService();

    utility.doubleIt(1,2,3,4,5).subscribe(data => console.log(data));
    utility.transform(1,2,3,4,5).subscribe(data => console.log(data));

}
main();