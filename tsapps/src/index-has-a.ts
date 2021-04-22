//has-a dependency injection.

class Product {
    constructor(public id: number = 1, public name: string = 'product-1') {

    }
}
class Order {
    constructor(public orderId: number = 1, public product: Product = new Product()) {
    }
}


class Employee{

}

let order = new Order();
console.log(order.orderId, order.product.name);

let order1 = new Order(12, new Product(90, 'Computers'));
console.log(order1.orderId, order1.product.name);

// let order2 = new Order(45, new Employee());
