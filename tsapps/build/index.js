//has-a dependency injection.
var Product = /** @class */ (function () {
    function Product(id, name) {
        if (id === void 0) { id = 1; }
        if (name === void 0) { name = 'product-1'; }
        this.id = id;
        this.name = name;
    }
    return Product;
}());
var Order = /** @class */ (function () {
    function Order(orderId, product) {
        if (orderId === void 0) { orderId = 1; }
        if (product === void 0) { product = new Product(); }
        this.orderId = orderId;
        this.product = product;
    }
    return Order;
}());
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var order = new Order();
console.log(order.orderId, order.product.name);
var order1 = new Order(12, new Product(90, 'Computers'));
console.log(order1.orderId, order1.product.name);
// let order2 = new Order(45, new Employee());
