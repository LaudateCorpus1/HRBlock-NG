import { TODOS } from '../mock-data/todos';
var TodoService = /** @class */ (function () {
    function TodoService() {
    }
    //sync
    // findAll(): Array<Todo> {
    //     return TODOS;
    // }
    //simulate delay using callbacks
    // findAll(callback: any): void {
    //     setTimeout(callback, 5000, TODOS);
    // }
    TodoService.prototype.findAll = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 5000, TODOS);
        });
    };
    return TodoService;
}());
export { TodoService };
