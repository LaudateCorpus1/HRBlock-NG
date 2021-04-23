import { firstName, age, address, skills, sayHello, isValid } from './mock-data';
import Customer from './Customer'

console.log(firstName, age, address.city, skills, sayHello(), isValid);
new Customer();