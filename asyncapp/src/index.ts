//main
import { TodoController } from './controllers';
import { TodoService } from './services';

const main = async () => {
    let todoService = new TodoService();
    //di
    let ctrl = new TodoController(todoService);
    console.log('start')
    // console.log(ctrl.findAll())
    // ctrl.findAll()
    //     .then(todos => console.log(todos))
    //     .catch(err => console.log(err))
    //     .finally(() => console.log('done'))

    try {
        const todos = await ctrl.findAll();
        console.log(todos);
    }
    catch (err) {
       console.log(err);
    }
    finally {
        console.log('done')
    }


    console.log('end')
}
main();