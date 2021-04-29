import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementbinding',
  templateUrl: './elementbinding.component.html',
  styles: [
  ]
})
export class ElementbindingComponent implements OnInit {

  imgUrl: string = ".././assets/phone.png"
  isEnabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
