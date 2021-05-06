import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterModule } from './greeter/greeter.module';
import { HelloService } from './greeter/greeter.service';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GreeterModule,
    UserModule
  ],
 // providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
