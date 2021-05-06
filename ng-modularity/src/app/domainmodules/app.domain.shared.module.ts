import { NgModule } from "@angular/core";
import { GreeterModule } from "../greeter/greeter.module";
import { ProductsModule } from "../products/products.module";
import { UsersModule } from "../users/users.module";



@NgModule({
    imports: [GreeterModule, UsersModule, ProductsModule],
    exports: [GreeterModule, UsersModule, ProductsModule]
})
export class AppDomainSharedModule {

}