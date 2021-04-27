import { throwError, of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

//emit errors
//const source = throwError("something went wrong");
const source = Observable.create(observer => {
    observer.next('good')
    observer.error(new Error('something went wrong'))
});
//handle errors
const handleError = source.pipe(
    catchError(value => of('Caught : ' + value))
)
handleError.subscribe(data => console.log(data))