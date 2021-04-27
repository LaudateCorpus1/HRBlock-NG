import {
    interval
} from 'rxjs';
import {
    publish
} from 'rxjs/operators';

//hot using publish and connect opeartor ; convert cold to hot

let hotStream = interval(1000).pipe(
    publish()
)

hotStream.subscribe(
    data => console.log('Subramnaian', data),
    err => console.log(err),
    () => console.log('completed')
);

setTimeout(() => {
    hotStream.subscribe(
          data => console.log('Ram', data), err => console.log(err),
          () => console.log('completed')
    )
}, 3000);

setTimeout(() => {
    hotStream.subscribe(
          data => console.log('Karthik', data), err => console.log(err),
          () => console.log('completed')
    )
}, 5000);



hotStream.connect();
