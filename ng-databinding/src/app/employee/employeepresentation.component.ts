import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../types/employee.type';

@Component({
  selector: 'app-employeepresentation',
  templateUrl: './employeepresentation.component.html',
  styles: [
  ]
})
export class EmployeepresentationComponent implements OnInit {

  @Input()
  employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
