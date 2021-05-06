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
import { StyleComponent } from './styles/style.component';
import { ParentComponent } from './customevents/parent.component';
import { ChildComponent } from './customevents/child.component';
import { ForloopComponent } from './structuraldirective/forloop.component';
import { IfElseComponent } from './structuraldirective/if-else.component';
import { SwitchcaseComponent } from './structuraldirective/switchcase.component';
import { HighlightDirective } from './attributedirective/highlight.directive';
import { AttributeComponent } from './attributedirective/attribute.component';
import { TemplatereferenceComponent } from './templaterefernce/templatereference.component';
import { PipeComponent } from './pipes/pipe.component';
import { DecimalFractionPipe } from './pipes/decimalfraction.pipe';

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
    StyleComponent,
    ParentComponent,
    ChildComponent,
    ForloopComponent,
    IfElseComponent,
    SwitchcaseComponent,
    HighlightDirective,
    AttributeComponent,
    TemplatereferenceComponent,
    PipeComponent,
    DecimalFractionPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
