import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: [
  ]
})
export class PipeComponent implements OnInit {

  today = new Date()
  name: string = "subramanian"
  a: number = 0.259;
  b: number = 1.3495;
  user = {
    id: 1,
    name: 'subramanian',
    city: 'coimbatore'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
