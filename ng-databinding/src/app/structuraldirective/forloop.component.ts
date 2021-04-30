import { Component, OnInit } from '@angular/core';
import { TODOS } from '../mock-data/todos'
import { Todo } from '../types';
@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styles: [
  ]
})
export class ForloopComponent {

  //array:
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  todos: Array<Todo> = TODOS;


}
