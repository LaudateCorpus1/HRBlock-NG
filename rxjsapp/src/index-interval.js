//range
import { interval } from 'rxjs';

//want to generate sequence

const intervalSource = interval(1000)
intervalSource.subscribe(data => console.log(data),
 err => console.log(err), () => console.log('done'));