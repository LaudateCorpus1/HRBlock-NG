//create operator similar to new Observable

import { Observable } from "rxjs";


const stream = Observable.create(observer => {
  //pushing values
  observer.next('Hello');
  observer.next("hai")
  observer.complete();
});
stream.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));