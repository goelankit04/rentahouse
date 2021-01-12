import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dr-functional',
  templateUrl: './dr-functional.component.html'
})
export class DrFunctionalComponent implements OnInit {
  @HostBinding('class') DrFunctionalComponentClass = 'app-dr-functional';

  constructor() { }

  ngOnInit() {
    // console.log('I am in dr-functionality');
  }

}
