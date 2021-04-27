//range
import { fromEvent } from 'rxjs';

//want to generate sequence

const source = fromEvent(document, 'click')

source.subscribe(data => console.log(data), 
err => console.log(err), () => console.log('done'));