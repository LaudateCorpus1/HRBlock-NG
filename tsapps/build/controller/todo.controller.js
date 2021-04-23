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
var TodoController = /** @class */ (function () {
    //TodoService
    function TodoController(todoService) {
        this.todoService = todoService;
    }
    //controller api
    TodoController.prototype.findAll = function () {
        return this.todoService.findAll();
    };
    return TodoController;
}());
export { TodoController };
