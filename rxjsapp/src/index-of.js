//create operator similar to new Observable

import { of } from "rxjs";


const stream = of("hello", "hai", "greet")
stream.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));