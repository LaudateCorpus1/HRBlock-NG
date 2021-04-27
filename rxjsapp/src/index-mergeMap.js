import { of, interval } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

const letters = of('a', 'b', 'c');

const result = letters.pipe(
    mergeMap(x => {
        console.log(x);
        console.log("......")
        return of(1, 2, 3, 4).pipe(map(y => x + y))
    }),
);
result.subscribe(x => console.log(x));