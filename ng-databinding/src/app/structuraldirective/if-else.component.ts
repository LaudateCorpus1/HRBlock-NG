import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './if-else.component.html',
  styles: [
  ]
})
export class IfElseComponent implements OnInit {

  isHidden: boolean = false
  isEnabled: boolean = false;
  loading: boolean = true;

  status: string = 'Loading......'

  constructor() {
    //Progress bar time: using timer
    setTimeout(() => {
      this.loading = !this.loading;
      this.status = 'Finished'
    }, 5000)
  }

  ngOnInit(): void {
  }
  toggle() {
    this.isHidden = !this.isHidden
  }
  toogleEnabled() {
    this.isEnabled = !this.isEnabled;
  }
}
