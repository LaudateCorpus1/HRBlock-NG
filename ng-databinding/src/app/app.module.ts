import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ElementbindingComponent } from './propertybinding/elementbinding.component';
import { GreeterComponent } from './propertybinding/greeter.component';
import { EmployeecontainerComponent } from './employee/employeecontainer.component';
import { EmployeepresentationComponent } from './employee/employeepresentation.component';
import { AddressComponent } from './employee/address.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    ElementbindingComponent,
    GreeterComponent,
    EmployeecontainerComponent,
    EmployeepresentationComponent,
    AddressComponent,
    EventbindingComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
