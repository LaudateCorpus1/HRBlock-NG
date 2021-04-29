import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styles: [
  ]
})
export class GreeterComponent implements OnInit {

  @Input()
  message: string

  // @Input("message")
  // someMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
