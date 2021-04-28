import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { GreeterComponent } from "./greeter.component";

@NgModule({
  declarations: [AppComponent, GreeterComponent], // view objects - component,pipe,directives
  imports: [BrowserModule], //all sub modules
  providers: [],
  //which component is entry /main/rot
  bootstrap: [AppComponent]

})
export class AppModule { }