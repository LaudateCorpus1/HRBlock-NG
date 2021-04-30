import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styles: [`
      h1 {
           color: green;
      }
   `  ]
})
export class StyleComponent implements OnInit {

  isActive: boolean = false
  navStyle = "font-size:1.2rem; color:cornflowerblue"
  constructor() { }

  ngOnInit(): void {
  }
  changeStyle() {
    this.isActive = !this.isActive
  }

}
