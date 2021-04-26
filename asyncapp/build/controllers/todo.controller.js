// //dependency injection
var TodoController = /** @class */ (function () {
    //TodoService
    function TodoController(todoService) {
        this.todoService = todoService;
    }
    //controller api
    TodoController.prototype.findAll = function () {
        // this.todoService.findAll((todos: any) => {
        //     console.log('callback')
        //     console.log(todos);
        // })
        // this.todoService.findAll()
        //     .then(todos => console.log(todos))
        //     .catch(err => console.log(err))
        //     .finally(() => console.log('done'))
        return this.todoService.findAll();
    };
    return TodoController;
}());
export { TodoController };
