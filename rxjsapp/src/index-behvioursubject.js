
import {

    BehaviorSubject
} from 'rxjs';


const beSubject = new BehaviorSubject(0); // 0 is the initial value


beSubject.subscribe(v => console.log(`Behaviour Subject-1 : ${v}`))
beSubject.subscribe(v => console.log(`Behaviour Subject-2 : ${v}`))
beSubject.next(9)
