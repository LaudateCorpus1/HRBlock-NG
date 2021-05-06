import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, map } from 'rxjs/operators'

@Injectable({
    //this service should be created by global/application injector
    providedIn: 'root'
})
export class HelloService {
    private message: string = "Hello!!"

    constructor() { }
    //biz api - methods : sync api
    // public sayHello(): string {
    //     return 'Hello From Service';
    // }

    //async: callback
    // public sayHello(callback: any): void {
    //     setTimeout(callback, 5000, this.message)
    // }
    //async: promises
    // public sayHello(): Promise<string> {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(resolve, 5000, this.message)
    //     });
    // }
    //Rx js
    // public sayHello(): Observable<string> {
    //     return of(this.message);
    // }
    //Rxjs with operators
    public sayHello(): Observable<string> {
        return of(this.message)
            .pipe(
                map(message => message.toUpperCase()),
                delay(5000),
            )
    }
}