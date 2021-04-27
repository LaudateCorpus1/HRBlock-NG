//range
import { ajax } from 'rxjs/ajax';

//want to generate sequence
const url = "https://jsonplaceholder.typicode.com/todos";
const source = ajax(url)

source.subscribe(data => console.log(data.response), 
err => console.log(err), () => console.log('done'));