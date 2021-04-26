import { Observable } from 'rxjs';

//create Producer 
const observable = new Observable(subscriber => {
    //push /set value into subscriber object
    subscriber.next('hello')
    subscriber.next('hai')
    //subscriber.error(new Error('gone'));
    subscriber.next('greet')
    //async result
    setTimeout(() => {
        subscriber.next('async data')
        subscriber.complete();
    }, 4000)
    //    subscriber.complete();
    //subscriber.next('newdata')
});

//listen for data ; create Listener/Consumer/Subscriber

const subscriber = {
    next: data => {
        console.log(data)
    },
    error: err => {
        console.log(err)
    },
    complete: () => {
        console.log('done')
    }
};
observable.subscribe(subscriber);
