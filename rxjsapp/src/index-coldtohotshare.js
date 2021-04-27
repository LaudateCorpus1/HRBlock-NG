import {
    interval
} from 'rxjs';
import {
    tap,
    map,
    share
} from 'rxjs/operators';

//emit value in 1s
const source = interval(1000);
//log side effect, emit result
const stream = source.pipe(
    tap(() => console.log('***starts***')),
    map(i => i * 2)
);
//make it hot.
//share observable among subscribers
const hotStream = stream.pipe(share());

hotStream.subscribe(val => console.log(`Subramanian ${val}`));

setTimeout(() => {
    hotStream.subscribe(val => console.log(`Ram ${val}`));
}, 5000)
