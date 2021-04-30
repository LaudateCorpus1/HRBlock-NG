import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereference',
  templateUrl: './templatereference.component.html',
  styles: [
  ]
})
export class TemplatereferenceComponent implements OnInit {

  color:string = 'red'
  firstname:string ='Default'

  public setName(name:string){
     this.firstname = name;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
