//array types

//let list: number[] = [1, 2, 3, 4, "hello"]; error

let list: Array<number> = [1, 2, 3, 4, 5];

let names: Array<string> = ["a", "b"];

//array of Products

class Product {
    id: number;
    name: string;
    price?: number;
    qty?: number;
}


let products: Array<Product> = [
    { id: 1, name: 'a1', price: 100, qty: 23 },
    { id: 2, name: 'a2', price: 100, qty: 23 },
    { id: 3, name: 'a3', price: 100, qty: 23 },
    { id: 4, name: 'a4', price: 100, qty: 23 },
    { id: 5, name: 'a5', price: 100, qty: 23 }

];
let products1: Product[] = [
    { id: 1, name: 'a1', price: 100, qty: 23 },
    { id: 2, name: 'a2', price: 100, qty: 23 },
    { id: 3, name: 'a3', price: 100, qty: 23 },
    { id: 4, name: 'a4', price: 100, qty: 23 },
    { id: 5, name: 'a5', price: 100, qty: 23 }

];