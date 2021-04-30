import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  message: string = "Good Value"
  //event emitter Declaration
  @Output()
  onSendRequest = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onSend() {
    alert('sending data to parent')
    //emit data  -  next method in subject
    this.onSendRequest.emit(this.message)
  }

}
