

import {
    ReplaySubject
} from 'rxjs';


const replaySubject = new ReplaySubject(3); // buffer 3 values for new subscribers
replaySubject.subscribe({
    next: (v) => console.log(`Replay Subject Subramanian : ${v}`)
});
replaySubject.next(1)
replaySubject.next(2)
replaySubject.next(3)
replaySubject.next(4)
replaySubject.next(5)

replaySubject.subscribe({
    next: (v) => console.log(`Replay Subject : Ram: ${v}`)
});

replaySubject.next(14)
replaySubject.next(24)
replaySubject.next(32)
replaySubject.next(44)
replaySubject.next(555)

replaySubject.subscribe({
    next: (v) => console.log(`Replay Subject : Karthik: ${v}`)
});
