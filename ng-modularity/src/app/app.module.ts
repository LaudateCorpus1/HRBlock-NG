import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppDomainSharedModule } from './domainmodules/app.domain.shared.module';
// import { GreeterModule } from './greeter/greeter.module';
// import { UsersModule } from './users/users.module';
// import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppDomainSharedModule
    // GreeterModule,
    // UsersModule,
    // ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
