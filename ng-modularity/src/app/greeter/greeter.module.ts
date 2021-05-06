import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    // CommonModule,FormsModule
    SharedModule
  ],
  exports: [
    HelloComponent
  ]
})
export class GreeterModule { }
