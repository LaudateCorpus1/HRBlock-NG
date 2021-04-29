import { Component } from '@angular/core';
import { Address } from '../types/address.type';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styles: [
  ]
})
export class InterpolationComponent {
  //state 
  message: string = "Greetings"
  counter: number = 100;
  isValid: boolean = true;
  //object
  address: Address = {
    city: 'coimbatore',
    state: 'Tamil Nadu',
    zipcode: '642207'
  }

}
