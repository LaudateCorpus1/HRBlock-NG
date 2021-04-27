//range
import { range } from 'rxjs';

//want to generate sequence

const rangeSource = range(1, 1000)
rangeSource.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));