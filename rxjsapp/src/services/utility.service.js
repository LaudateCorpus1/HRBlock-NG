import { from } from 'rxjs';
import { map } from 'rxjs/operators'

export class UtilityService {
    constructor() {

    }
    doubleIt(...values) {
        return from(values).pipe(
            map(value => value * 2)
        )
    }
    transform(...values) {
        return from(values).pipe(
            //double it
            map(value => value * 10),
            //add 2 
            map(value => value + 2),

            map(value => value * 2)

        )
    }
}