import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    constructor() { }
    log() {
        console.log('Logger is activated')
    }
}
