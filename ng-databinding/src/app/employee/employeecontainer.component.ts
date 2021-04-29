import { Component, OnInit } from '@angular/core';
import { Employee } from '../types/employee.type';

@Component({
  selector: 'app-employeecontainer',
  templateUrl: './employeecontainer.component.html',
  styles: [
  ]
})
export class EmployeecontainerComponent implements OnInit {

  employee: Employee = {
    id: 1,
    name: 'Subramanian',
    salary: 1000,
    address: {
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      zipcode: '642207'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
