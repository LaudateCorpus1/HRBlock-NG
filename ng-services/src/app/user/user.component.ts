import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HelloService } from '../greeter/greeter.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  //users: Array<any>
  users: Observable<Array<any>>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.findAll().subscribe(response => {
    //   this.users = response
    // }, error => {
    //   console.log(error)
    // }, () => console.log('completed'));
    this.users = this.userService.findAll();
  }

}
