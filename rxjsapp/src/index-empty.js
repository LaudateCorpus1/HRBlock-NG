import {empty} from 'rxjs';

const emptySource = empty();
emptySource.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));