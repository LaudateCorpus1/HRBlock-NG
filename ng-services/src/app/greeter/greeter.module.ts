import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { HelloService } from './greeter.service';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule
  ],
 // providers: [HelloService],
  exports: [HelloComponent]
})
export class GreeterModule { }
