import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { USERS } from '../mock-data/users';
import { LoggerService } from "../services/logger.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private loggerService: LoggerService) { }

    findAll(): Observable<Array<any>> {
        this.loggerService.log();        
        return of(USERS);
    }

}