import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styles: [
  ]
})
export class AttributeComponent implements OnInit {

  color: string = 'red';
  constructor() { }

  ngOnInit(): void {
  }

}
