import { Component } from '@angular/core';
import { HelloService } from './greeter.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: [
  ]
})
export class HelloComponent {
  //domain data
  message: string = "default";

  constructor(private helloService: HelloService) {
    //this.message = this.helloService.sayHello();
    // this.helloService.sayHello(response => {
    //   this.message = response
    // });
  }
  // async ngOnInit() {
  //   // this.helloService.sayHello(response => {
  //   //   this.message = response
  //   // });
  //   // this.helloService.sayHello().then(response => {
  //   //   this.message = response;
  //   // })
  //   this.message  = await this.helloService.sayHello()
  // }
  ngOnInit() {
    this.helloService.sayHello().subscribe(response => {
      this.message = response
    }, error => {
      console.log(error)
    }, () => console.log('completed'));
  }
  ngOnDestroy() {

  }

}
