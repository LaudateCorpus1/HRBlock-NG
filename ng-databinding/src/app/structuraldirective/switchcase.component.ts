import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchcase',
  templateUrl: './switchcase.component.html',
  styles: [
  ]
})
export class SwitchcaseComponent implements OnInit {

  feedback: string = "good"
  input:string ="";
  constructor() { }

  ngOnInit(): void {
  }
  showFeedback() {
    this.feedback = this.input
  }

}
