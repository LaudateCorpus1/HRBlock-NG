import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { GreeterComponent } from './greeter/greeter.component';
import { GreeterComponent } from './greeter';
import { HelloComponent } from './hello/hello.component';
import { UtilComponent } from './util/util.component';
import { LoggerComponent as MyLogger } from './util/logger/logger.component';
import { HaiComponent } from './util/hai.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent, GreeterComponent, HelloComponent, UtilComponent, MyLogger, HaiComponent, ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
