import { TODOS } from '../mock-data/todos';
var TodoService = /** @class */ (function () {
    function TodoService() {
    }
    TodoService.prototype.findAll = function () {
        return TODOS;
    };
    return TodoService;
}());
export { TodoService };
