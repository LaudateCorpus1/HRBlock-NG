import { interval, of, range, throwError } from "rxjs";
import { mergeMap, retry, catchError } from 'rxjs/operators'


const source = interval(1000)

const result = source.pipe(
    //if error occur, then start retry
    mergeMap(val => {
        if (val > 5) {
            return throwError('Value execeed Limit')
        }
        return of(val);
    }),
    retry(2),
    catchError(value => of('Caught : ' + value))
);
result.subscribe(data => console.log(data),
    err => console.log(err), () => console.log('done'));
