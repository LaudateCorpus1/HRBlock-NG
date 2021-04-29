import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styles: [
  ]
})
export class EventbindingComponent implements OnInit {

  message: string = "default Value"

  constructor() { }

  ngOnInit(): void {
  }
  onClick(value: string) {
    console.log(value)
  }
  //listener
  onSave(): void {
    console.log('button is clicked')
  }
  getEvent(evt: MouseEvent) {
    console.log(evt) //event
    console.log(evt.target) //button
  }

  onUpdate(ctrl: any): void {
    //console.dir(value.target);
    //console.log(ctrl.target.value)
    // ctrl.target.value
    //two way data binding
    this.message = ctrl.target.value
  }
  getTextboxValue(): void {
      alert(this.message)
  }
}
